import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bnv1WBM6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5uUCU4iV.mjs';
export { renderers } from '../renderers.mjs';

const $$AffiliateDisclosure = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Affiliate Disclosure", "description": "Wellness Savings affiliate disclosure \u2014 transparency about how we earn revenue." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-narrow about-section"> <h1>Affiliate Disclosure</h1> <p><em>Last updated: June 2025</em></p> <p>Wellness Savings is committed to complete transparency about how we generate revenue.</p> <h2>Affiliate Links</h2> <p>Many of the links on this website are affiliate links. If you click a link and make a purchase, we may earn a commission at no additional cost to you.</p> <h2>Our Commitment</h2> <ul> <li>We <strong>only</strong> recommend products we believe provide genuine value</li> <li>Affiliate relationships <strong>never</strong> influence our reviews or rankings</li> <li>We disclose affiliate relationships clearly within each article</li> </ul> <h2>Questions?</h2> <p>Contact us at <a href="mailto:hello@wellnesssavings.org">hello@wellnesssavings.org</a>.</p> </div> ` })}`;
}, "/home/team/shared/site2/src/pages/affiliate-disclosure.astro", void 0);

const $$file = "/home/team/shared/site2/src/pages/affiliate-disclosure.astro";
const $$url = "/affiliate-disclosure/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AffiliateDisclosure,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
