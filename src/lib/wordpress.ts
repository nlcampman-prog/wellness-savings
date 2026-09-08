import type { SearchItem } from './search';

export const MOM_MODE_SITE = 'https://mommode247.com';
export const MOM_MODE_API = `${MOM_MODE_SITE}/wp-json/wp/v2`;

export type MomModePost = {
  id: number;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  slug: string;
  category: string;
};

type WpRendered = { rendered?: string };
type WpPost = {
  id: number;
  date?: string;
  slug?: string;
  link?: string;
  title?: WpRendered;
  excerpt?: WpRendered;
  categories?: number[];
};
type WpCategory = {
  id: number;
  name?: string;
  slug?: string;
};

const GENERIC_CATEGORIES = new Set(['uncategorized', 'blog-posts', 'blog']);

function decodeHtml(value: string) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '...')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&rsquo;|&lsquo;/g, "'")
    .replace(/&rdquo;|&ldquo;/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/\s*\[\.{3}\]\s*$/, '')
    .trim();
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch (err) {
    console.warn(`[wordpress] Could not load ${url}:`, err);
    return null;
  }
}

function categoryLabel(post: WpPost, categories: WpCategory[]) {
  const names = (post.categories || [])
    .map((id) => categories.find((cat) => cat.id === id))
    .filter((cat): cat is WpCategory => Boolean(cat))
    .filter((cat) => !GENERIC_CATEGORIES.has((cat.slug || '').toLowerCase()))
    .map((cat) => cat.name || '')
    .filter(Boolean);
  return names[0] || 'Mom Mode';
}

export async function getMomModePosts(limit = 12): Promise<MomModePost[]> {
  const [posts, categories] = await Promise.all([
    fetchJson<WpPost[]>(
      `${MOM_MODE_API}/posts?per_page=${Math.min(Math.max(limit, 1), 50)}&_fields=id,date,slug,link,title,excerpt,categories`
    ),
    fetchJson<WpCategory[]>(`${MOM_MODE_API}/categories?per_page=100&_fields=id,name,slug`),
  ]);

  if (!Array.isArray(posts)) return [];
  const cats = Array.isArray(categories) ? categories : [];

  return posts
    .map((post) => {
      const title = decodeHtml(post.title?.rendered || '');
      const excerpt = decodeHtml(post.excerpt?.rendered || '');
      const url = post.link || `${MOM_MODE_SITE}/${post.slug || ''}/`;
      if (!title || !url) return null;
      return {
        id: post.id,
        title,
        excerpt,
        url,
        date: post.date || '',
        slug: post.slug || '',
        category: categoryLabel(post, cats),
      };
    })
    .filter((post): post is MomModePost => Boolean(post));
}

export async function getMomModeSearchItems(): Promise<SearchItem[]> {
  const posts = await getMomModePosts(20);
  return posts.map((post) => ({
    type: 'blog' as const,
    title: post.title,
    description: post.excerpt,
    category: post.category,
    url: post.url,
    date: post.date,
    tags: ['mom mode', 'fashion', 'beauty'],
  }));
}
