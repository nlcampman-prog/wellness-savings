import rss from '@astrojs/rss';

export async function GET(context) {
  const globResult = import.meta.glob('../content/articles/*.mdx', { eager: true });
  const articles = Object.values(globResult);
  const items = articles
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter?.pubDate || 0).getTime();
      const dateB = new Date(b.frontmatter?.pubDate || 0).getTime();
      return dateB - dateA;
    })
    .map((article) => {
      const { title, description, pubDate, category } = article.frontmatter;
      const url = article.url || '';
      const slug = url.split('/').pop()?.replace('.mdx', '') || '';
      return {
        title,
        description,
        pubDate: new Date(pubDate),
        link: `/articles/${slug}/`,
        categories: category ? [category] : [],
      };
    });

  return rss({
    title: 'Wellness Savings — Deals & Discount Codes',
    description: 'Save on premium supplements, organic coffee, natural skincare, and wellness products with exclusive discount codes.',
    site: context.site || 'https://wellnesssavings.org',
    items,
    trailingSlash: true,
  });
}