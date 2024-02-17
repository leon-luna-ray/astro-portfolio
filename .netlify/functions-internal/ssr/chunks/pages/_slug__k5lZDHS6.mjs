import { x as xs, I as Is, _ as _export_sfc, S as Ss, g as getImageUrl, a as getThumbnailUrl, b as getMediumUrl, $ as $$PageLayout } from './404_xtWapAlt.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_SQXIztTb.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { Octokit } from 'octokit';
import { useSSRContext, mergeProps, defineComponent, ref, onMounted, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';

const queryGlobalSettings = xs`*[_type == "globalSettings"][0]`;
const queryProfile = xs`*[_type == "profileDetails"][0]{
    ...,
    "image": image.asset->{
      _id,
      title,
      altText,
      description,
    }
  }`;
const queryFeaturedProjects = xs`
  *[_type == "project" && featured] | order(_updatedAt desc) {
    _id,
    intro,
    description,
    "mainImage": mainImage.asset->{
      _id,
      title,
      altText,
      description,
    }, 
    slug,
    status,
    title,
    technologies[]->{_id, title, slug, description, website, tags[]->{title, slug}},
}`;
const queryPageType = (type, slug) => xs`*[_type == '${type}' && slug.current == '${slug}']{
    ...,
    "seoImage": seoImage.asset -> {
      _id,
      title,
      altText,
      description
    }
  }[0]`;
const queryProject = (slug) => xs`*[_type == "project" && slug.current == '${slug}'] {
    _id,
    customUrl,
    description,
    featured,
    intro,
    "mainImage": mainImage.asset->{
      _id,
      title,
      altText,
      description,
    },
    "galleryImages": galleryImages[]{
      "image": asset->{
        _id,
        title,
        altText,
        description,
      }
    },
    relatedProjects[]->{
      _id, 
      slug, 
      title, 
      "mainImage": mainImage.asset->{
        _id,
        title,
        altText,
        description,
      }, 
      intro},
    repository,
    repositoryUsername,
    repositorySlug,
    slug,
    status,
    technologies[]->{_id, title, slug, description, website, tags[]->{title, slug}},
    tags[]->{title, slug},
    title,
    url,
  }[0]`;
const queryProjectGroups = (slugs) => {
  const slugQueries = slugs.map((slug) => `slug.current == "${slug}"`).join(" || ");
  return xs`*[_type == "projectGroup" && (${slugQueries})] | order(title asc) {
        _id,
        title,
        slug,
        description,
        projects[]->{
            _id, 
            intro, 
            "mainImage": mainImage.asset->{
                _id,
                title,
                altText,
                description,
            }, 
            slug, 
            status, 
            title, 
            technologies[]->{_id, title, slug,},
        },
    }`;
};
const querySkillsGroups = xs`*[_type == "skillsList"] | order(title) {
    title,
    "skills": skills[] -> {
      _id,
      title,
      slug,
      description,
      website
    }
  }`;
async function fetchHomePage() {
  const query = xs`{
        "global": ${queryGlobalSettings},
        "page": ${queryPageType("homePage", "astro-portfolio-home-page")},
        "profile": ${queryProfile},
        "projects": ${queryFeaturedProjects},
        "skillsGroups": ${querySkillsGroups},
    }`;
  const data = await Is().fetch(query);
  return data;
}
async function fetchProjectsLandingPage() {
  const query = xs`{
        "global": ${queryGlobalSettings},
        "page": ${queryPageType("landingPage", "astro-portfolio-projects")},
        "profile": ${queryProfile},
        "projectGroups": ${queryProjectGroups(["personal-projects", "portfolio-projects"])},
    }`;
  const data = await Is().fetch(query);
  return data;
}
async function fetchProjectDetailPage(slug) {
  const query = xs`{
        "global": ${queryGlobalSettings},
        "profile": ${queryProfile},
        "project": ${queryProject(slug)},
    }`;
  const data = await Is().fetch(query);
  return data;
}

const _sfc_main$b = {};

function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "icon-chevron-up",
    "aria-hidden": "true"
  }, _attrs))}><polyline points="18 15 12 9 6 15"></polyline></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/IconChevronUp.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : undefined
};
const IconChevronUp = /*#__PURE__*/_export_sfc(_sfc_main$b, [['ssrRender',_sfc_ssrRender$b]]);

const _sfc_main$a = {};

