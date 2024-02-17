import { _ as _export_sfc, a as getThumbnailUrl, $ as $$PageLayout, b as getMediumUrl } from './404_xtWapAlt.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_SQXIztTb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as fetchHomePage, T as TextBlock, a as TechList, b as fetchProjectsLandingPage } from './_slug__k5lZDHS6.mjs';
import { useSSRContext, mergeProps, defineComponent, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import 'clsx';

const _sfc_main$3 = {};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))}><div class="hero-text"><div class="inner">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "disco-ball", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "intro", {}, null, _push, _parent);
  _push(`</div></div>`);
  ssrRenderSlot(_ctx.$slots, "btn-links", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const Hero = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender$3]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ImageTextTout",
  props: {
    label: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-5 gap-x-[4rem] gap-y-[2rem] items-center" }, _attrs))}><div class="md:col-span-2 relative flex justify-center items-center aspect-square"><div class="flex justify-center items-center aspect-square rounded-3xl p-[2rem] w-fit bg-black dark:bg-light-yellow/60">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><div class="md:col-span-3 text-center md:text-left flex justify-center flex-col">`);
  if ($props.label) {
    _push(`<span class="font-bold text-orange-900 dark:text-inherit">${ssrInterpolate($props.label)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h2 class="font-monoton text-[2rem] md:text-[3.125rem] pt-[1rem] md:pt-[2.5rem] dark:text-light-yellow/80 leading-[120%]">${ssrInterpolate($props.text)}</h2></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ImageTextTout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ImageTextTout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardFeaturedProject",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const projectStatusText = (status) => {
      if (status === "live") {
        return "";
      }
      if (status === "development") {
        return "\u{1F6A7}";
      }
      if (status === "bug" || status === "down") {
        return "\u26D4\uFE0F";
      }
      return "\u26A0\uFE0F";
    };
    const projectUrl = computed(() => {
      return `/projects/${props.project?.slug?.current}`;
    });
    const __returned__ = { props, projectStatusText, projectUrl, get getThumbnailUrl() {
      return getThumbnailUrl;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $setup.projectUrl,
    class: "no-underline"
  }, _attrs))}><div class="flex flex-col-1 zoom-in-out"><img${ssrRenderAttr("src", $setup.getThumbnailUrl($props.project.mainImage?._id))}${ssrRenderAttr("alt", $props.project.mainImage?.altText || `Image of ${$props.project.title}`)} class="rounded-image"><div class="flex flex-col gap-y-[0.625rem] text-[1.125rem]"><div class="project-title flex gap-x-[0.5rem] justify-between"><span class="font-bold dark:text-light-yellow/90">${ssrInterpolate($props.project.title)}</span>`);
  if ($setup.projectStatusText($props.project.status)) {
    _push(`<div class="status">${ssrInterpolate($setup.projectStatusText($props.project.status))}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="line-clamp-3 leading-[130%] text-[1rem]">${ssrInterpolate($props.project.intro)}</div></div></div></a>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/CardFeaturedProject.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardFeaturedProject = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectGrid",
  props: {
    projects: {
      type: Array,
      required: true
    },
    minGridCols: {
      type: Number,
      required: false,
      default: 1
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const gridCols = computed(() => ({
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": props.minGridCols === 1,
      "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": props.minGridCols === 2,
      "grid-cols-3": props.minGridCols === 3
    }));
    const __returned__ = { props, gridCols, CardFeaturedProject };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["grid gap-[2rem]", $setup.gridCols]
  }, _attrs))}><!--[-->`);
  ssrRenderList($props.projects, (project) => {
    _push(`<li>`);
    _push(ssrRenderComponent($setup["CardFeaturedProject"], {
      project,
      key: project._id
    }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ProjectGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro$1 = createAstro("https://astro-portfolio-rldev.netlify.app/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const data = await fetchHomePage();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `${data?.profile.name} | ${data?.page.title}`, "seoDescription": data?.page.seoDescription, "seoImage": data?.page.seoImage, "profile": data?.profile, "global": data?.global }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-col-4"> <!-- Intro --> <section class="page-section"> ${renderComponent($$result2, "Hero", Hero, { "showLinks": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/Hero.vue", "client:component-export": "default" }, { "btn-links": ($$result3) => renderTemplate`<div class="btn-links"> <a class="btn primary" href="/projects/">Check Projects</a> <a class="btn secondary" href="#featured-skills">Explore Skills</a> </div>`, "intro": ($$result3) => renderTemplate`<div class="container"> <p class="intro">${data?.global.intro}</p> </div>`, "subtitle": ($$result3) => renderTemplate`<h2 class="subtitle one pt-[1rem]">${data?.profile.tagline}</h2><h2 class="subtitle two" aria-hidden="true">${data?.profile.tagline}</h2><h2 class="subtitle three" aria-hidden="true">${data?.profile.tagline}</h2><h2 class="subtitle four pb-[1rem] md:pb-[2rem]" aria-hidden="true"> ${data?.profile.tagline} </h2>`, "title": ($$result3) => renderTemplate`<h1 class="title">${data?.profile.name}</h1>` })} </section> <!-- About --> <section class="page-section flex-col-4"> ${renderComponent($$result2, "ImageTextTout", ImageTextTout, { "label": data?.profile.nickname, "text": data?.profile.greeting, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/ImageTextTout.vue", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <img${addAttribute(getMediumUrl(data?.profile.image._id), "src")}${addAttribute(data?.profile.image.altText, "alt")}> ` })} ${renderComponent($$result2, "TextBlock", TextBlock, { "text": data?.profile.bio, "isRichtext": false }, { "title": ($$result3) => renderTemplate`<h2 class="section-title">${data?.page.aboutSection?.title}</h2>` })} </section> <!-- Projects --> <section class="page-section"> ${renderComponent($$result2, "TextBlock", TextBlock, { "text": data?.page.projectsSection?.body, "isRichtext": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/TextBlock.vue", "client:component-export": "default" }, { "title": ($$result3) => renderTemplate`<div class="flex justify-between"> <h2 class="section-title">${data?.page.projectsSection?.title}</h2> <a v-if="showLink" class="uppercase font-bold" href="/projects">View All</a> </div>` })} ${renderComponent($$result2, "ProjectGrid", ProjectGrid, { "projects": data?.projects, "minGridCols": 1 })} </section> <!-- Skills --> <section class="page-section"> ${renderComponent($$result2, "TextBlock", TextBlock, { "text": data?.page.skillsSection?.body, "isRichtext": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/TextBlock.vue", "client:component-export": "default" }, { "title": ($$result3) => renderTemplate`<h2 class="section-title">${data?.page.skillsSection?.title}</h2>` })} <ul class="bottom grid md:grid-cols-3 gap-[2rem]">${data?.skillsGroups.map((item) => renderTemplate`<li class="lists flex flex-col gap-y-[2rem]"> <h3 class="text-[1.125rem]">${item.title}</h3> ${renderComponent($$result2, "TechList", TechList, { "items": item.skills, "isOpen": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/TechList.vue", "client:component-export": "default" })} </li>`)} </ul> </section> </div> ` })}`;
}, "/Users/rayluna/code/projects/astro-portfolio/src/pages/index.astro", void 0);

const $$file$1 = "/Users/rayluna/code/projects/astro-portfolio/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://astro-portfolio-rldev.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const data = await fetchProjectsLandingPage();
  if (!data) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `${data?.profile.name} | ${data?.page.title}`, "global": data?.global, "profile": data?.profile, "seoDescription": data?.page.seoDescription, "seoImage": data?.page.seoImage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-col-4 md:flex-col-6 pt-[2rem] md:pt-[4rem]"> ${data?.projectGroups.map((category) => renderTemplate`<section class="page-section flex-col-3"> ${renderComponent($$result2, "TextBlock", TextBlock, { "class": "text-center text-[1.25rem]", "text": category.description, "isRichtext": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/TextBlock.vue", "client:component-export": "default" }, { "title": ($$result3) => renderTemplate`<h2>${category.title}</h2>` })} ${renderComponent($$result2, "ProjectGrid", ProjectGrid, { "projects": category.projects, "minGridCols": 2, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/ProjectGrid.vue", "client:component-export": "default" })} </section>`)} </div> ` })}`;
}, "/Users/rayluna/code/projects/astro-portfolio/src/pages/projects/index.astro", void 0);

const $$file = "/Users/rayluna/code/projects/astro-portfolio/src/pages/projects/index.astro";
const $$url = "/projects";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
