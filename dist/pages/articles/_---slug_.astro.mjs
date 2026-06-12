import { _ as __vite_glob_0_6, a as __vite_glob_0_5, b as __vite_glob_0_4, c as __vite_glob_0_3, d as __vite_glob_0_2, e as __vite_glob_0_1, f as __vite_glob_0_0, $ as $$AdPlaceholder } from '../../chunks/top-skincare-beauty-codes_BB7Xqpo6.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bnv1WBM6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_5uUCU4iV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://wellnesssavings.org");
async function getStaticPaths() {
  const articles = /* #__PURE__ */ Object.assign({"../../content/articles/best-coffee-deals.mdx": __vite_glob_0_0,"../../content/articles/best-collagen-protein-deals-2026.mdx": __vite_glob_0_1,"../../content/articles/best-mushroom-coffee-deals.mdx": __vite_glob_0_2,"../../content/articles/best-supplement-deals-2026.mdx": __vite_glob_0_3,"../../content/articles/best-supplement-deals.mdx": __vite_glob_0_4,"../../content/articles/best-womens-wellness-products.mdx": __vite_glob_0_5,"../../content/articles/top-skincare-beauty-codes.mdx": __vite_glob_0_6});
  return Object.entries(articles).map(([path, module]) => {
    const slug = path.split("/").pop()?.replace(".mdx", "") || "";
    return { params: { slug }, props: { article: module } };
  });
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { article } = Astro2.props;
  const { Content, frontmatter } = article;
  const { title, description, pubDate, updatedDate, category, tags = [] } = frontmatter;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "type": "article", "publishedTime": pubDate, "tags": tags }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-narrow"> <article> <header class="article-header"> ${category && renderTemplate`<a${addAttribute(`/categories/${category.toLowerCase().replace(/\s+/g, "-")}/`, "href")} class="card-category">${category}</a>`} <h1>${title}</h1> <div class="article-meta"> <time${addAttribute(pubDate, "datetime")}>${new Date(pubDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time> ${updatedDate && updatedDate !== pubDate && renderTemplate`<span>(Updated: ${new Date(updatedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })})</span>`} ${tags.length > 0 && renderTemplate`<span>${tags.map((tag) => renderTemplate`<a${addAttribute(`/categories/${tag.toLowerCase().replace(/\s+/g, "-")}/`, "href")} style="font-size:0.85rem;margin-right:0.5rem;">#${tag}</a>`)}</span>`} </div> </header> <div class="article-content">${renderComponent($$result2, "Content", Content, {})}</div> ${renderComponent($$result2, "AdPlaceholder", $$AdPlaceholder, {})} <div class="disclosure"><strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. We only recommend products we have tested and trust.</div> </article> </div> ` })}`;
}, "/home/team/shared/site2/src/pages/articles/[...slug].astro", void 0);

const $$file = "/home/team/shared/site2/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
