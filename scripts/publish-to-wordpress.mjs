#!/usr/bin/env node
/**
 * Publish a markdown/MDX draft to Mom Mode 24/7 (WordPress).
 *
 * WordPress itself is still hosted on SiteGround. This script only uses the
 * public REST API so you can write in this repo (or in Cursor) and send a
 * draft to https://mommode247.com for review in WP Admin.
 *
 * Setup (once):
 *   1. In WordPress: Users → Profile → Application Passwords → add one
 *      named "Vercel / Cursor".
 *   2. In the Vercel project (or a local .env), set:
 *        WP_USER=your_wp_username
 *        WP_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx xxxx
 *      Optional: WP_URL=https://mommode247.com
 *
 * Usage:
 *   node scripts/publish-to-wordpress.mjs path/to/article.mdx
 *   node scripts/publish-to-wordpress.mjs path/to/article.mdx --publish
 *
 * Defaults to status=draft so you can add Fashion/Beauty categories,
 * a featured image, and affiliate blocks in WordPress before it goes live.
 */
import { readFile } from 'node:fs/promises';
import { basename } from 'node:path';

const WP_URL = (process.env.WP_URL || 'https://mommode247.com').replace(/\/$/, '');
const WP_USER = process.env.WP_USER || '';
const WP_APP_PASSWORD = (process.env.WP_APP_PASSWORD || '').replace(/\s+/g, '');

function parseArgs(argv) {
  const files = [];
  let publish = false;
  for (const arg of argv) {
    if (arg === '--publish') publish = true;
    else if (!arg.startsWith('-')) files.push(arg);
  }
  return { files, publish };
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const fm = {};
  let body = raw;
  if (match) {
    body = raw.slice(match[0].length);
    for (const line of match[1].split('\n')) {
      const idx = line.indexOf(':');
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      fm[key] = value;
    }
  }
  return { fm, body };
}

function markdownToHtml(markdown) {
  let text = markdown
    .replace(/^import\s+.+;?\s*$/gm, '')
    .replace(/<[A-Z][\s\S]*?\/>/g, '')
    .replace(/<[A-Z][\s\S]*?>[\s\S]*?<\/[A-Z][A-Za-z0-9]*\s*>/g, '')
    .replace(/\r\n/g, '\n')
    .trim();

  const blocks = text.split(/\n{2,}/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (/^### /.test(trimmed)) return `<h3>${inline(trimmed.slice(4))}</h3>`;
      if (/^## /.test(trimmed)) return `<h2>${inline(trimmed.slice(3))}</h2>`;
      if (/^# /.test(trimmed)) return `<h1>${inline(trimmed.slice(2))}</h1>`;
      if (/^(- |\* )/.test(trimmed)) {
        const items = trimmed
          .split('\n')
          .filter((line) => /^(- |\* )/.test(line))
          .map((line) => `<li>${inline(line.replace(/^(- |\* )/, ''))}</li>`)
          .join('');
        return `<ul>${items}</ul>`;
      }
      return `<p>${inline(trimmed.replace(/\n/g, ' '))}</p>`;
    })
    .filter(Boolean)
    .join('\n');
}

function inline(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>');
}

function slugFromFile(filePath, fm) {
  if (fm.slug) return fm.slug.replace(/^\/|\/$/g, '');
  return basename(filePath).replace(/\.(mdx|md)$/i, '');
}

async function publishFile(filePath, status) {
  const raw = await readFile(filePath, 'utf8');
  const { fm, body } = parseFrontmatter(raw);
  const title = fm.title || slugFromFile(filePath, fm);
  const payload = {
    title,
    slug: slugFromFile(filePath, fm),
    excerpt: fm.metaDescription || fm.description || '',
    content: markdownToHtml(body),
    status,
  };

  const auth = Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString('base64');
  const response = await fetch(`${WP_URL}/wp-json/wp/v2/posts`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.message || data.code || response.statusText;
    throw new Error(`WordPress ${response.status}: ${message}`);
  }
  return data;
}

const { files, publish } = parseArgs(process.argv.slice(2));
if (!files.length) {
  console.error('Usage: node scripts/publish-to-wordpress.mjs <article.mdx> [--publish]');
  process.exit(1);
}
if (!WP_USER || !WP_APP_PASSWORD) {
  console.error('Set WP_USER and WP_APP_PASSWORD (WordPress Application Password) before publishing.');
  process.exit(1);
}

const status = publish ? 'publish' : 'draft';
for (const file of files) {
  const post = await publishFile(file, status);
  console.log(`${status === 'draft' ? 'Draft saved' : 'Published'}: ${post.link || post.guid?.rendered || post.id}`);
  if (status === 'draft') {
    console.log('Open WP Admin → Posts to add Fashion/Beauty categories, then publish.');
  }
}
