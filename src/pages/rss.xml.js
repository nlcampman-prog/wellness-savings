import rss from '@astrojs/rss';

export async function GET(context) {
  const articles = Object.entries(import.meta.glob('../content/articles/*.mdx', { eager: true }));
  const items = articles
    .map(([path, mod]) => {
      const fm = mod.frontmatter;
      return {
        title: fm.title || '',
        description: fm.metaDescription || fm.description || '',
        pubDate: new Date(fm.pubDate || fm.date || Date.now()),
        link: `/articles/${path.split('/').pop()?.replace('.mdx', '') || ''}/`,
        categories: fm.category ? [fm.category] : [],
      };
    })
    .filter(item => item.title && item.description)
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Wellness Savings — Deals & Discount Codes',
    description: 'Save on premium supplements, organic coffee, natural skincare, and wellness products with exclusive discount codes.',
    site: context.site || 'https://wellnesssavings.org',
    items,
    trailingSlash: true,
  });
}