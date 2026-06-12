import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bnv1WBM6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5uUCU4iV.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Wellness Savings", "description": "Learn about Wellness Savings \u2014 your source for health & wellness deals and exclusive discount codes." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-narrow about-section"> <h1>About Wellness Savings</h1> <p>Wellness Savings helps you save money on the products that make you feel your best. We curate the best deals on premium supplements, organic coffee, natural skincare, and wellness essentials — so you never have to pay full price again.</p> <h2>What We Do</h2> <p>We research, test, and review health & wellness products, then find the best discount codes and deals available. Every deal on this site is verified and updated regularly.</p> <h2>How We Find Deals</h2> <ul> <li><strong>Direct partnerships:</strong> We work with brands to secure exclusive discount codes for our readers.</li> <li><strong>Deal monitoring:</strong> We track prices across dozens of wellness retailers daily.</li> <li><strong>Community tips:</strong> Our readers share great deals they've found.</li> </ul> <h2>How We Make Money</h2> <ul> <li><strong>Affiliate commissions:</strong> When you purchase through our deal links, we may earn a commission at no extra cost to you.</li> <li><strong>Display ads:</strong> We show relevant wellness advertisements.</li> </ul> <p>Our recommendations are always independent. We never accept payment for positive reviews.</p> <h2>Contact</h2> <p>Questions or suggestions? Email us at <a href="mailto:hello@wellnesssavings.org">hello@wellnesssavings.org</a>.</p> </div> ` })}`;
}, "/home/team/shared/site2/src/pages/about.astro", void 0);

const $$file = "/home/team/shared/site2/src/pages/about.astro";
const $$url = "/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
