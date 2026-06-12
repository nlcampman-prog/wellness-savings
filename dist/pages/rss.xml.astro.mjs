import { _ as __vite_glob_0_6, a as __vite_glob_0_5, b as __vite_glob_0_4, c as __vite_glob_0_3, d as __vite_glob_0_2, e as __vite_glob_0_1, f as __vite_glob_0_0 } from '../chunks/top-skincare-beauty-codes_BB7Xqpo6.mjs';
import rss from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const globResult = /* #__PURE__ */ Object.assign({"../content/articles/best-coffee-deals.mdx": __vite_glob_0_0,"../content/articles/best-collagen-protein-deals-2026.mdx": __vite_glob_0_1,"../content/articles/best-mushroom-coffee-deals.mdx": __vite_glob_0_2,"../content/articles/best-supplement-deals-2026.mdx": __vite_glob_0_3,"../content/articles/best-supplement-deals.mdx": __vite_glob_0_4,"../content/articles/best-womens-wellness-products.mdx": __vite_glob_0_5,"../content/articles/top-skincare-beauty-codes.mdx": __vite_glob_0_6});
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
