import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_gkXgFWL8.mjs';

const _page0  = () => import('./chunks/generic_jG6xx2r0.mjs');
const _page1  = () => import('./chunks/index_YFaYyZSb.mjs');
const _page2  = () => import('./chunks/index_pIGxo3qG.mjs');
const _page3  = () => import('./chunks/_slug__TdS8nEHZ.mjs');
const _page4  = () => import('./chunks/404_99JQSzDX.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects/index.astro", _page2],["src/pages/projects/[slug].astro", _page3],["src/pages/404.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"d3b9ed50-3a43-4c07-844a-fb92d2ca18fb"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
