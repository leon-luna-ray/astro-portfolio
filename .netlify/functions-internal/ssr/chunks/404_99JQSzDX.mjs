export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/404_xtWapAlt.mjs').then(n => n.c);

export { page };
