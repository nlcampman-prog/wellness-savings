import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute } from './astro/server_Bnv1WBM6.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://wellnesssavings.org");
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { title, description, url, category, date, tags = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card"> ${category && renderTemplate`<span class="card-category">${category}</span>`} <h2 class="card-title"><a${addAttribute(url, "href")}>${title}</a></h2> ${date && renderTemplate`<div class="card-meta"><time${addAttribute(date, "datetime")}>${new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time></div>`} <p class="card-excerpt">${description}</p> </article>`;
}, "/home/team/shared/site2/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
