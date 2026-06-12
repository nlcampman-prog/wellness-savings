import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bnv1WBM6.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5uUCU4iV.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy", "description": "Wellness Savings privacy policy \u2014 how we collect, use, and protect your data." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-narrow about-section"> <h1>Privacy Policy</h1> <p><em>Last updated: June 2025</em></p> <h2>Information We Collect</h2> <ul> <li><strong>Analytics data:</strong> Anonymous page view data (pages visited, time on site, referring URLs)</li> <li><strong>Cookies:</strong> We use cookies for basic analytics and affiliate link tracking</li> </ul> <h2>How We Use Your Information</h2> <ul> <li>To improve our website and deal recommendations</li> <li>To track affiliate referrals (no personal data shared with partners)</li> <li>To understand which deals our readers find most valuable</li> </ul> <h2>Third-Party Services</h2> <ul> <li><strong>Affiliate networks:</strong> When you click a deal link, the network may set a cookie to track the referral</li> <li><strong>Analytics:</strong> Anonymous analytics to understand site usage</li> </ul> <h2>Contact</h2> <p>Privacy inquiries: <a href="mailto:privacy@wellnesssavings.org">privacy@wellnesssavings.org</a></p> </div> ` })}`;
}, "/home/team/shared/site2/src/pages/privacy.astro", void 0);

const $$file = "/home/team/shared/site2/src/pages/privacy.astro";
const $$url = "/privacy/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
