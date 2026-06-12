import { f as __vite_glob_0_0, e as __vite_glob_0_1, d as __vite_glob_0_2, c as __vite_glob_0_3, b as __vite_glob_0_4, a as __vite_glob_0_5, _ as __vite_glob_0_6 } from '../chunks/top-skincare-beauty-codes_BB7Xqpo6.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bnv1WBM6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5uUCU4iV.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_C_U60QTF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const articles = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6]);
  const featuredArticles = articles.filter((a) => a.frontmatter?.featured);
  const allArticles = articles.sort(
    (a, b) => new Date(b.frontmatter?.pubDate || 0).getTime() - new Date(a.frontmatter?.pubDate || 0).getTime()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Wellness Savings", "description": "Save on premium supplements, organic coffee, natural skincare, and wellness products. Daily deals and exclusive discount codes.", "type": "website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <div class="container-narrow"> <h1>Save Big on Health &amp; Wellness</h1> <p>Hand-picked discount codes and exclusive deals on the best supplements, coffee, skincare, and wellness products. Never pay full price again.</p> </div> </section> <div class="container"> ${featuredArticles.length > 0 && renderTemplate`<section> <h2>Featured Deals</h2> <div class="card-grid"> ${featuredArticles.map((article) => {
    const { title, description, pubDate, category } = article.frontmatter;
    const slug = article.url?.split("/").pop()?.replace(".mdx", "") || "";
    return renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "title": title, "description": description, "url": `/articles/${slug}/`, "category": category, "date": pubDate })}`;
  })} </div> </section>`} <section> <h2>Latest Deals &amp; Reviews</h2> <div class="card-grid"> ${allArticles.map((article) => {
    const { title, description, pubDate, category } = article.frontmatter;
    const slug = article.url?.split("/").pop()?.replace(".mdx", "") || "";
    return renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "title": title, "description": description, "url": `/articles/${slug}/`, "category": category, "date": pubDate })}`;
  })} </div> </section> </div> ` })}`;
}, "/home/team/shared/site2/src/pages/index.astro", void 0);

const $$file = "/home/team/shared/site2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