function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "icon-chevron-down",
    "aria-hidden": "true"
  }, _attrs))}><polyline points="6 9 12 15 18 9"></polyline></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/IconChevronDown.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : undefined
};
const IconChevronDown = /*#__PURE__*/_export_sfc(_sfc_main$a, [['ssrRender',_sfc_ssrRender$a]]);

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TechList",
  props: {
    items: {
      type: Array,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const expandedItem = ref(null);
    const setExpandedItem = (value) => {
      if (expandedItem.value === value) {
        expandedItem.value = null;
      } else {
        expandedItem.value = value;
      }
    };
    onMounted(() => {
      if (props.isOpen) {
        setExpandedItem(0);
      }
    });
    const __returned__ = { props, expandedItem, setExpandedItem, IconChevronUp, IconChevronDown };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tech-list flex-col-2" }, _attrs))}><ul class="link-list font-bold flex-col-1"><!--[-->`);
  ssrRenderList($props.items, (item, index) => {
    _push(`<li class="hover:cursor-pointer flex-col-1"><div class="flex justify-between pb-0 items-center text-[1rem]"><span>${ssrInterpolate(item.title)}</span>`);
    if ($setup.expandedItem === index) {
      _push(ssrRenderComponent($setup["IconChevronUp"], {
        class: "h-[1rem] up",
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(ssrRenderComponent($setup["IconChevronDown"], {
        class: "h-[1rem] down",
        "aria-hidden": "true"
      }, null, _parent));
    }
    _push(`</div>`);
    if ($setup.expandedItem === index) {
      _push(`<p class="text-[0.875rem] font-light">${ssrInterpolate(item.description)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TechList.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const TechList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);

const customComponents = {
  types: {
    image: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${getImageUrl(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${getImageUrl(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    }
  }
};
function sanityPortableText(portableText) {
  return Ss(portableText, customComponents);
}

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TextBlock",
  props: {
    text: {
      type: [String, Array],
      required: false
    },
    isRichtext: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const richtextRef = ref(null);
    const setLinkTargets = () => {
      if (richtextRef.value) {
        const links = richtextRef.value.querySelectorAll("a");
        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href && !href.startsWith("/")) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
          }
        });
      }
    };
    onMounted(() => {
      if (props.isRichtext) {
        setLinkTargets();
      }
    });
    const __returned__ = { props, richtextRef, setLinkTargets, get sanityPortableText() {
      return sanityPortableText;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-col-1" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  if ($props.text && $props.isRichtext) {
    _push(`<div class="richtext">${$setup.sanityPortableText($props.text)}</div>`);
  } else if ($props.text) {
    _push(`<div class="richtext">${ssrInterpolate($props.text)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TextBlock.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TextBlock = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);

const ABAP = {
	color: "#E8274B",
	url: "https://github.com/trending?l=ABAP"
};
const ActionScript = {
	color: "#882B0F",
	url: "https://github.com/trending?l=ActionScript"
};
const Ada = {
	color: "#02f88c",
	url: "https://github.com/trending?l=Ada"
};
const Agda = {
	color: "#315665",
	url: "https://github.com/trending?l=Agda"
};
const AIDL = {
	color: "#34EB6B",
	url: "https://github.com/trending?l=AIDL"
};
const AL = {
	color: "#3AA2B5",
	url: "https://github.com/trending?l=AL"
};
const Alloy = {
	color: "#64C800",
	url: "https://github.com/trending?l=Alloy"
};
const AMPL = {
	color: "#E6EFBB",
	url: "https://github.com/trending?l=AMPL"
};
const AngelScript = {
	color: "#C7D7DC",
	url: "https://github.com/trending?l=AngelScript"
};
const Antlers = {
	color: "#ff269e",
	url: "https://github.com/trending?l=Antlers"
};
const ANTLR = {
	color: "#9DC3FF",
	url: "https://github.com/trending?l=ANTLR"
};
const ApacheConf = {
	color: "#d12127",
	url: "https://github.com/trending?l=ApacheConf"
};
const Apex = {
	color: "#1797c0",
	url: "https://github.com/trending?l=Apex"
};
const APL = {
	color: "#5A8164",
	url: "https://github.com/trending?l=APL"
};
const AppleScript = {
	color: "#101F1F",
	url: "https://github.com/trending?l=AppleScript"
};
const Arc = {
	color: "#aa2afe",
	url: "https://github.com/trending?l=Arc"
};
const AsciiDoc = {
	color: "#73a0c5",
	url: "https://github.com/trending?l=AsciiDoc"
};
const ASL = {
	color: null,
	url: "https://github.com/trending?l=ASL"
};
const AspectJ = {
	color: "#a957b0",
	url: "https://github.com/trending?l=AspectJ"
};
const Assembly = {
	color: "#6E4C13",
	url: "https://github.com/trending?l=Assembly"
};
const Astro = {
	color: "#ff5a03",
	url: "https://github.com/trending?l=Astro"
};
const Asymptote = {
	color: "#ff0000",
	url: "https://github.com/trending?l=Asymptote"
};
const ATS = {
	color: "#1ac620",
	url: "https://github.com/trending?l=ATS"
};
const Augeas = {
	color: "#9CC134",
	url: "https://github.com/trending?l=Augeas"
};
const AutoHotkey = {
	color: "#6594b9",
	url: "https://github.com/trending?l=AutoHotkey"
};
const AutoIt = {
	color: "#1C3552",
	url: "https://github.com/trending?l=AutoIt"
};
const Awk = {
	color: "#c30e9b",
	url: "https://github.com/trending?l=Awk"
};
const Ballerina = {
	color: "#FF5000",
	url: "https://github.com/trending?l=Ballerina"
};
const BASIC = {
	color: "#ff0000",
	url: "https://github.com/trending?l=BASIC"
};
const Batchfile = {
	color: "#C1F12E",
	url: "https://github.com/trending?l=Batchfile"
};
const Beef = {
	color: "#a52f4e",
	url: "https://github.com/trending?l=Beef"
};
const Befunge = {
	color: null,
	url: "https://github.com/trending?l=Befunge"
};
const Berry = {
	color: "#15A13C",
	url: "https://github.com/trending?l=Berry"
};
const BibTeX = {
	color: "#778899",
	url: "https://github.com/trending?l=BibTeX"
};
const Bicep = {
	color: "#519aba",
	url: "https://github.com/trending?l=Bicep"
};
const Bikeshed = {
	color: "#5562ac",
	url: "https://github.com/trending?l=Bikeshed"
};
const Bison = {
	color: "#6A463F",
	url: "https://github.com/trending?l=Bison"
};
const BitBake = {
	color: "#00bce4",
	url: "https://github.com/trending?l=BitBake"
};
const Blade = {
	color: "#f7523f",
	url: "https://github.com/trending?l=Blade"
};
const BlitzBasic = {
	color: "#00FFAE",
	url: "https://github.com/trending?l=BlitzBasic"
};
const BlitzMax = {
	color: "#cd6400",
	url: "https://github.com/trending?l=BlitzMax"
};
const Bluespec = {
	color: "#12223c",
	url: "https://github.com/trending?l=Bluespec"
};
const Boo = {
	color: "#d4bec1",
	url: "https://github.com/trending?l=Boo"
};
const Boogie = {
	color: "#c80fa0",
	url: "https://github.com/trending?l=Boogie"
};
const Brainfuck = {
	color: "#2F2530",
	url: "https://github.com/trending?l=Brainfuck"
};
const BrighterScript = {
	color: "#66AABB",
	url: "https://github.com/trending?l=BrighterScript"
};
const Brightscript = {
	color: "#662D91",
	url: "https://github.com/trending?l=Brightscript"
};
const Browserslist = {
	color: "#ffd539",
	url: "https://github.com/trending?l=Browserslist"
};
const C = {
	color: "#555555",
	url: "https://github.com/trending?l=C"
};
const Cadence = {
	color: "#00ef8b",
	url: "https://github.com/trending?l=Cadence"
};
const Cairo = {
	color: "#ff4a48",
	url: "https://github.com/trending?l=Cairo"
};
const CameLIGO = {
	color: "#3be133",
	url: "https://github.com/trending?l=CameLIGO"
};
const CartoCSS = {
	color: null,
	url: "https://github.com/trending?l=CartoCSS"
};
const Ceylon = {
	color: "#dfa535",
	url: "https://github.com/trending?l=Ceylon"
};
const Chapel = {
	color: "#8dc63f",
	url: "https://github.com/trending?l=Chapel"
};
const Charity = {
	color: null,
	url: "https://github.com/trending?l=Charity"
};
const ChucK = {
	color: "#3f8000",
	url: "https://github.com/trending?l=ChucK"
};
const Circom = {
	color: "#707575",
	url: "https://github.com/trending?l=Circom"
};
const Cirru = {
	color: "#ccccff",
	url: "https://github.com/trending?l=Cirru"
};
const Clarion = {
	color: "#db901e",
	url: "https://github.com/trending?l=Clarion"
};
const Clarity = {
	color: "#5546ff",
	url: "https://github.com/trending?l=Clarity"
};
const Clean = {
	color: "#3F85AF",
	url: "https://github.com/trending?l=Clean"
};
const Click = {
	color: "#E4E6F3",
	url: "https://github.com/trending?l=Click"
};
const CLIPS = {
	color: "#00A300",
	url: "https://github.com/trending?l=CLIPS"
};
const Clojure = {
	color: "#db5855",
	url: "https://github.com/trending?l=Clojure"
};
const CMake = {
	color: "#DA3434",
	url: "https://github.com/trending?l=CMake"
};
const COBOL = {
	color: null,
	url: "https://github.com/trending?l=COBOL"
};
const CodeQL = {
	color: "#140f46",
	url: "https://github.com/trending?l=CodeQL"
};
const CoffeeScript = {
	color: "#244776",
	url: "https://github.com/trending?l=CoffeeScript"
};
const ColdFusion = {
	color: "#ed2cd6",
	url: "https://github.com/trending?l=ColdFusion"
};
const COLLADA = {
	color: "#F1A42B",
	url: "https://github.com/trending?l=COLLADA"
};
const Cool = {
	color: null,
	url: "https://github.com/trending?l=Cool"
};
const Coq = {
	color: "#d0b68c",
	url: "https://github.com/trending?l=Coq"
};
const Crystal = {
	color: "#000100",
	url: "https://github.com/trending?l=Crystal"
};
const CSON = {
	color: "#244776",
	url: "https://github.com/trending?l=CSON"
};
const Csound = {
	color: "#1a1a1a",
	url: "https://github.com/trending?l=Csound"
};
const CSS = {
	color: "#563d7c",
	url: "https://github.com/trending?l=CSS"
};
const CSV = {
	color: "#237346",
	url: "https://github.com/trending?l=CSV"
};
const Cuda = {
	color: "#3A4E3A",
	url: "https://github.com/trending?l=Cuda"
};
const CUE = {
	color: "#5886E1",
	url: "https://github.com/trending?l=CUE"
};
const Curry = {
	color: "#531242",
	url: "https://github.com/trending?l=Curry"
};
const CWeb = {
	color: "#00007a",
	url: "https://github.com/trending?l=CWeb"
};
const Cycript = {
	color: null,
	url: "https://github.com/trending?l=Cycript"
};
const Cypher = {
	color: "#34c0eb",
	url: "https://github.com/trending?l=Cypher"
};
const Cython = {
	color: "#fedf5b",
	url: "https://github.com/trending?l=Cython"
};
const D = {
	color: "#ba595e",
	url: "https://github.com/trending?l=D"
};
const D2 = {
	color: "#526ee8",
	url: "https://github.com/trending?l=D2"
};
const Dafny = {
	color: "#FFEC25",
	url: "https://github.com/trending?l=Dafny"
};
const Dart = {
	color: "#00B4AB",
	url: "https://github.com/trending?l=Dart"
};
const DataWeave = {
	color: "#003a52",
	url: "https://github.com/trending?l=DataWeave"
};
const DenizenScript = {
	color: "#FBEE96",
	url: "https://github.com/trending?l=DenizenScript"
};
const Dhall = {
	color: "#dfafff",
	url: "https://github.com/trending?l=Dhall"
};
const DM = {
	color: "#447265",
	url: "https://github.com/trending?l=DM"
};
const Dockerfile = {
	color: "#384d54",
	url: "https://github.com/trending?l=Dockerfile"
};
const Dogescript = {
	color: "#cca760",
	url: "https://github.com/trending?l=Dogescript"
};
const Dotenv = {
	color: "#e5d559",
	url: "https://github.com/trending?l=Dotenv"
};
const DTrace = {
	color: null,
	url: "https://github.com/trending?l=DTrace"
};
const Dylan = {
	color: "#6c616e",
	url: "https://github.com/trending?l=Dylan"
};
const E = {
	color: "#ccce35",
	url: "https://github.com/trending?l=E"
};
const Earthly = {
	color: "#2af0ff",
	url: "https://github.com/trending?l=Earthly"
};
const Easybuild = {
	color: "#069406",
	url: "https://github.com/trending?l=Easybuild"
};
const eC = {
	color: "#913960",
	url: "https://github.com/trending?l=eC"
};
const ECL = {
	color: "#8a1267",
	url: "https://github.com/trending?l=ECL"
};
const ECLiPSe = {
	color: "#001d9d",
	url: "https://github.com/trending?l=ECLiPSe"
};
const Ecmarkup = {
	color: "#eb8131",
	url: "https://github.com/trending?l=Ecmarkup"
};
const EditorConfig = {
	color: "#fff1f2",
	url: "https://github.com/trending?l=EditorConfig"
};
const Eiffel = {
	color: "#4d6977",
	url: "https://github.com/trending?l=Eiffel"
};
const EJS = {
	color: "#a91e50",
	url: "https://github.com/trending?l=EJS"
};
const Elixir = {
	color: "#6e4a7e",
	url: "https://github.com/trending?l=Elixir"
};
const Elm = {
	color: "#60B5CC",
	url: "https://github.com/trending?l=Elm"
};
const Elvish = {
	color: "#55BB55",
	url: "https://github.com/trending?l=Elvish"
};
const EmberScript = {
	color: "#FFF4F3",
	url: "https://github.com/trending?l=EmberScript"
};
const EQ = {
	color: "#a78649",
	url: "https://github.com/trending?l=EQ"
};
const Erlang = {
	color: "#B83998",
	url: "https://github.com/trending?l=Erlang"
};
const Euphoria = {
	color: "#FF790B",
	url: "https://github.com/trending?l=Euphoria"
};
const Factor = {
	color: "#636746",
	url: "https://github.com/trending?l=Factor"
};
const Fancy = {
	color: "#7b9db4",
	url: "https://github.com/trending?l=Fancy"
};
const Fantom = {
	color: "#14253c",
	url: "https://github.com/trending?l=Fantom"
};
const Faust = {
	color: "#c37240",
	url: "https://github.com/trending?l=Faust"
};
const Fennel = {
	color: "#fff3d7",
	url: "https://github.com/trending?l=Fennel"
};
const Filterscript = {
	color: null,
	url: "https://github.com/trending?l=Filterscript"
};
const fish = {
	color: "#4aae47",
	url: "https://github.com/trending?l=fish"
};
const Fluent = {
	color: "#ffcc33",
	url: "https://github.com/trending?l=Fluent"
};
const FLUX = {
	color: "#88ccff",
	url: "https://github.com/trending?l=FLUX"
};
const Forth = {
	color: "#341708",
	url: "https://github.com/trending?l=Forth"
};
const Fortran = {
	color: "#4d41b1",
	url: "https://github.com/trending?l=Fortran"
};
const FreeBasic = {
	color: "#141AC9",
	url: "https://github.com/trending?l=FreeBasic"
};
const FreeMarker = {
	color: "#0050b2",
	url: "https://github.com/trending?l=FreeMarker"
};
const Frege = {
	color: "#00cafe",
	url: "https://github.com/trending?l=Frege"
};
const Futhark = {
	color: "#5f021f",
	url: "https://github.com/trending?l=Futhark"
};
const GAML = {
	color: "#FFC766",
	url: "https://github.com/trending?l=GAML"
};
const GAMS = {
	color: "#f49a22",
	url: "https://github.com/trending?l=GAMS"
};
const GAP = {
	color: "#0000cc",
	url: "https://github.com/trending?l=GAP"
};
const GDB = {
	color: null,
	url: "https://github.com/trending?l=GDB"
};
const GDScript = {
	color: "#355570",
	url: "https://github.com/trending?l=GDScript"
};
const GEDCOM = {
	color: "#003058",
	url: "https://github.com/trending?l=GEDCOM"
};
const Gemini = {
	color: "#ff6900",
	url: "https://github.com/trending?l=Gemini"
};
const Genero = {
	color: "#63408e",
	url: "https://github.com/trending?l=Genero"
};
const Genie = {
	color: "#fb855d",
	url: "https://github.com/trending?l=Genie"
};
const Genshi = {
	color: "#951531",
	url: "https://github.com/trending?l=Genshi"
};
const Gherkin = {
	color: "#5B2063",
	url: "https://github.com/trending?l=Gherkin"
};
const Gleam = {
	color: "#ffaff3",
	url: "https://github.com/trending?l=Gleam"
};
const GLSL = {
	color: "#5686a5",
	url: "https://github.com/trending?l=GLSL"
};
const Glyph = {
	color: "#c1ac7f",
	url: "https://github.com/trending?l=Glyph"
};
const Gnuplot = {
	color: "#f0a9f0",
	url: "https://github.com/trending?l=Gnuplot"
};
const Go = {
	color: "#00ADD8",
	url: "https://github.com/trending?l=Go"
};
const Golo = {
	color: "#88562A",
	url: "https://github.com/trending?l=Golo"
};
const Gosu = {
	color: "#82937f",
	url: "https://github.com/trending?l=Gosu"
};
const Grace = {
	color: "#615f8b",
	url: "https://github.com/trending?l=Grace"
};
const Gradle = {
	color: "#02303a",
	url: "https://github.com/trending?l=Gradle"
};
const GraphQL = {
	color: "#e10098",
	url: "https://github.com/trending?l=GraphQL"
};
const Groovy = {
	color: "#4298b8",
	url: "https://github.com/trending?l=Groovy"
};
const GSC = {
	color: "#FF6800",
	url: "https://github.com/trending?l=GSC"
};
const Hack = {
	color: "#878787",
	url: "https://github.com/trending?l=Hack"
};
const Haml = {
	color: "#ece2a9",
	url: "https://github.com/trending?l=Haml"
};
const Handlebars = {
	color: "#f7931e",
	url: "https://github.com/trending?l=Handlebars"
};
const HAProxy = {
	color: "#106da9",
	url: "https://github.com/trending?l=HAProxy"
};
const Harbour = {
	color: "#0e60e3",
	url: "https://github.com/trending?l=Harbour"
};
const Haskell = {
	color: "#5e5086",
	url: "https://github.com/trending?l=Haskell"
};
const Haxe = {
	color: "#df7900",
	url: "https://github.com/trending?l=Haxe"
};
const HCL = {
	color: "#844FBA",
	url: "https://github.com/trending?l=HCL"
};
const HiveQL = {
	color: "#dce200",
	url: "https://github.com/trending?l=HiveQL"
};
const HLSL = {
	color: "#aace60",
	url: "https://github.com/trending?l=HLSL"
};
const HOCON = {
	color: "#9ff8ee",
	url: "https://github.com/trending?l=HOCON"
};
const HolyC = {
	color: "#ffefaf",
	url: "https://github.com/trending?l=HolyC"
};
const hoon = {
	color: "#00b171",
	url: "https://github.com/trending?l=hoon"
};
const HTML = {
	color: "#e34c26",
	url: "https://github.com/trending?l=HTML"
};
const HTTP = {
	color: "#005C9C",
	url: "https://github.com/trending?l=HTTP"
};
const HXML = {
	color: "#f68712",
	url: "https://github.com/trending?l=HXML"
};
const Hy = {
	color: "#7790B2",
	url: "https://github.com/trending?l=Hy"
};
const HyPhy = {
	color: null,
	url: "https://github.com/trending?l=HyPhy"
};
const IDL = {
	color: "#a3522f",
	url: "https://github.com/trending?l=IDL"
};
const Idris = {
	color: "#b30000",
	url: "https://github.com/trending?l=Idris"
};
const Imba = {
	color: "#16cec6",
	url: "https://github.com/trending?l=Imba"
};
const INI = {
	color: "#d1dbe0",
	url: "https://github.com/trending?l=INI"
};
const Ink = {
	color: null,
	url: "https://github.com/trending?l=Ink"
};
const Io = {
	color: "#a9188d",
	url: "https://github.com/trending?l=Io"
};
const Ioke = {
	color: "#078193",
	url: "https://github.com/trending?l=Ioke"
};
const Isabelle = {
	color: "#FEFE00",
	url: "https://github.com/trending?l=Isabelle"
};
const J = {
	color: "#9EEDFF",
	url: "https://github.com/trending?l=J"
};
const Janet = {
	color: "#0886a5",
	url: "https://github.com/trending?l=Janet"
};
const Jasmin = {
	color: "#d03600",
	url: "https://github.com/trending?l=Jasmin"
};
const Java = {
	color: "#b07219",
	url: "https://github.com/trending?l=Java"
};
const JavaScript = {
	color: "#f1e05a",
	url: "https://github.com/trending?l=JavaScript"
};
const JCL = {
	color: "#d90e09",
	url: "https://github.com/trending?l=JCL"
};
const JFlex = {
	color: "#DBCA00",
	url: "https://github.com/trending?l=JFlex"
};
const Jinja = {
	color: "#a52a22",
	url: "https://github.com/trending?l=Jinja"
};
const Jison = {
	color: "#56b3cb",
	url: "https://github.com/trending?l=Jison"
};
const Jolie = {
	color: "#843179",
	url: "https://github.com/trending?l=Jolie"
};
const jq = {
	color: "#c7254e",
	url: "https://github.com/trending?l=jq"
};
const JSON5 = {
	color: "#267CB9",
	url: "https://github.com/trending?l=JSON5"
};
const JSONiq = {
	color: "#40d47e",
	url: "https://github.com/trending?l=JSONiq"
};
const JSONLD = {
	color: "#0c479c",
	url: "https://github.com/trending?l=JSONLD"
};
const Jsonnet = {
	color: "#0064bd",
	url: "https://github.com/trending?l=Jsonnet"
};
const Julia = {
	color: "#a270ba",
	url: "https://github.com/trending?l=Julia"
};
const Just = {
	color: "#384d54",
	url: "https://github.com/trending?l=Just"
};
const KakouneScript = {
	color: "#6f8042",
	url: "https://github.com/trending?l=KakouneScript"
};
const KerboScript = {
	color: "#41adf0",
	url: "https://github.com/trending?l=KerboScript"
};
const Kotlin = {
	color: "#A97BFF",
	url: "https://github.com/trending?l=Kotlin"
};
const KRL = {
	color: "#28430A",
	url: "https://github.com/trending?l=KRL"
};
const kvlang = {
	color: "#1da6e0",
	url: "https://github.com/trending?l=kvlang"
};
const LabVIEW = {
	color: "#fede06",
	url: "https://github.com/trending?l=LabVIEW"
};
const Lark = {
	color: "#2980B9",
	url: "https://github.com/trending?l=Lark"
};
const Lasso = {
	color: "#999999",
	url: "https://github.com/trending?l=Lasso"
};
const Latte = {
	color: "#f2a542",
	url: "https://github.com/trending?l=Latte"
};
const Lean = {
	color: null,
	url: "https://github.com/trending?l=Lean"
};
const Less = {
	color: "#1d365d",
	url: "https://github.com/trending?l=Less"
};
const Lex = {
	color: "#DBCA00",
	url: "https://github.com/trending?l=Lex"
};
const LFE = {
	color: "#4C3023",
	url: "https://github.com/trending?l=LFE"
};
const LigoLANG = {
	color: "#0e74ff",
	url: "https://github.com/trending?l=LigoLANG"
};
const LilyPond = {
	color: "#9ccc7c",
	url: "https://github.com/trending?l=LilyPond"
};
const Limbo = {
	color: null,
	url: "https://github.com/trending?l=Limbo"
};
const Liquid = {
	color: "#67b8de",
	url: "https://github.com/trending?l=Liquid"
};
const LiveScript = {
	color: "#499886",
	url: "https://github.com/trending?l=LiveScript"
};
const LLVM = {
	color: "#185619",
	url: "https://github.com/trending?l=LLVM"
};
const Logos = {
	color: null,
	url: "https://github.com/trending?l=Logos"
};
const Logtalk = {
	color: "#295b9a",
	url: "https://github.com/trending?l=Logtalk"
};
const LOLCODE = {
	color: "#cc9900",
	url: "https://github.com/trending?l=LOLCODE"
};
const LookML = {
	color: "#652B81",
	url: "https://github.com/trending?l=LookML"
};
const LoomScript = {
	color: null,
	url: "https://github.com/trending?l=LoomScript"
};
const LSL = {
	color: "#3d9970",
	url: "https://github.com/trending?l=LSL"
};
const Lua = {
	color: "#000080",
	url: "https://github.com/trending?l=Lua"
};
const M = {
	color: null,
	url: "https://github.com/trending?l=M"
};
const M4 = {
	color: null,
	url: "https://github.com/trending?l=M4"
};
const M4Sugar = {
	color: null,
	url: "https://github.com/trending?l=M4Sugar"
};
const Macaulay2 = {
	color: "#d8ffff",
	url: "https://github.com/trending?l=Macaulay2"
};
const Makefile = {
	color: "#427819",
	url: "https://github.com/trending?l=Makefile"
};
const Mako = {
	color: "#7e858d",
	url: "https://github.com/trending?l=Mako"
};
const Markdown = {
	color: "#083fa1",
	url: "https://github.com/trending?l=Markdown"
};
const Marko = {
	color: "#42bff2",
	url: "https://github.com/trending?l=Marko"
};
const Mask = {
	color: "#f97732",
	url: "https://github.com/trending?l=Mask"
};
const Mathematica = {
	color: "#dd1100",
	url: "https://github.com/trending?l=Mathematica"
};
const MATLAB = {
	color: "#e16737",
	url: "https://github.com/trending?l=MATLAB"
};
const Max = {
	color: "#c4a79c",
	url: "https://github.com/trending?l=Max"
};
const MAXScript = {
	color: "#00a6a6",
	url: "https://github.com/trending?l=MAXScript"
};
const mcfunction = {
	color: "#E22837",
	url: "https://github.com/trending?l=mcfunction"
};
const MDX = {
	color: "#fcb32c",
	url: "https://github.com/trending?l=MDX"
};
const Mercury = {
	color: "#ff2b2b",
	url: "https://github.com/trending?l=Mercury"
};
const Mermaid = {
	color: "#ff3670",
	url: "https://github.com/trending?l=Mermaid"
};
const Meson = {
	color: "#007800",
	url: "https://github.com/trending?l=Meson"
};
const Metal = {
	color: "#8f14e9",
	url: "https://github.com/trending?l=Metal"
};
const MiniD = {
	color: null,
	url: "https://github.com/trending?l=MiniD"
};
const MiniYAML = {
	color: "#ff1111",
	url: "https://github.com/trending?l=MiniYAML"
};
const Mint = {
	color: "#02b046",
	url: "https://github.com/trending?l=Mint"
};
const Mirah = {
	color: "#c7a938",
	url: "https://github.com/trending?l=Mirah"
};
const MLIR = {
	color: "#5EC8DB",
	url: "https://github.com/trending?l=MLIR"
};
const Modelica = {
	color: "#de1d31",
	url: "https://github.com/trending?l=Modelica"
};
const Monkey = {
	color: null,
	url: "https://github.com/trending?l=Monkey"
};
const Moocode = {
	color: null,
	url: "https://github.com/trending?l=Moocode"
};
const MoonScript = {
	color: "#ff4585",
	url: "https://github.com/trending?l=MoonScript"
};
const Motoko = {
	color: "#fbb03b",
	url: "https://github.com/trending?l=Motoko"
};
const Move = {
	color: "#4a137a",
	url: "https://github.com/trending?l=Move"
};
const MQL4 = {
	color: "#62A8D6",
	url: "https://github.com/trending?l=MQL4"
};
const MQL5 = {
	color: "#4A76B8",
	url: "https://github.com/trending?l=MQL5"
};
const MTML = {
	color: "#b7e1f4",
	url: "https://github.com/trending?l=MTML"
};
const MUF = {
	color: null,
	url: "https://github.com/trending?l=MUF"
};
const mupad = {
	color: "#244963",
	url: "https://github.com/trending?l=mupad"
};
const Mustache = {
	color: "#724b3b",
	url: "https://github.com/trending?l=Mustache"
};
const Myghty = {
	color: null,
	url: "https://github.com/trending?l=Myghty"
};
const nanorc = {
	color: "#2d004d",
	url: "https://github.com/trending?l=nanorc"
};
const Nasal = {
	color: "#1d2c4e",
	url: "https://github.com/trending?l=Nasal"
};
const NASL = {
	color: null,
	url: "https://github.com/trending?l=NASL"
};
const NCL = {
	color: "#28431f",
	url: "https://github.com/trending?l=NCL"
};
const Nearley = {
	color: "#990000",
	url: "https://github.com/trending?l=Nearley"
};
const Nemerle = {
	color: "#3d3c6e",
	url: "https://github.com/trending?l=Nemerle"
};
const nesC = {
	color: "#94B0C7",
	url: "https://github.com/trending?l=nesC"
};
const NetLinx = {
	color: "#0aa0ff",
	url: "https://github.com/trending?l=NetLinx"
};
const NetLogo = {
	color: "#ff6375",
	url: "https://github.com/trending?l=NetLogo"
};
const NewLisp = {
	color: "#87AED7",
	url: "https://github.com/trending?l=NewLisp"
};
const Nextflow = {
	color: "#3ac486",
	url: "https://github.com/trending?l=Nextflow"
};
const Nginx = {
	color: "#009639",
	url: "https://github.com/trending?l=Nginx"
};
const Nim = {
	color: "#ffc200",
	url: "https://github.com/trending?l=Nim"
};
const Nit = {
	color: "#009917",
	url: "https://github.com/trending?l=Nit"
};
const Nix = {
	color: "#7e7eff",
	url: "https://github.com/trending?l=Nix"
};
const NSIS = {
	color: null,
	url: "https://github.com/trending?l=NSIS"
};
const Nu = {
	color: "#c9df40",
	url: "https://github.com/trending?l=Nu"
};
const NumPy = {
	color: "#9C8AF9",
	url: "https://github.com/trending?l=NumPy"
};
const Nunjucks = {
	color: "#3d8137",
	url: "https://github.com/trending?l=Nunjucks"
};
const Nushell = {
	color: "#4E9906",
	url: "https://github.com/trending?l=Nushell"
};
const NWScript = {
	color: "#111522",
	url: "https://github.com/trending?l=NWScript"
};
const ObjectScript = {
	color: "#424893",
	url: "https://github.com/trending?l=ObjectScript"
};
const OCaml = {
	color: "#ef7a08",
	url: "https://github.com/trending?l=OCaml"
};
const Odin = {
	color: "#60AFFE",
	url: "https://github.com/trending?l=Odin"
};
const Omgrofl = {
	color: "#cabbff",
	url: "https://github.com/trending?l=Omgrofl"
};
const ooc = {
	color: "#b0b77e",
	url: "https://github.com/trending?l=ooc"
};
const Opa = {
	color: null,
	url: "https://github.com/trending?l=Opa"
};
const Opal = {
	color: "#f7ede0",
	url: "https://github.com/trending?l=Opal"
};
const OpenCL = {
	color: "#ed2e2d",
	url: "https://github.com/trending?l=OpenCL"
};
const OpenQASM = {
	color: "#AA70FF",
	url: "https://github.com/trending?l=OpenQASM"
};
const OpenSCAD = {
	color: "#e5cd45",
	url: "https://github.com/trending?l=OpenSCAD"
};
const Org = {
	color: "#77aa99",
	url: "https://github.com/trending?l=Org"
};
const Ox = {
	color: null,
	url: "https://github.com/trending?l=Ox"
};
const Oxygene = {
	color: "#cdd0e3",
	url: "https://github.com/trending?l=Oxygene"
};
const Oz = {
	color: "#fab738",
	url: "https://github.com/trending?l=Oz"
};
const P4 = {
	color: "#7055b5",
	url: "https://github.com/trending?l=P4"
};
const Pact = {
	color: "#F7A8B8",
	url: "https://github.com/trending?l=Pact"
};
const Pan = {
	color: "#cc0000",
	url: "https://github.com/trending?l=Pan"
};
const Papyrus = {
	color: "#6600cc",
	url: "https://github.com/trending?l=Papyrus"
};
const Parrot = {
	color: "#f3ca0a",
	url: "https://github.com/trending?l=Parrot"
};
const Pascal = {
	color: "#E3F171",
	url: "https://github.com/trending?l=Pascal"
};
const Pawn = {
	color: "#dbb284",
	url: "https://github.com/trending?l=Pawn"
};
const PDDL = {
	color: "#0d00ff",
	url: "https://github.com/trending?l=PDDL"
};
const Pep8 = {
	color: "#C76F5B",
	url: "https://github.com/trending?l=Pep8"
};
const Perl = {
	color: "#0298c3",
	url: "https://github.com/trending?l=Perl"
};
const PHP = {
	color: "#4F5D95",
	url: "https://github.com/trending?l=PHP"
};
const PicoLisp = {
	color: "#6067af",
	url: "https://github.com/trending?l=PicoLisp"
};
const PigLatin = {
	color: "#fcd7de",
	url: "https://github.com/trending?l=PigLatin"
};
const Pike = {
	color: "#005390",
	url: "https://github.com/trending?l=Pike"
};
const PlantUML = {
	color: "#fbbd16",
	url: "https://github.com/trending?l=PlantUML"
};
const PLpgSQL = {
	color: "#336790",
	url: "https://github.com/trending?l=PLpgSQL"
};
const PLSQL = {
	color: "#dad8d8",
	url: "https://github.com/trending?l=PLSQL"
};
const PogoScript = {
	color: "#d80074",
	url: "https://github.com/trending?l=PogoScript"
};
const Polar = {
	color: "#ae81ff",
	url: "https://github.com/trending?l=Polar"
};
const Pony = {
	color: null,
	url: "https://github.com/trending?l=Pony"
};
const Portugol = {
	color: "#f8bd00",
	url: "https://github.com/trending?l=Portugol"
};
const PostCSS = {
	color: "#dc3a0c",
	url: "https://github.com/trending?l=PostCSS"
};
const PostScript = {
	color: "#da291c",
	url: "https://github.com/trending?l=PostScript"
};
const PowerBuilder = {
	color: "#8f0f8d",
	url: "https://github.com/trending?l=PowerBuilder"
};
const PowerShell = {
	color: "#012456",
	url: "https://github.com/trending?l=PowerShell"
};
const Prisma = {
	color: "#0c344b",
	url: "https://github.com/trending?l=Prisma"
};
const Processing = {
	color: "#0096D8",
	url: "https://github.com/trending?l=Processing"
};
const Procfile = {
	color: "#3B2F63",
	url: "https://github.com/trending?l=Procfile"
};
const Prolog = {
	color: "#74283c",
	url: "https://github.com/trending?l=Prolog"
};
const Promela = {
	color: "#de0000",
	url: "https://github.com/trending?l=Promela"
};
const Pug = {
	color: "#a86454",
	url: "https://github.com/trending?l=Pug"
};
const Puppet = {
	color: "#302B6D",
	url: "https://github.com/trending?l=Puppet"
};
const PureBasic = {
	color: "#5a6986",
	url: "https://github.com/trending?l=PureBasic"
};
const PureScript = {
	color: "#1D222D",
	url: "https://github.com/trending?l=PureScript"
};
const Pyret = {
	color: "#ee1e10",
	url: "https://github.com/trending?l=Pyret"
};
const Python = {
	color: "#3572A5",
	url: "https://github.com/trending?l=Python"
};
const q = {
	color: "#0040cd",
	url: "https://github.com/trending?l=q"
};
const QMake = {
	color: null,
	url: "https://github.com/trending?l=QMake"
};
const QML = {
	color: "#44a51c",
	url: "https://github.com/trending?l=QML"
};
const Quake = {
	color: "#882233",
	url: "https://github.com/trending?l=Quake"
};
const R = {
	color: "#198CE7",
	url: "https://github.com/trending?l=R"
};
const Racket = {
	color: "#3c5caa",
	url: "https://github.com/trending?l=Racket"
};
const Ragel = {
	color: "#9d5200",
	url: "https://github.com/trending?l=Ragel"
};
const Raku = {
	color: "#0000fb",
	url: "https://github.com/trending?l=Raku"
};
const RAML = {
	color: "#77d9fb",
	url: "https://github.com/trending?l=RAML"
};
const Rascal = {
	color: "#fffaa0",
	url: "https://github.com/trending?l=Rascal"
};
const RBS = {
	color: "#701516",
	url: "https://github.com/trending?l=RBS"
};
const RDoc = {
	color: "#701516",
	url: "https://github.com/trending?l=RDoc"
};
const REALbasic = {
	color: null,
	url: "https://github.com/trending?l=REALbasic"
};
const Reason = {
	color: "#ff5847",
	url: "https://github.com/trending?l=Reason"
};
const ReasonLIGO = {
	color: "#ff5847",
	url: "https://github.com/trending?l=ReasonLIGO"
};
const Rebol = {
	color: "#358a5b",
	url: "https://github.com/trending?l=Rebol"
};
const Red = {
	color: "#f50000",
	url: "https://github.com/trending?l=Red"
};
const Redcode = {
	color: null,
	url: "https://github.com/trending?l=Redcode"
};
const RenderScript = {
	color: null,
	url: "https://github.com/trending?l=RenderScript"
};
const ReScript = {
	color: "#ed5051",
	url: "https://github.com/trending?l=ReScript"
};
const reStructuredText = {
	color: "#141414",
	url: "https://github.com/trending?l=reStructuredText"
};
const REXX = {
	color: "#d90e09",
	url: "https://github.com/trending?l=REXX"
};
const Ring = {
	color: "#2D54CB",
	url: "https://github.com/trending?l=Ring"
};
const Riot = {
	color: "#A71E49",
	url: "https://github.com/trending?l=Riot"
};
const RMarkdown = {
	color: "#198ce7",
	url: "https://github.com/trending?l=RMarkdown"
};
const RobotFramework = {
	color: "#00c0b5",
	url: "https://github.com/trending?l=RobotFramework"
};
const Roff = {
	color: "#ecdebe",
	url: "https://github.com/trending?l=Roff"
};
const Rouge = {
	color: "#cc0088",
	url: "https://github.com/trending?l=Rouge"
};
const RPC = {
	color: null,
	url: "https://github.com/trending?l=RPC"
};
const RPGLE = {
	color: "#2BDE21",
	url: "https://github.com/trending?l=RPGLE"
};
const Ruby = {
	color: "#701516",
	url: "https://github.com/trending?l=Ruby"
};
const RUNOFF = {
	color: "#665a4e",
	url: "https://github.com/trending?l=RUNOFF"
};
const Rust = {
	color: "#dea584",
	url: "https://github.com/trending?l=Rust"
};
const Sage = {
	color: null,
	url: "https://github.com/trending?l=Sage"
};
const SaltStack = {
	color: "#646464",
	url: "https://github.com/trending?l=SaltStack"
};
const SAS = {
	color: "#B34936",
	url: "https://github.com/trending?l=SAS"
};
const Sass = {
	color: "#a53b70",
	url: "https://github.com/trending?l=Sass"
};
const Scala = {
	color: "#c22d40",
	url: "https://github.com/trending?l=Scala"
};
const Scaml = {
	color: "#bd181a",
	url: "https://github.com/trending?l=Scaml"
};
const Scenic = {
	color: "#fdc700",
	url: "https://github.com/trending?l=Scenic"
};
const Scheme = {
	color: "#1e4aec",
	url: "https://github.com/trending?l=Scheme"
};
const Scilab = {
	color: "#ca0f21",
	url: "https://github.com/trending?l=Scilab"
};
const SCSS = {
	color: "#c6538c",
	url: "https://github.com/trending?l=SCSS"
};
const sed = {
	color: "#64b970",
	url: "https://github.com/trending?l=sed"
};
const Self = {
	color: "#0579aa",
	url: "https://github.com/trending?l=Self"
};
const ShaderLab = {
	color: "#222c37",
	url: "https://github.com/trending?l=ShaderLab"
};
const Shell = {
	color: "#89e051",
	url: "https://github.com/trending?l=Shell"
};
const ShellSession = {
	color: null,
	url: "https://github.com/trending?l=ShellSession"
};
const Shen = {
	color: "#120F14",
	url: "https://github.com/trending?l=Shen"
};
const Sieve = {
	color: null,
	url: "https://github.com/trending?l=Sieve"
};
const Singularity = {
	color: "#64E6AD",
	url: "https://github.com/trending?l=Singularity"
};
const Slash = {
	color: "#007eff",
	url: "https://github.com/trending?l=Slash"
};
const Slice = {
	color: "#003fa2",
	url: "https://github.com/trending?l=Slice"
};
const Slim = {
	color: "#2b2b2b",
	url: "https://github.com/trending?l=Slim"
};
const Smali = {
	color: null,
	url: "https://github.com/trending?l=Smali"
};
const Smalltalk = {
	color: "#596706",
	url: "https://github.com/trending?l=Smalltalk"
};
const Smarty = {
	color: "#f0c040",
	url: "https://github.com/trending?l=Smarty"
};
const Smithy = {
	color: "#c44536",
	url: "https://github.com/trending?l=Smithy"
};
const SmPL = {
	color: "#c94949",
	url: "https://github.com/trending?l=SmPL"
};
const SMT = {
	color: null,
	url: "https://github.com/trending?l=SMT"
};
const Snakemake = {
	color: "#419179",
	url: "https://github.com/trending?l=Snakemake"
};
const Solidity = {
	color: "#AA6746",
	url: "https://github.com/trending?l=Solidity"
};
const SourcePawn = {
	color: "#f69e1d",
	url: "https://github.com/trending?l=SourcePawn"
};
const SPARQL = {
	color: "#0C4597",
	url: "https://github.com/trending?l=SPARQL"
};
const SQF = {
	color: "#3F3F3F",
	url: "https://github.com/trending?l=SQF"
};
const SQL = {
	color: "#e38c00",
	url: "https://github.com/trending?l=SQL"
};
const SQLPL = {
	color: "#e38c00",
	url: "https://github.com/trending?l=SQLPL"
};
const Squirrel = {
	color: "#800000",
	url: "https://github.com/trending?l=Squirrel"
};
const Stan = {
	color: "#b2011d",
	url: "https://github.com/trending?l=Stan"
};
const Starlark = {
	color: "#76d275",
	url: "https://github.com/trending?l=Starlark"
};
const Stata = {
	color: "#1a5f91",
	url: "https://github.com/trending?l=Stata"
};
const STL = {
	color: "#373b5e",
	url: "https://github.com/trending?l=STL"
};
const StringTemplate = {
	color: "#3fb34f",
	url: "https://github.com/trending?l=StringTemplate"
};
const Stylus = {
	color: "#ff6347",
	url: "https://github.com/trending?l=Stylus"
};
const SugarSS = {
	color: "#2fcc9f",
	url: "https://github.com/trending?l=SugarSS"
};
const SuperCollider = {
	color: "#46390b",
	url: "https://github.com/trending?l=SuperCollider"
};
const Svelte = {
	color: "#ff3e00",
	url: "https://github.com/trending?l=Svelte"
};
const SVG = {
	color: "#ff9900",
	url: "https://github.com/trending?l=SVG"
};
const Sway = {
	color: "#dea584",
	url: "https://github.com/trending?l=Sway"
};
const Swift = {
	color: "#F05138",
	url: "https://github.com/trending?l=Swift"
};
const SWIG = {
	color: null,
	url: "https://github.com/trending?l=SWIG"
};
const SystemVerilog = {
	color: "#DAE1C2",
	url: "https://github.com/trending?l=SystemVerilog"
};
const Talon = {
	color: "#333333",
	url: "https://github.com/trending?l=Talon"
};
const Tcl = {
	color: "#e4cc98",
	url: "https://github.com/trending?l=Tcl"
};
const Tcsh = {
	color: null,
	url: "https://github.com/trending?l=Tcsh"
};
const Terra = {
	color: "#00004c",
	url: "https://github.com/trending?l=Terra"
};
const TeX = {
	color: "#3D6117",
	url: "https://github.com/trending?l=TeX"
};
const Textile = {
	color: "#ffe7ac",
	url: "https://github.com/trending?l=Textile"
};
const Thrift = {
	color: "#D12127",
	url: "https://github.com/trending?l=Thrift"
};
const TLA = {
	color: "#4b0079",
	url: "https://github.com/trending?l=TLA"
};
const TOML = {
	color: "#9c4221",
	url: "https://github.com/trending?l=TOML"
};
const TSQL = {
	color: "#e38c00",
	url: "https://github.com/trending?l=TSQL"
};
const TSV = {
	color: "#237346",
	url: "https://github.com/trending?l=TSV"
};
const TSX = {
	color: "#3178c6",
	url: "https://github.com/trending?l=TSX"
};
const Turing = {
	color: "#cf142b",
	url: "https://github.com/trending?l=Turing"
};
const Twig = {
	color: "#c1d026",
	url: "https://github.com/trending?l=Twig"
};
const TXL = {
	color: "#0178b8",
	url: "https://github.com/trending?l=TXL"
};
const TypeScript = {
	color: "#3178c6",
	url: "https://github.com/trending?l=TypeScript"
};
const Uno = {
	color: "#9933cc",
	url: "https://github.com/trending?l=Uno"
};
const UnrealScript = {
	color: "#a54c4d",
	url: "https://github.com/trending?l=UnrealScript"
};
const UrWeb = {
	color: "#ccccee",
	url: "https://github.com/trending?l=UrWeb"
};
const V = {
	color: "#4f87c4",
	url: "https://github.com/trending?l=V"
};
const Vala = {
	color: "#a56de2",
	url: "https://github.com/trending?l=Vala"
};
const VBA = {
	color: "#867db1",
	url: "https://github.com/trending?l=VBA"
};
const VBScript = {
	color: "#15dcdc",
	url: "https://github.com/trending?l=VBScript"
};
const VCL = {
	color: "#148AA8",
	url: "https://github.com/trending?l=VCL"
};
const Verilog = {
	color: "#b2b7f8",
	url: "https://github.com/trending?l=Verilog"
};
const VHDL = {
	color: "#adb2cb",
	url: "https://github.com/trending?l=VHDL"
};
const Volt = {
	color: "#1F1F1F",
	url: "https://github.com/trending?l=Volt"
};
const Vue = {
	color: "#41b883",
	url: "https://github.com/trending?l=Vue"
};
const Vyper = {
	color: "#2980b9",
	url: "https://github.com/trending?l=Vyper"
};
const WDL = {
	color: "#42f1f4",
	url: "https://github.com/trending?l=WDL"
};
const WebAssembly = {
	color: "#04133b",
	url: "https://github.com/trending?l=WebAssembly"
};
const WebIDL = {
	color: null,
	url: "https://github.com/trending?l=WebIDL"
};
const WGSL = {
	color: "#1a5e9a",
	url: "https://github.com/trending?l=WGSL"
};
const Whiley = {
	color: "#d5c397",
	url: "https://github.com/trending?l=Whiley"
};
const Wikitext = {
	color: "#fc5757",
	url: "https://github.com/trending?l=Wikitext"
};
const wisp = {
	color: "#7582D1",
	url: "https://github.com/trending?l=wisp"
};
const Wollok = {
	color: "#a23738",
	url: "https://github.com/trending?l=Wollok"
};
const Wren = {
	color: "#383838",
	url: "https://github.com/trending?l=Wren"
};
const X10 = {
	color: "#4B6BEF",
	url: "https://github.com/trending?l=X10"
};
const xBase = {
	color: "#403a40",
	url: "https://github.com/trending?l=xBase"
};
const XC = {
	color: "#99DA07",
	url: "https://github.com/trending?l=XC"
};
const XML = {
	color: "#0060ac",
	url: "https://github.com/trending?l=XML"
};
const Xojo = {
	color: "#81bd41",
	url: "https://github.com/trending?l=Xojo"
};
const Xonsh = {
	color: "#285EEF",
	url: "https://github.com/trending?l=Xonsh"
};
const XProc = {
	color: null,
	url: "https://github.com/trending?l=XProc"
};
const XQuery = {
	color: "#5232e7",
	url: "https://github.com/trending?l=XQuery"
};
const XS = {
	color: null,
	url: "https://github.com/trending?l=XS"
};
const XSLT = {
	color: "#EB8CEB",
	url: "https://github.com/trending?l=XSLT"
};
const Xtend = {
	color: "#24255d",
	url: "https://github.com/trending?l=Xtend"
};
const Yacc = {
	color: "#4B6C4B",
	url: "https://github.com/trending?l=Yacc"
};
const YAML = {
	color: "#cb171e",
	url: "https://github.com/trending?l=YAML"
};
const YARA = {
	color: "#220000",
	url: "https://github.com/trending?l=YARA"
};
const YASnippet = {
	color: "#32AB90",
	url: "https://github.com/trending?l=YASnippet"
};
const Yul = {
	color: "#794932",
	url: "https://github.com/trending?l=Yul"
};
const ZAP = {
	color: "#0d665e",
	url: "https://github.com/trending?l=ZAP"
};
const Zeek = {
	color: null,
	url: "https://github.com/trending?l=Zeek"
};
const ZenScript = {
	color: "#00BCD1",
	url: "https://github.com/trending?l=ZenScript"
};
const Zephir = {
	color: "#118f9e",
	url: "https://github.com/trending?l=Zephir"
};
const Zig = {
	color: "#ec915c",
	url: "https://github.com/trending?l=Zig"
};
const ZIL = {
	color: "#dc75e5",
	url: "https://github.com/trending?l=ZIL"
};
const Zimpl = {
	color: "#d67711",
	url: "https://github.com/trending?l=Zimpl"
};
const colors = {
	"1C Enterprise": {
	color: "#814CCC",
	url: "https://github.com/trending?l=1C-Enterprise"
},
	"2-Dimensional Array": {
	color: "#38761D",
	url: "https://github.com/trending?l=2-Dimensional-Array"
},
	"4D": {
	color: "#004289",
	url: "https://github.com/trending?l=4D"
},
	ABAP: ABAP,
	"ABAP CDS": {
	color: "#555e25",
	url: "https://github.com/trending?l=ABAP-CDS"
},
	ActionScript: ActionScript,
	Ada: Ada,
	"Adblock Filter List": {
	color: "#800000",
	url: "https://github.com/trending?l=Adblock-Filter-List"
},
	"Adobe Font Metrics": {
	color: "#fa0f00",
	url: "https://github.com/trending?l=Adobe-Font-Metrics"
},
	Agda: Agda,
	"AGS Script": {
	color: "#B9D9FF",
	url: "https://github.com/trending?l=AGS-Script"
},
	AIDL: AIDL,
	AL: AL,
	Alloy: Alloy,
	"Alpine Abuild": {
	color: "#0D597F",
	url: "https://github.com/trending?l=Alpine-Abuild"
},
	"Altium Designer": {
	color: "#A89663",
	url: "https://github.com/trending?l=Altium-Designer"
},
	AMPL: AMPL,
	AngelScript: AngelScript,
	"Ant Build System": {
	color: "#A9157E",
	url: "https://github.com/trending?l=Ant-Build-System"
},
	Antlers: Antlers,
	ANTLR: ANTLR,
	ApacheConf: ApacheConf,
	Apex: Apex,
	"API Blueprint": {
	color: "#2ACCA8",
	url: "https://github.com/trending?l=API-Blueprint"
},
	APL: APL,
	"Apollo Guidance Computer": {
	color: "#0B3D91",
	url: "https://github.com/trending?l=Apollo-Guidance-Computer"
},
	AppleScript: AppleScript,
	Arc: Arc,
	AsciiDoc: AsciiDoc,
	ASL: ASL,
	"ASP.NET": {
	color: "#9400ff",
	url: "https://github.com/trending?l=ASP.NET"
},
	AspectJ: AspectJ,
	Assembly: Assembly,
	Astro: Astro,
	Asymptote: Asymptote,
	ATS: ATS,
	Augeas: Augeas,
	AutoHotkey: AutoHotkey,
	AutoIt: AutoIt,
	"Avro IDL": {
	color: "#0040FF",
	url: "https://github.com/trending?l=Avro-IDL"
},
	Awk: Awk,
	Ballerina: Ballerina,
	BASIC: BASIC,
	Batchfile: Batchfile,
	Beef: Beef,
	Befunge: Befunge,
	Berry: Berry,
	BibTeX: BibTeX,
	Bicep: Bicep,
	Bikeshed: Bikeshed,
	Bison: Bison,
	BitBake: BitBake,
	Blade: Blade,
	BlitzBasic: BlitzBasic,
	BlitzMax: BlitzMax,
	Bluespec: Bluespec,
	Boo: Boo,
	Boogie: Boogie,
	Brainfuck: Brainfuck,
	BrighterScript: BrighterScript,
	Brightscript: Brightscript,
	Browserslist: Browserslist,
	C: C,
	"C#": {
	color: "#178600",
	url: "https://github.com/trending?l=Csharp"
},
	"C++": {
	color: "#f34b7d",
	url: "https://github.com/trending?l=C++"
},
	"C2hs Haskell": {
	color: null,
	url: "https://github.com/trending?l=C2hs-Haskell"
},
	"Cabal Config": {
	color: "#483465",
	url: "https://github.com/trending?l=Cabal-Config"
},
	Cadence: Cadence,
	Cairo: Cairo,
	CameLIGO: CameLIGO,
	"CAP CDS": {
	color: "#0092d1",
	url: "https://github.com/trending?l=CAP-CDS"
},
	"Cap'n Proto": {
	color: "#c42727",
	url: "https://github.com/trending?l=Cap'n-Proto"
},
	CartoCSS: CartoCSS,
	Ceylon: Ceylon,
	Chapel: Chapel,
	Charity: Charity,
	ChucK: ChucK,
	Circom: Circom,
	Cirru: Cirru,
	Clarion: Clarion,
	Clarity: Clarity,
	"Classic ASP": {
	color: "#6a40fd",
	url: "https://github.com/trending?l=Classic-ASP"
},
	Clean: Clean,
	Click: Click,
	CLIPS: CLIPS,
	Clojure: Clojure,
	"Closure Templates": {
	color: "#0d948f",
	url: "https://github.com/trending?l=Closure-Templates"
},
	"Cloud Firestore Security Rules": {
	color: "#FFA000",
	url: "https://github.com/trending?l=Cloud-Firestore-Security-Rules"
},
	CMake: CMake,
	COBOL: COBOL,
	CodeQL: CodeQL,
	CoffeeScript: CoffeeScript,
	ColdFusion: ColdFusion,
	"ColdFusion CFC": {
	color: "#ed2cd6",
	url: "https://github.com/trending?l=ColdFusion-CFC"
},
	COLLADA: COLLADA,
	"Common Lisp": {
	color: "#3fb68b",
	url: "https://github.com/trending?l=Common-Lisp"
},
	"Common Workflow Language": {
	color: "#B5314C",
	url: "https://github.com/trending?l=Common-Workflow-Language"
},
	"Component Pascal": {
	color: "#B0CE4E",
	url: "https://github.com/trending?l=Component-Pascal"
},
	Cool: Cool,
	Coq: Coq,
	Crystal: Crystal,
	CSON: CSON,
	Csound: Csound,
	"Csound Document": {
	color: "#1a1a1a",
	url: "https://github.com/trending?l=Csound-Document"
},
	"Csound Score": {
	color: "#1a1a1a",
	url: "https://github.com/trending?l=Csound-Score"
},
	CSS: CSS,
	CSV: CSV,
	Cuda: Cuda,
	CUE: CUE,
	Curry: Curry,
	CWeb: CWeb,
	Cycript: Cycript,
	Cypher: Cypher,
	Cython: Cython,
	D: D,
	D2: D2,
	Dafny: Dafny,
	"Darcs Patch": {
	color: "#8eff23",
	url: "https://github.com/trending?l=Darcs-Patch"
},
	Dart: Dart,
	DataWeave: DataWeave,
	"Debian Package Control File": {
	color: "#D70751",
	url: "https://github.com/trending?l=Debian-Package-Control-File"
},
	DenizenScript: DenizenScript,
	Dhall: Dhall,
	"DIGITAL Command Language": {
	color: null,
	url: "https://github.com/trending?l=DIGITAL-Command-Language"
},
	"DirectX 3D File": {
	color: "#aace60",
	url: "https://github.com/trending?l=DirectX-3D-File"
},
	DM: DM,
	Dockerfile: Dockerfile,
	Dogescript: Dogescript,
	Dotenv: Dotenv,
	DTrace: DTrace,
	Dylan: Dylan,
	E: E,
	Earthly: Earthly,
	Easybuild: Easybuild,
	eC: eC,
	"Ecere Projects": {
	color: "#913960",
	url: "https://github.com/trending?l=Ecere-Projects"
},
	ECL: ECL,
	ECLiPSe: ECLiPSe,
	Ecmarkup: Ecmarkup,
	EditorConfig: EditorConfig,
	Eiffel: Eiffel,
	EJS: EJS,
	Elixir: Elixir,
	Elm: Elm,
	Elvish: Elvish,
	"Elvish Transcript": {
	color: "#55BB55",
	url: "https://github.com/trending?l=Elvish-Transcript"
},
	"Emacs Lisp": {
	color: "#c065db",
	url: "https://github.com/trending?l=Emacs-Lisp"
},
	EmberScript: EmberScript,
	EQ: EQ,
	Erlang: Erlang,
	Euphoria: Euphoria,
	"F#": {
	color: "#b845fc",
	url: "https://github.com/trending?l=Fsharp"
},
	"F*": {
	color: "#572e30",
	url: "https://github.com/trending?l=F*"
},
	Factor: Factor,
	Fancy: Fancy,
	Fantom: Fantom,
	Faust: Faust,
	Fennel: Fennel,
	"FIGlet Font": {
	color: "#FFDDBB",
	url: "https://github.com/trending?l=FIGlet-Font"
},
	"Filebench WML": {
	color: "#F6B900",
	url: "https://github.com/trending?l=Filebench-WML"
},
	Filterscript: Filterscript,
	fish: fish,
	Fluent: Fluent,
	FLUX: FLUX,
	Forth: Forth,
	Fortran: Fortran,
	"Fortran Free Form": {
	color: "#4d41b1",
	url: "https://github.com/trending?l=Fortran-Free-Form"
},
	FreeBasic: FreeBasic,
	FreeMarker: FreeMarker,
	Frege: Frege,
	Futhark: Futhark,
	"G-code": {
	color: "#D08CF2",
	url: "https://github.com/trending?l=G-code"
},
	"Game Maker Language": {
	color: "#71b417",
	url: "https://github.com/trending?l=Game-Maker-Language"
},
	GAML: GAML,
	GAMS: GAMS,
	GAP: GAP,
	"GCC Machine Description": {
	color: "#FFCFAB",
	url: "https://github.com/trending?l=GCC-Machine-Description"
},
	GDB: GDB,
	GDScript: GDScript,
	GEDCOM: GEDCOM,
	"Gemfile.lock": {
	color: "#701516",
	url: "https://github.com/trending?l=Gemfile.lock"
},
	Gemini: Gemini,
	Genero: Genero,
	"Genero Forms": {
	color: "#d8df39",
	url: "https://github.com/trending?l=Genero-Forms"
},
	Genie: Genie,
	Genshi: Genshi,
	"Gentoo Ebuild": {
	color: "#9400ff",
	url: "https://github.com/trending?l=Gentoo-Ebuild"
},
	"Gentoo Eclass": {
	color: "#9400ff",
	url: "https://github.com/trending?l=Gentoo-Eclass"
},
	"Gerber Image": {
	color: "#d20b00",
	url: "https://github.com/trending?l=Gerber-Image"
},
	Gherkin: Gherkin,
	"Git Attributes": {
	color: "#F44D27",
	url: "https://github.com/trending?l=Git-Attributes"
},
	"Git Config": {
	color: "#F44D27",
	url: "https://github.com/trending?l=Git-Config"
},
	"Git Revision List": {
	color: "#F44D27",
	url: "https://github.com/trending?l=Git-Revision-List"
},
	Gleam: Gleam,
	GLSL: GLSL,
	Glyph: Glyph,
	Gnuplot: Gnuplot,
	Go: Go,
	"Go Checksums": {
	color: "#00ADD8",
	url: "https://github.com/trending?l=Go-Checksums"
},
	"Go Module": {
	color: "#00ADD8",
	url: "https://github.com/trending?l=Go-Module"
},
	"Go Workspace": {
	color: "#00ADD8",
	url: "https://github.com/trending?l=Go-Workspace"
},
	"Godot Resource": {
	color: "#355570",
	url: "https://github.com/trending?l=Godot-Resource"
},
	Golo: Golo,
	Gosu: Gosu,
	Grace: Grace,
	Gradle: Gradle,
	"Grammatical Framework": {
	color: "#ff0000",
	url: "https://github.com/trending?l=Grammatical-Framework"
},
	GraphQL: GraphQL,
	"Graphviz (DOT)": {
	color: "#2596be",
	url: "https://github.com/trending?l=Graphviz-(DOT)"
},
	Groovy: Groovy,
	"Groovy Server Pages": {
	color: "#4298b8",
	url: "https://github.com/trending?l=Groovy-Server-Pages"
},
	GSC: GSC,
	Hack: Hack,
	Haml: Haml,
	Handlebars: Handlebars,
	HAProxy: HAProxy,
	Harbour: Harbour,
	Haskell: Haskell,
	Haxe: Haxe,
	HCL: HCL,
	HiveQL: HiveQL,
	HLSL: HLSL,
	HOCON: HOCON,
	HolyC: HolyC,
	hoon: hoon,
	"Hosts File": {
	color: "#308888",
	url: "https://github.com/trending?l=Hosts-File"
},
	HTML: HTML,
	"HTML+ECR": {
	color: "#2e1052",
	url: "https://github.com/trending?l=HTML+ECR"
},
	"HTML+EEX": {
	color: "#6e4a7e",
	url: "https://github.com/trending?l=HTML+EEX"
},
	"HTML+ERB": {
	color: "#701516",
	url: "https://github.com/trending?l=HTML+ERB"
},
	"HTML+PHP": {
	color: "#4f5d95",
	url: "https://github.com/trending?l=HTML+PHP"
},
	"HTML+Razor": {
	color: "#512be4",
	url: "https://github.com/trending?l=HTML+Razor"
},
	HTTP: HTTP,
	HXML: HXML,
	Hy: Hy,
	HyPhy: HyPhy,
	IDL: IDL,
	Idris: Idris,
	"Ignore List": {
	color: "#000000",
	url: "https://github.com/trending?l=Ignore-List"
},
	"IGOR Pro": {
	color: "#0000cc",
	url: "https://github.com/trending?l=IGOR-Pro"
},
	"ImageJ Macro": {
	color: "#99AAFF",
	url: "https://github.com/trending?l=ImageJ-Macro"
},
	Imba: Imba,
	"Inform 7": {
	color: null,
	url: "https://github.com/trending?l=Inform-7"
},
	INI: INI,
	Ink: Ink,
	"Inno Setup": {
	color: "#264b99",
	url: "https://github.com/trending?l=Inno-Setup"
},
	Io: Io,
	Ioke: Ioke,
	Isabelle: Isabelle,
	"Isabelle ROOT": {
	color: "#FEFE00",
	url: "https://github.com/trending?l=Isabelle-ROOT"
},
	J: J,
	Janet: Janet,
	"JAR Manifest": {
	color: "#b07219",
	url: "https://github.com/trending?l=JAR-Manifest"
},
	Jasmin: Jasmin,
	Java: Java,
	"Java Properties": {
	color: "#2A6277",
	url: "https://github.com/trending?l=Java-Properties"
},
	"Java Server Pages": {
	color: "#2A6277",
	url: "https://github.com/trending?l=Java-Server-Pages"
},
	JavaScript: JavaScript,
	"JavaScript+ERB": {
	color: "#f1e05a",
	url: "https://github.com/trending?l=JavaScript+ERB"
},
	JCL: JCL,
	"Jest Snapshot": {
	color: "#15c213",
	url: "https://github.com/trending?l=Jest-Snapshot"
},
	"JetBrains MPS": {
	color: "#21D789",
	url: "https://github.com/trending?l=JetBrains-MPS"
},
	JFlex: JFlex,
	Jinja: Jinja,
	Jison: Jison,
	"Jison Lex": {
	color: "#56b3cb",
	url: "https://github.com/trending?l=Jison-Lex"
},
	Jolie: Jolie,
	jq: jq,
	"JSON": {
	color: "#292929",
	url: "https://github.com/trending?l=JSON"
},
	"JSON with Comments": {
	color: "#292929",
	url: "https://github.com/trending?l=JSON-with-Comments"
},
	JSON5: JSON5,
	JSONiq: JSONiq,
	JSONLD: JSONLD,
	Jsonnet: Jsonnet,
	Julia: Julia,
	"Jupyter Notebook": {
	color: "#DA5B0B",
	url: "https://github.com/trending?l=Jupyter-Notebook"
},
	Just: Just,
	"Kaitai Struct": {
	color: "#773b37",
	url: "https://github.com/trending?l=Kaitai-Struct"
},
	KakouneScript: KakouneScript,
	KerboScript: KerboScript,
	"KiCad Layout": {
	color: "#2f4aab",
	url: "https://github.com/trending?l=KiCad-Layout"
},
	"KiCad Legacy Layout": {
	color: "#2f4aab",
	url: "https://github.com/trending?l=KiCad-Legacy-Layout"
},
	"KiCad Schematic": {
	color: "#2f4aab",
	url: "https://github.com/trending?l=KiCad-Schematic"
},
	Kotlin: Kotlin,
	KRL: KRL,
	kvlang: kvlang,
	LabVIEW: LabVIEW,
	Lark: Lark,
	Lasso: Lasso,
	Latte: Latte,
	Lean: Lean,
	Less: Less,
	Lex: Lex,
	LFE: LFE,
	LigoLANG: LigoLANG,
	LilyPond: LilyPond,
	Limbo: Limbo,
	Liquid: Liquid,
	"Literate Agda": {
	color: "#315665",
	url: "https://github.com/trending?l=Literate-Agda"
},
	"Literate CoffeeScript": {
	color: "#244776",
	url: "https://github.com/trending?l=Literate-CoffeeScript"
},
	"Literate Haskell": {
	color: "#5e5086",
	url: "https://github.com/trending?l=Literate-Haskell"
},
	LiveScript: LiveScript,
	LLVM: LLVM,
	Logos: Logos,
	Logtalk: Logtalk,
	LOLCODE: LOLCODE,
	LookML: LookML,
	LoomScript: LoomScript,
	LSL: LSL,
	Lua: Lua,
	M: M,
	M4: M4,
	M4Sugar: M4Sugar,
	Macaulay2: Macaulay2,
	Makefile: Makefile,
	Mako: Mako,
	Markdown: Markdown,
	Marko: Marko,
	Mask: Mask,
	Mathematica: Mathematica,
	MATLAB: MATLAB,
	Max: Max,
	MAXScript: MAXScript,
	mcfunction: mcfunction,
	MDX: MDX,
	Mercury: Mercury,
	Mermaid: Mermaid,
	Meson: Meson,
	Metal: Metal,
	MiniD: MiniD,
	MiniYAML: MiniYAML,
	Mint: Mint,
	Mirah: Mirah,
	"mIRC Script": {
	color: "#3d57c3",
	url: "https://github.com/trending?l=mIRC-Script"
},
	MLIR: MLIR,
	Modelica: Modelica,
	"Modula-2": {
	color: "#10253f",
	url: "https://github.com/trending?l=Modula-2"
},
	"Modula-3": {
	color: "#223388",
	url: "https://github.com/trending?l=Modula-3"
},
	"Module Management System": {
	color: null,
	url: "https://github.com/trending?l=Module-Management-System"
},
	Monkey: Monkey,
	"Monkey C": {
	color: "#8D6747",
	url: "https://github.com/trending?l=Monkey-C"
},
	Moocode: Moocode,
	MoonScript: MoonScript,
	Motoko: Motoko,
	"Motorola 68K Assembly": {
	color: "#005daa",
	url: "https://github.com/trending?l=Motorola-68K-Assembly"
},
	Move: Move,
	MQL4: MQL4,
	MQL5: MQL5,
	MTML: MTML,
	MUF: MUF,
	mupad: mupad,
	Mustache: Mustache,
	Myghty: Myghty,
	nanorc: nanorc,
	Nasal: Nasal,
	NASL: NASL,
	NCL: NCL,
	Nearley: Nearley,
	Nemerle: Nemerle,
	nesC: nesC,
	NetLinx: NetLinx,
	"NetLinx+ERB": {
	color: "#747faa",
	url: "https://github.com/trending?l=NetLinx+ERB"
},
	NetLogo: NetLogo,
	NewLisp: NewLisp,
	Nextflow: Nextflow,
	Nginx: Nginx,
	Nim: Nim,
	Nit: Nit,
	Nix: Nix,
	"NPM Config": {
	color: "#cb3837",
	url: "https://github.com/trending?l=NPM-Config"
},
	NSIS: NSIS,
	Nu: Nu,
	NumPy: NumPy,
	Nunjucks: Nunjucks,
	Nushell: Nushell,
	NWScript: NWScript,
	"OASv2-json": {
	color: "#85ea2d",
	url: "https://github.com/trending?l=OASv2-json"
},
	"OASv2-yaml": {
	color: "#85ea2d",
	url: "https://github.com/trending?l=OASv2-yaml"
},
	"OASv3-json": {
	color: "#85ea2d",
	url: "https://github.com/trending?l=OASv3-json"
},
	"OASv3-yaml": {
	color: "#85ea2d",
	url: "https://github.com/trending?l=OASv3-yaml"
},
	"Objective-C": {
	color: "#438eff",
	url: "https://github.com/trending?l=Objective-C"
},
	"Objective-C++": {
	color: "#6866fb",
	url: "https://github.com/trending?l=Objective-C++"
},
	"Objective-J": {
	color: "#ff0c5a",
	url: "https://github.com/trending?l=Objective-J"
},
	ObjectScript: ObjectScript,
	OCaml: OCaml,
	Odin: Odin,
	Omgrofl: Omgrofl,
	ooc: ooc,
	Opa: Opa,
	Opal: Opal,
	"Open Policy Agent": {
	color: "#7d9199",
	url: "https://github.com/trending?l=Open-Policy-Agent"
},
	"OpenAPI Specification v2": {
	color: "#85ea2d",
	url: "https://github.com/trending?l=OpenAPI-Specification-v2"
},
	"OpenAPI Specification v3": {
	color: "#85ea2d",
	url: "https://github.com/trending?l=OpenAPI-Specification-v3"
},
	OpenCL: OpenCL,
	"OpenEdge ABL": {
	color: "#5ce600",
	url: "https://github.com/trending?l=OpenEdge-ABL"
},
	OpenQASM: OpenQASM,
	"OpenRC runscript": {
	color: null,
	url: "https://github.com/trending?l=OpenRC-runscript"
},
	OpenSCAD: OpenSCAD,
	"Option List": {
	color: "#476732",
	url: "https://github.com/trending?l=Option-List"
},
	Org: Org,
	Ox: Ox,
	Oxygene: Oxygene,
	Oz: Oz,
	P4: P4,
	Pact: Pact,
	Pan: Pan,
	Papyrus: Papyrus,
	Parrot: Parrot,
	"Parrot Assembly": {
	color: null,
	url: "https://github.com/trending?l=Parrot-Assembly"
},
	"Parrot Internal Representation": {
	color: null,
	url: "https://github.com/trending?l=Parrot-Internal-Representation"
},
	Pascal: Pascal,
	Pawn: Pawn,
	PDDL: PDDL,
	"PEG.js": {
	color: "#234d6b",
	url: "https://github.com/trending?l=PEG.js"
},
	Pep8: Pep8,
	Perl: Perl,
	PHP: PHP,
	PicoLisp: PicoLisp,
	PigLatin: PigLatin,
	Pike: Pike,
	PlantUML: PlantUML,
	PLpgSQL: PLpgSQL,
	PLSQL: PLSQL,
	PogoScript: PogoScript,
	Polar: Polar,
	Pony: Pony,
	Portugol: Portugol,
	PostCSS: PostCSS,
	PostScript: PostScript,
	"POV-Ray SDL": {
	color: "#6bac65",
	url: "https://github.com/trending?l=POV-Ray-SDL"
},
	PowerBuilder: PowerBuilder,
	PowerShell: PowerShell,
	Prisma: Prisma,
	Processing: Processing,
	Procfile: Procfile,
	Prolog: Prolog,
	Promela: Promela,
	"Propeller Spin": {
	color: "#7fa2a7",
	url: "https://github.com/trending?l=Propeller-Spin"
},
	Pug: Pug,
	Puppet: Puppet,
	PureBasic: PureBasic,
	PureScript: PureScript,
	Pyret: Pyret,
	Python: Python,
	"Python console": {
	color: "#3572A5",
	url: "https://github.com/trending?l=Python-console"
},
	"Python traceback": {
	color: "#3572A5",
	url: "https://github.com/trending?l=Python-traceback"
},
	q: q,
	"Q#": {
	color: "#fed659",
	url: "https://github.com/trending?l=Qsharp"
},
	QMake: QMake,
	QML: QML,
	"Qt Script": {
	color: "#00b841",
	url: "https://github.com/trending?l=Qt-Script"
},
	Quake: Quake,
	R: R,
	Racket: Racket,
	Ragel: Ragel,
	Raku: Raku,
	RAML: RAML,
	Rascal: Rascal,
	RBS: RBS,
	RDoc: RDoc,
	REALbasic: REALbasic,
	Reason: Reason,
	ReasonLIGO: ReasonLIGO,
	Rebol: Rebol,
	"Record Jar": {
	color: "#0673ba",
	url: "https://github.com/trending?l=Record-Jar"
},
	Red: Red,
	Redcode: Redcode,
	"Regular Expression": {
	color: "#009a00",
	url: "https://github.com/trending?l=Regular-Expression"
},
	"Ren'Py": {
	color: "#ff7f7f",
	url: "https://github.com/trending?l=Ren'Py"
},
	RenderScript: RenderScript,
	ReScript: ReScript,
	reStructuredText: reStructuredText,
	REXX: REXX,
	Ring: Ring,
	Riot: Riot,
	RMarkdown: RMarkdown,
	RobotFramework: RobotFramework,
	Roff: Roff,
	"Roff Manpage": {
	color: "#ecdebe",
	url: "https://github.com/trending?l=Roff-Manpage"
},
	Rouge: Rouge,
	"RouterOS Script": {
	color: "#DE3941",
	url: "https://github.com/trending?l=RouterOS-Script"
},
	RPC: RPC,
	RPGLE: RPGLE,
	Ruby: Ruby,
	RUNOFF: RUNOFF,
	Rust: Rust,
	Sage: Sage,
	SaltStack: SaltStack,
	SAS: SAS,
	Sass: Sass,
	Scala: Scala,
	Scaml: Scaml,
	Scenic: Scenic,
	Scheme: Scheme,
	Scilab: Scilab,
	SCSS: SCSS,
	sed: sed,
	Self: Self,
	ShaderLab: ShaderLab,
	Shell: Shell,
	"ShellCheck Config": {
	color: "#cecfcb",
	url: "https://github.com/trending?l=ShellCheck-Config"
},
	ShellSession: ShellSession,
	Shen: Shen,
	Sieve: Sieve,
	"Simple File Verification": {
	color: "#C9BFED",
	url: "https://github.com/trending?l=Simple-File-Verification"
},
	Singularity: Singularity,
	Slash: Slash,
	Slice: Slice,
	Slim: Slim,
	Smali: Smali,
	Smalltalk: Smalltalk,
	Smarty: Smarty,
	Smithy: Smithy,
	SmPL: SmPL,
	SMT: SMT,
	Snakemake: Snakemake,
	Solidity: Solidity,
	SourcePawn: SourcePawn,
	SPARQL: SPARQL,
	SQF: SQF,
	SQL: SQL,
	SQLPL: SQLPL,
	Squirrel: Squirrel,
	"SRecode Template": {
	color: "#348a34",
	url: "https://github.com/trending?l=SRecode-Template"
},
	Stan: Stan,
	"Standard ML": {
	color: "#dc566d",
	url: "https://github.com/trending?l=Standard-ML"
},
	Starlark: Starlark,
	Stata: Stata,
	STL: STL,
	StringTemplate: StringTemplate,
	Stylus: Stylus,
	"SubRip Text": {
	color: "#9e0101",
	url: "https://github.com/trending?l=SubRip-Text"
},
	SugarSS: SugarSS,
	SuperCollider: SuperCollider,
	Svelte: Svelte,
	SVG: SVG,
	Sway: Sway,
	Swift: Swift,
	SWIG: SWIG,
	SystemVerilog: SystemVerilog,
	Talon: Talon,
	Tcl: Tcl,
	Tcsh: Tcsh,
	Terra: Terra,
	TeX: TeX,
	Textile: Textile,
	"TextMate Properties": {
	color: "#df66e4",
	url: "https://github.com/trending?l=TextMate-Properties"
},
	Thrift: Thrift,
	"TI Program": {
	color: "#A0AA87",
	url: "https://github.com/trending?l=TI-Program"
},
	"TL-Verilog": {
	color: "#C40023",
	url: "https://github.com/trending?l=TL-Verilog"
},
	TLA: TLA,
	TOML: TOML,
	TSQL: TSQL,
	TSV: TSV,
	TSX: TSX,
	Turing: Turing,
	Twig: Twig,
	TXL: TXL,
	TypeScript: TypeScript,
	"Unified Parallel C": {
	color: "#4e3617",
	url: "https://github.com/trending?l=Unified-Parallel-C"
},
	"Unity3D Asset": {
	color: "#222c37",
	url: "https://github.com/trending?l=Unity3D-Asset"
},
	"Unix Assembly": {
	color: null,
	url: "https://github.com/trending?l=Unix-Assembly"
},
	Uno: Uno,
	UnrealScript: UnrealScript,
	UrWeb: UrWeb,
	V: V,
	Vala: Vala,
	"Valve Data Format": {
	color: "#f26025",
	url: "https://github.com/trending?l=Valve-Data-Format"
},
	VBA: VBA,
	VBScript: VBScript,
	VCL: VCL,
	"Velocity Template Language": {
	color: "#507cff",
	url: "https://github.com/trending?l=Velocity-Template-Language"
},
	Verilog: Verilog,
	VHDL: VHDL,
	"Vim Help File": {
	color: "#199f4b",
	url: "https://github.com/trending?l=Vim-Help-File"
},
	"Vim Script": {
	color: "#199f4b",
	url: "https://github.com/trending?l=Vim-Script"
},
	"Vim Snippet": {
	color: "#199f4b",
	url: "https://github.com/trending?l=Vim-Snippet"
},
	"Visual Basic .NET": {
	color: "#945db7",
	url: "https://github.com/trending?l=Visual-Basic-.NET"
},
	"Visual Basic 6.0": {
	color: "#2c6353",
	url: "https://github.com/trending?l=Visual-Basic-6.0"
},
	Volt: Volt,
	Vue: Vue,
	Vyper: Vyper,
	WDL: WDL,
	"Web Ontology Language": {
	color: "#5b70bd",
	url: "https://github.com/trending?l=Web-Ontology-Language"
},
	WebAssembly: WebAssembly,
	"WebAssembly Interface Type": {
	color: "#6250e7",
	url: "https://github.com/trending?l=WebAssembly-Interface-Type"
},
	WebIDL: WebIDL,
	WGSL: WGSL,
	Whiley: Whiley,
	Wikitext: Wikitext,
	"Windows Registry Entries": {
	color: "#52d5ff",
	url: "https://github.com/trending?l=Windows-Registry-Entries"
},
	wisp: wisp,
	"Witcher Script": {
	color: "#ff0000",
	url: "https://github.com/trending?l=Witcher-Script"
},
	Wollok: Wollok,
	"World of Warcraft Addon Data": {
	color: "#f7e43f",
	url: "https://github.com/trending?l=World-of-Warcraft-Addon-Data"
},
	Wren: Wren,
	X10: X10,
	xBase: xBase,
	XC: XC,
	XML: XML,
	"XML Property List": {
	color: "#0060ac",
	url: "https://github.com/trending?l=XML-Property-List"
},
	Xojo: Xojo,
	Xonsh: Xonsh,
	XProc: XProc,
	XQuery: XQuery,
	XS: XS,
	XSLT: XSLT,
	Xtend: Xtend,
	Yacc: Yacc,
	YAML: YAML,
	YARA: YARA,
	YASnippet: YASnippet,
	Yul: Yul,
	ZAP: ZAP,
	Zeek: Zeek,
	ZenScript: ZenScript,
	Zephir: Zephir,
	Zig: Zig,
	ZIL: ZIL,
	Zimpl: Zimpl
};

const formatLanguageData = (languageObject) => {
  const totalBytes = Object.values(languageObject).reduce(
    (acc, val) => acc + val,
    0
  );
  const languageArray = Object.entries(languageObject).map(
    ([language, bytes]) => {
      const color = colors[language]?.color || "#4B3616";
      return {
        title: language,
        value: parseFloat((bytes / totalBytes * 100).toFixed(1)),
        color
      };
    }
  );
  languageArray.sort((a, b) => b.value - a.value);
  return languageArray;
};
const getStatusIcon = (status) => {
  if (status === "live") {
    return "🟢";
  }
  if (status === "development") {
    return "🚧";
  }
  if (status === "bug" || status === "down") {
    return "⛔️";
  }
  return "⚠️";
};

const octokit = new Octokit({});
async function fetchLanguages(username, slug) {
  try {
    const languages = await octokit.request(
      `GET /repos/${username}/${slug}/languages`,
      {
        owner: username,
        repo: slug,
        auth: "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",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      }
    );
    return formatLanguageData(languages.data);
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
}
async function fetchCommits(username, slug) {
  try {
    const commits = await octokit.request(
      `GET /repos/${username}/${slug}/commits`,
      {
        owner: username,
        repo: slug,
        auth: "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",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      }
    );
    return commits.data;
  } catch (error) {
    console.error("Error fetching commits:", error);
    throw error;
  }
}

const getTimeSince = (dateString) => {
  const now = /* @__PURE__ */ new Date();
  const date = new Date(dateString);
  const timeDiff = now.getTime() - date.getTime();
  const minutes = Math.floor(timeDiff / (1e3 * 60));
  if (minutes === 0) {
    return "now";
  } else if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }
  const hours = Math.floor(timeDiff / (1e3 * 60 * 60));
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }
  const days = Math.floor(timeDiff / (1e3 * 60 * 60 * 24));
  if (days < 7) {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
  const weeks = Math.floor(timeDiff / (1e3 * 60 * 60 * 24 * 7));
  if (weeks < 52) {
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  }
  const years = Math.floor(timeDiff / (1e3 * 60 * 60 * 24 * 7 * 52));
  return `${years} year${years !== 1 ? "s" : ""} ago`;
};
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ActivityLog",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get formatDate() {
      return formatDate;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "activity-log flex-col-05" }, _attrs))}><!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<li><a${ssrRenderAttr("href", item.html_url)} target="_blank" class="hover:text-neutral-brown grid grid-cols-6 gap-x-[2rem] no-underline hover:text-white">`);
    if (item.commit?.message) {
      _push(`<p class="col-span-4 xl:col-span-5">${ssrInterpolate(item.commit?.message)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="col-span-2 xl:col-span-1 flex justify-end">${ssrInterpolate($setup.formatDate(item.commit.author.date))}</span></a></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ActivityLog.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ActivityLog = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ImageGallery",
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get getThumbnailUrl() {
      return getThumbnailUrl;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 xl:grid-cols-3 gap-[1rem]" }, _attrs))}><!--[-->`);
  ssrRenderList($props.images, (image) => {
    _push(`<div><img${ssrRenderAttr("src", $setup.getThumbnailUrl(image.image))}${ssrRenderAttr("alt", image.image.altText)} class="rounded-2xl border border-neutral-brown w-full"></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ImageGallery.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ImageGallery = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);

const color = "#f1e05a";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BarGraph",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const getFillStyle = (item) => {
      return {
        width: `${item.value}%`,
        "background-color": item.color || color
      };
    };
    const computedStyles = computed(() => {
      return props.data.map((item) => ({
        title: item.title,
        fillStyle: getFillStyle(item),
        value: item.value
      }));
    });
    const __returned__ = { props, color, getFillStyle, computedStyles };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.data?.length) {
    _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-[0.6rem]" }, _attrs))}><!--[-->`);
    ssrRenderList($setup.computedStyles, (item) => {
      _push(`<li class="flex flex-col gap-y-[0.1rem]"><span>${ssrInterpolate(item.title)}</span><div class="grid grid-cols-6"><div class="col-span-5"><div style="${ssrRenderStyle(item.fillStyle)}" class="h-[15px] rounded-full border border-neutral-brown"></div></div><div class="col-span-1 leading-none pl-1">${ssrInterpolate(item.value)}%</div></div></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BarGraph.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const BarGraph = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DetailHeader",
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    intro: {
      type: String,
      required: false
    },
    launchUrl: {
      type: String,
      required: false
    },
    codeUrl: {
      type: String,
      required: false
    },
    isFeatured: {
      type: Boolean,
      required: false
    },
    status: {
      type: String,
      required: false
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const labelText = computed(() => {
      if (props.status && props.status !== "live") {
        return `${getStatusIcon(props.status)} ${props.status}`;
      }
      if (props.isFeatured) {
        return "Featured Project";
      }
      return null;
    });
    const showLanuchBtn = computed(() => {
      return props.status ? getStatusIcon(props.status) !== "\u26D4\uFE0F" : true;
    });
    const __returned__ = { props, labelText, showLanuchBtn, get getMediumUrl() {
      return getMediumUrl;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-header border-black pt-[2.5rem] md:pb-0 md:pt-[4rem]" }, _attrs))}><div class="inner md:container grid md:grid-cols-2 gap-y-[3.125rem] md:gap-[4rem]"><div class="flex flex-col gap-y-[1.5rem] order-last md:order-none flex-shrink"><img${ssrRenderAttr("src", $setup.getMediumUrl($props.image._id))}${ssrRenderAttr("alt", $props.image.altText || `Screenshot of ${$props.title}`)} class="aspect-square object-cover md:rounded-3xl border-y md:border-2 border-neutral-brown w-full"></div><div class="text flex flex-col gap-y-[1rem] lg:gap-y-[2.5rem] items-center justify-center text-center">`);
  if ($setup.labelText) {
    _push(`<div class="bg-neutral-brown text-beige uppercase py-[0.3rem] px-[0.6rem] font-semibold text-[0.75rem] rounded-lg">${ssrInterpolate($setup.labelText)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h1 class="text-[3rem] lg:text-[4rem]">${ssrInterpolate($props.title)}</h1><div class="description text-[1.25rem] md:line-clamp-5">${ssrInterpolate($props.intro)}</div><div class="btn-links">`);
  if ($props.launchUrl && $setup.showLanuchBtn) {
    _push(`<a class="btn primary"${ssrRenderAttr("href", $props.launchUrl)} target="_blank">Launch</a>`);
  } else if ($props.launchUrl) {
    _push(`<div class="btn disabled"${ssrRenderAttr("href", $props.launchUrl)} target="_blank">Launch</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.codeUrl) {
    _push(`<a class="btn secondary"${ssrRenderAttr("href", $props.codeUrl)} target="_blank">Code</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DetailHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DetailHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProjectInfo",
  props: {
    data: {
      type: Object,
      required: true
    },
    lastCommit: {
      type: String,
      required: false
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const statusIcon = (status) => {
      if (status === "live") {
        return "\u{1F7E2}";
      }
      if (status === "development") {
        return "\u{1F6A7}";
      }
      if (status === "bug" || status === "down") {
        return "\u26D4\uFE0F";
      }
      return "\u26A0\uFE0F";
    };
    const projectStatusLabel = computed(() => {
      return `${getStatusIcon(props.data.status)} ${props.data.status}`;
    });
    const timeSinceUpdate = computed(() => {
      if (props.lastCommit) {
        return getTimeSince(props.lastCommit);
      }
      return null;
    });
    const __returned__ = { props, statusIcon, projectStatusLabel, timeSinceUpdate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "info" }, _attrs))}><ul class="info-list">`);
  if ($props.data.status) {
    _push(`<li><span class="label">Status</span><span class="value uppercase">${ssrInterpolate($setup.projectStatusLabel)}</span></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.timeSinceUpdate) {
    _push(`<li><span class="label">Updated</span><span class="value">${ssrInterpolate($setup.timeSinceUpdate)}</span></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.data.customUrl) {
    _push(`<li><span class="label">URL</span><a${ssrRenderAttr("href", $props.data.customUrl)} class="value" target="_blank">${ssrInterpolate($props.data.customUrl)}</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.data.url) {
    _push(`<li><span class="label">App Url</span><a${ssrRenderAttr("href", $props.data.url)} class="value" target="_blank">${ssrInterpolate($props.data.url)}</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.data.repository) {
    _push(`<li class="order-last md:order-none"><span class="label">Code url</span><a${ssrRenderAttr("href", $props.data.repository)} class="value" target="_blank">${ssrInterpolate($props.data.repository)}</a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ProjectInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProjectInfo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TagGrid",
  props: {
    title: {
      type: String,
      required: false
    },
    tags: {
      type: Array,
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
  if ($props.tags?.length) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "tag-grid" }, _attrs))}><ul class="tag-grid flex flex-wrap gap-y-[0.75rem] gap-x-[0.5rem]"><!--[-->`);
    ssrRenderList($props.tags, (tag) => {
      _push(`<li class="tag">${ssrInterpolate(tag.title)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TagGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TagGrid = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$1 = {};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path d="M9 18l6-6-6-6"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/IconChevronRight.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const IconChevronRight = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardThumbnailLink",
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, IconChevronRight, get getThumbnailUrl() {
      return getThumbnailUrl;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.link?.slug) {
    _push(`<a${ssrRenderAttrs(mergeProps({
      class: "card thumbnail-link flex gap-x-[1rem] no-underline hover:text-neutral-brown",
      href: `/projects/${$props.link.slug.current}`
    }, _attrs))}><div class="w-[150px] h-[150px] col-span-1 flex-shrink-0"><img${ssrRenderAttr("src", $setup.getThumbnailUrl($props.link.mainImage))} alt="" class="object-cover h-full w-full border border-neutral-brown rounded-xl"></div><div class="link-info justify-between flex-col-1 w-full"><div class="flex-col-05 w-full"><div class="flex justify-between w-full"><h3 class="font-semibold text-[1rem] font-archivo">${ssrInterpolate($props.link.title)}</h3><div class="chevron-icon-sm flex justify-end"></div></div><div class="line-clamp-4 text-[0.875rem]">${ssrInterpolate($props.link.intro)}</div></div><div class="chevron-icon-sm flex justify-end">`);
    _push(ssrRenderComponent($setup["IconChevronRight"], null, null, _parent));
    _push(`</div></div></a>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/CardThumbnailLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardThumbnailLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://astro-portfolio-rldev.netlify.app/");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const data = await fetchProjectDetailPage(Astro2.params.slug || "");
  if (!data.project) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  let languages = [];
  let commits = [];
  let lastCommit;
  if (data?.project.repositoryUsername && data?.project.repositorySlug) {
    const fetchedLanguages = await fetchLanguages(
      data.project.repositoryUsername,
      data.project.repositorySlug
    );
    languages = fetchedLanguages;
    const fetchedCommits = await fetchCommits(
      data.project.repositoryUsername,
      data.project.repositorySlug
    );
    commits = Array.isArray(fetchedCommits) ? fetchedCommits.slice(0, 6) : [];
  }
  if (commits?.length) {
    lastCommit = commits[0].commit.author.date;
  }
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `${data?.profile.name} | ${data.project.title}`, "global": data?.global, "profile": data?.profile, "seoDescription": data.project.intro, "seoImage": data.project.mainImage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "DetailHeader", DetailHeader, { "client:load": true, "title": data?.project.title, "image": data?.project.mainImage, "intro": data?.project.intro, "launchUrl": data?.project.url, "codeUrl": data?.project.repository, "isFeatured": data?.project.featured, "status": data?.project.status, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/DetailHeader.vue", "client:component-export": "default" })} </section> <div class="project-details container grid md:grid-cols-3 gap-[2.5rem] md:gap-x-[4rem] pt-[2rem] md:pt-[4rem]"> <div class="flex-col-3 md:col-span-2 order-last md:order-none"> <section class="flex-col-1"> <h2 class="section-title hidden md:block">Details</h2> ${renderComponent($$result2, "ProjectInfo", ProjectInfo, { "data": data.project, "lastCommit": lastCommit, "class": "hidden md:block" })} </section> <section class="flex-col-1 mt-[-2.5rem] md:mt-0"> <h2 class="section-title">Description</h2> ${renderComponent($$result2, "TextBlock", TextBlock, { "text": data.project.description, "isRichtext": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/TextBlock.vue", "client:component-export": "default" })} </section> ${commits?.length > 0 && renderTemplate`<section class="flex-col-1"> <h2 class="section-title">Activity</h2> ${renderComponent($$result2, "ActivityLog", ActivityLog, { "items": commits })} </section>`} ${data.project?.galleryImages?.length > 0 && renderTemplate`<section class="flex-col-1"> <h2 class="section-title">Images</h2> ${renderComponent($$result2, "ImageGallery", ImageGallery, { "images": data.project.galleryImages })} </section>`} <section class="md:!hidden flex-col-1"> <h2 class="section-title">Categories</h2> ${renderComponent($$result2, "TagGrid", TagGrid, { "tags": data.project.tags, "title": "categories" })} </section> ${data.project?.relatedProjects?.length > 0 && renderTemplate`<section class="flex-col-1"> <h2 class="section-title">Related Projects</h2> <ul class="grid xl:grid-cols-2 gap-x-[1rem] gap-y-[1rem] md:gap-y-[2rem]"> ${data?.project.relatedProjects.map(
    (relatedProject) => renderTemplate`<li> ${renderComponent($$result2, "CardThumbnailLink", CardThumbnailLink, { "link": relatedProject })} </li>`
  )} </ul> </section>`} <!-- End of page on mobile --> </div> <aside class="sidebar flex flex-col gap-y-[3.125rem] justify-between"> <div class="flex-col-3"> <!-- Top of page on mobile --> <section class="md:!hidden flex-col-1"> <h2 class="section-title">Details</h2> ${renderComponent($$result2, "ProjectInfo", ProjectInfo, { "data": data?.project, "lastCommit": lastCommit })} </section> ${languages.length > 0 && renderTemplate`<section class="flex-col-1"> <h2 class="section-title">Languages</h2> ${renderComponent($$result2, "BarGraph", BarGraph, { "data": languages })} </section>`} <section class="flex-col-1"> <h2 class="section-title">Technologies</h2> ${renderComponent($$result2, "TechList", TechList, { "client:load": true, "items": data?.project.technologies, "isOpen": true, "client:component-hydration": "load", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/TechList.vue", "client:component-export": "default" })} </section> <section class="!hidden md:!block"> <h2 class="section-title pb-[1rem]">Categories</h2> ${renderComponent($$result2, "TagGrid", TagGrid, { "tags": data?.project.tags, "title": "categories" })} </section> </div> </aside> </div> ` })}`;
}, "/Users/rayluna/code/projects/astro-portfolio/src/pages/projects/[slug].astro", void 0);

const $$file = "/Users/rayluna/code/projects/astro-portfolio/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { TextBlock as T, _slug_ as _, TechList as a, fetchProjectsLandingPage as b, fetchHomePage as f };
