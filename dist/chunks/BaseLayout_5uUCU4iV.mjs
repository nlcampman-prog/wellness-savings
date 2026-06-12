import { b as createAstro, c as createComponent, a as renderTemplate, e as renderSlot, f as renderHead, d as addAttribute, u as unescapeHTML } from './astro/server_Bnv1WBM6.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://wellnesssavings.org");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    canonical,
    image = "/og-default.png",
    type = "website",
    publishedTime,
    tags = []
  } = Astro2.props;
  const siteTitle = "Wellness Savings";
  const fullTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;
  const siteUrl = "https://wellnesssavings.org";
  const pageUrl = canonical || `${siteUrl}${Astro2.url.pathname}`;
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const jsonLd = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: ogImage,
    datePublished: publishedTime,
    author: { "@type": "Organization", name: "Wellness Savings", url: siteUrl },
    publisher: { "@type": "Organization", name: "Wellness Savings", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl }
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: siteUrl,
    description: "Save on premium supplements, organic coffee, natural skincare, and wellness products. Daily deals and exclusive discount codes.",
    potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/search?q={search_term_string}` }, "query-input": "required name=search_term_string" }
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="robots" content="index, follow"><link rel="canonical"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:type"', '><meta property="og:site_name"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', ">", "", "<title>", '</title><script type="application/ld+json">', '<\/script><link rel="alternate" type="application/rss+xml"', ' href="/rss.xml"><link rel="stylesheet" href="/src/styles/global.css"><link rel="icon" type="image/svg+xml" href="/favicon.svg">', '</head> <body> <header class="site-header"> <div class="header-inner"> <a href="/" class="site-logo"> <span class="logo-icon">WS</span>\nWellness Savings\n</a> <nav class="site-nav"> <a href="/">Home</a> <a href="/categories/">Categories</a> <a href="/about/">About</a> </nav> </div> </header> <main> ', ' </main> <footer class="site-footer"> <div class="footer-inner"> <div class="footer-text">\n&copy; ', ' Wellness Savings. All rights reserved.\n</div> <div class="footer-links"> <a href="/about/">About</a> <a href="/categories/">Categories</a> <a href="/privacy/">Privacy Policy</a> <a href="/affiliate-disclosure/">Affiliate Disclosure</a> </div> </div> </footer> </body></html>'])), addAttribute(description, "content"), addAttribute(pageUrl, "href"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(pageUrl, "content"), addAttribute(type, "content"), addAttribute(siteTitle, "content"), addAttribute(ogImage, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`), publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`, fullTitle, unescapeHTML(JSON.stringify(jsonLd)), addAttribute(`${siteTitle} \u2014 Deals & Discount Codes`, "title"), renderHead(), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear());
}, "/home/team/shared/site2/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
