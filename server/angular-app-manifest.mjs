
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6140, hash: '9120de7a823e7d5111e9bb4481aa8f7a90e731705ab1b761df1e251b63f62434', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1572, hash: 'fdf9b7e5fa7d5ecfb1c9f72cf65698cda89063c5451ee86b1408317cf2855384', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 75633, hash: 'ccce100dc845d2ebf680082b46b3ae56bea00e7424b504d18334fb2aa8ef09d8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-G724CYUS.css': {size: 389830, hash: 'uEFTRSjJM5c', text: () => import('./assets-chunks/styles-G724CYUS_css.mjs').then(m => m.default)}
  },
};
