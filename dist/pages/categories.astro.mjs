import { f as __vite_glob_0_0, e as __vite_glob_0_1, d as __vite_glob_0_2, c as __vite_glob_0_3, b as __vite_glob_0_4, a as __vite_glob_0_5, _ as __vite_glob_0_6 } from '../chunks/top-skincare-beauty-codes_BB7Xqpo6.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bnv1WBM6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5uUCU4iV.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const articles = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6]);
  const categoryMap = /* @__PURE__ */ new Map();
  articles.forEach((a) => {
    const cat = a.frontmatter?.category;
    if (cat) categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
  });
  const categories = Array.from(categoryMap.entries()).sort((a, b) => b[1] - a[1]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Categories", "description": "Browse wellness deals by category. Find discount codes for supplements, coffee, skincare, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="category-header"> <h1>Browse by Category</h1> <p>Find the best deals in your favorite wellness category.</p> </div> <div class="card-grid"> ${categories.map(([name, count]) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    return renderTemplate`<a${addAttribute(`/categories/${slug}/`, "href")} class="card" style="text-decoration: none; color: inherit;"> <span class="card-category">${name}</span> <h2 class="card-title" style="margin-top: 0.5rem;">${name}</h2> <p class="card-meta">${count} deal${count !== 1 ? "s" : ""}</p> </a>`;
  })} </div> </div> ` })}`;
}, "/home/team/shared/site2/src/pages/categories/index.astro", void 0);

const $$file = "/home/team/shared/site2/src/pages/categories/index.astro";
const $$url = "/categories/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
