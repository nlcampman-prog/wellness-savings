import couponData from '../data/coupons-data.json';
import type { SearchItem } from './search';

export type { SearchItem };

export function couponAnchor(brand: string, code: string) {
  return `coupon-${brand}-${code}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function uniqueCoupons() {
  const groups = [
    ...((couponData as any).wellnesssavings || []),
    ...((couponData as any).fitsupdeals || []),
    ...((couponData as any).momsavesdeals || []),
  ];
  const seen = new Set<string>();
  return groups.filter((c: any) => {
    if (!c?.brand) return false;
    const key = `${c.brand}|${c.code || ''}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getSearchIndex(): SearchItem[] {
  const articles = Object.entries(
    import.meta.glob('../content/articles/*.mdx', { eager: true })
  ).map(([path, mod]: [string, any]) => {
    const fm = mod.frontmatter || {};
    const slug = path.split('/').pop()?.replace('.mdx', '') || '';
    return {
      type: 'article' as const,
      title: fm.title || '',
      description: fm.metaDescription || fm.description || '',
      category: fm.category || 'Review',
      url: `/articles/${slug}/`,
      date: fm.pubDate || fm.date || '',
      tags: Array.isArray(fm.tags) ? fm.tags : [],
    };
  }).filter((item) => item.title);

  const coupons: SearchItem[] = uniqueCoupons().map((c: any) => ({
    type: 'coupon',
    title: c.brand,
    description: c.description || '',
    category: c.category || 'Coupon',
    url: `/coupons/#${couponAnchor(c.brand, c.code || '')}`,
    code: c.code || '',
    discount: c.discount || '',
  }));

  const pages: SearchItem[] = [
    {
      type: 'page',
      title: 'About Nickie',
      description: 'Mom of five, pediatric SLP, and the person behind Wellness Savings.',
      category: 'The site',
      url: '/about/',
    },
    {
      type: 'page',
      title: 'Coupon codes',
      description: 'Every active discount we have verified. Tap a real code to copy it, then shop. Some brands apply the sale through the shop button.',
      category: 'The site',
      url: '/coupons/',
    },
    {
      type: 'page',
      title: 'Categories',
      description: 'Browse reviews and guides by topic.',
      category: 'The site',
      url: '/categories/',
    },
    {
      type: 'page',
      title: 'Contact',
      description: 'Email Nickie at creator.nickie@gmail.com.',
      category: 'The site',
      url: '/contact/',
    },
    {
      type: 'page',
      title: 'Mom Mode 24/7',
      description: 'Nichole’s WordPress blog for fashion, beauty, and everyday mom life. Posts are written in WordPress and listed here on each Vercel deploy.',
      category: 'The site',
      url: '/mom-mode/',
    },
  ];

  return [...articles, ...coupons, ...pages];
}
