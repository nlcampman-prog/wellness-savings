import { f as __vite_glob_0_0, e as __vite_glob_0_1, d as __vite_glob_0_2, c as __vite_glob_0_3, b as __vite_glob_0_4, a as __vite_glob_0_5, _ as __vite_glob_0_6 } from '../../chunks/top-skincare-beauty-codes_BB7Xqpo6.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bnv1WBM6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_5uUCU4iV.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_C_U60QTF.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://wellnesssavings.org");
async function getStaticPaths() {
  const articles = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6]);
  const categorySlugs = /* @__PURE__ */ new Set();
  articles.forEach((a) => {
    const cat = a.frontmatter?.category;
    if (cat) categorySlugs.add(cat.toLowerCase().replace(/\s+/g, "-"));
  });
  return Array.from(categorySlugs).map((slug) => ({ params: { slug }, props: {} }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  const articles = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6]);
  const matchingArticles = articles.filter((a) => {
    const cat = a.frontmatter?.category;
    return cat && cat.toLowerCase().replace(/\s+/g, "-") === slug;
  }).sort((a, b) => new Date(b.frontmatter?.pubDate || 0).getTime() - new Date(a.frontmatter?.pubDate || 0).getTime());
  const categoryName = matchingArticles[0]?.frontmatter?.category || slug;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${categoryName} Deals & Discount Codes`, "description": `Browse the best ${categoryName.toLowerCase()} deals and discount codes. Save on top wellness products.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="category-header"> <a href="/categories/" class="card-category" style="margin-bottom: 0.5rem; display: inline-block;">All Categories</a> <h1>${categoryName}</h1> <p>${matchingArticles.length} deal${matchingArticles.length !== 1 ? "s" : ""}</p> </div> ${matchingArticles.length > 0 ? renderTemplate`<div class="card-grid"> ${matchingArticles.map((article) => {
    const { title, description, pubDate, category } = article.frontmatter;
    const articleSlug = article.url?.split("/").pop()?.replace(".mdx", "") || "";
    return renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "title": title, "description": description, "url": `/articles/${articleSlug}/`, "category": category, "date": pubDate })}`;
  })} </div>` : renderTemplate`<p>No deals found in this category yet. Check back soon!</p>`} </div> ` })}`;
}, "/home/team/shared/site2/src/pages/categories/[slug]/index.astro", void 0);

const $$file = "/home/team/shared/site2/src/pages/categories/[slug]/index.astro";
const $$url = "/categories/[slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
