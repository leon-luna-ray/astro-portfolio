import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_SQXIztTb.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.7wOAM6dQ.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.7wOAM6dQ.css"}],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.7wOAM6dQ.css"}],"routeData":{"route":"/projects/[slug]","type":"page","pattern":"^\\/projects\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/projects/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.7wOAM6dQ.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astro-portfolio-rldev.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/rayluna/code/projects/astro-portfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/rayluna/code/projects/astro-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/rayluna/code/projects/astro-portfolio/src/pages/projects/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/rayluna/code/projects/astro-portfolio/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_ctrMpwXm.mjs","\u0000@astrojs-manifest":"manifest_gkXgFWL8.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_jG6xx2r0.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_YFaYyZSb.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_pIGxo3qG.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"chunks/_slug__TdS8nEHZ.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_99JQSzDX.mjs","/Users/rayluna/code/projects/astro-portfolio/src/components/TechList.vue":"_astro/TechList.uOAsvsSi.js","/Users/rayluna/code/projects/astro-portfolio/src/components/ImageTextTout.vue":"_astro/ImageTextTout.GoHJ_pGH.js","/Users/rayluna/code/projects/astro-portfolio/src/components/Hero.vue":"_astro/Hero.OHsZeuq7.js","/Users/rayluna/code/projects/astro-portfolio/src/components/ProjectGrid.vue":"_astro/ProjectGrid.Th8hGnrf.js","/Users/rayluna/code/projects/astro-portfolio/src/components/TextBlock.vue":"_astro/TextBlock.VlC-BeeU.js","/Users/rayluna/code/projects/astro-portfolio/src/components/DetailHeader.vue":"_astro/DetailHeader._iyZ3Gt7.js","/Users/rayluna/code/projects/astro-portfolio/src/components/Header.vue":"_astro/Header.8wVoTtJz.js","@astrojs/vue/client.js":"_astro/client.XfAa7zjk.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.7wOAM6dQ.css","/favicon.svg","/_astro/DetailHeader._iyZ3Gt7.js","/_astro/Header.8wVoTtJz.js","/_astro/Hero.OHsZeuq7.js","/_astro/ImageTextTout.GoHJ_pGH.js","/_astro/ProjectGrid.Th8hGnrf.js","/_astro/TechList.uOAsvsSi.js","/_astro/TextBlock.VlC-BeeU.js","/_astro/_plugin-vue_export-helper.x3n3nnut.js","/_astro/client.XfAa7zjk.js","/_astro/images.XtgPxbx1.js","/_astro/runtime-core.esm-bundler.6EtIXRPn.js","/img/astro-portfolio.png","/img/spinner.png","/img/favicons/android-chrome-192x192.png","/img/favicons/android-chrome-512x512.png","/img/favicons/apple-touch-icon.png","/img/favicons/favicon-16x16.png","/img/favicons/favicon-32x32.png","/img/favicons/favicon.ico"]});

export { manifest };
