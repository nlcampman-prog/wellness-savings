import fs from 'node:fs';
import path from 'node:path';
import { pinFilenames } from '../data/pins';

export function publicFileExists(src?: string) {
  if (!src || !src.startsWith('/')) return false;
  return fs.existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, '')));
}

export function getPinImage(slug: string) {
  for (const filename of pinFilenames) {
    const name = filename.replace('.jpg', '');
    if (name.includes(slug) || slug.includes(name.split('-2026')[0] || '')) {
      const src = `/pins/${filename}`;
      if (publicFileExists(src)) return src;
    }
  }
  return null;
}

export function resolveCardImage(slug: string, featuredImage?: string) {
  const cleaned = (featuredImage || '').trim().replace(/^['"]|['"]$/g, '');
  if (publicFileExists(cleaned)) return cleaned;
  return getPinImage(slug) || '';
}
