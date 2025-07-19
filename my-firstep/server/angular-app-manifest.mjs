
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-XEUHW7WA.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-W7FTDYJF.js",
      "chunk-Z7SV22A2.js",
      "chunk-MAGCBL5F.js"
    ],
    "route": "/test"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FLJYQ74K.js",
      "chunk-Z7SV22A2.js",
      "chunk-MAGCBL5F.js"
    ],
    "route": "/result"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8986, hash: '1ca42d000764494aa3a4f2943879d53b8cb4cbb8ff903ad1f6b422e4dcee9fdc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: '65dd8b8ad4e0a1f93c40890e57ce1b2cd83e2d10ae726d4d0665dce0a4ba1b4f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48080, hash: 'c1b2d266c582554e9830c7532bae8f6c7dc418a8c66193d5d444d3cb6bbc0e7a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 90208, hash: '4e3a7df9d9e5f80753e1c6d95450ddc9eef350682e4b15f8f3b33b249305d2c7', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 123863, hash: 'eea28864b2ec77bbd7b54a4c34cfebfb85edb2afcdb8f3aa440322344678fd92', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'styles-Q7J4NZCW.css': {size: 21610, hash: 'aNGBReARbeg', text: () => import('./assets-chunks/styles-Q7J4NZCW_css.mjs').then(m => m.default)}
  },
};
