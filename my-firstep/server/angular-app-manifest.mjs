
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6NGY22DB.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PYY3XQ7H.js",
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
    'index.csr.html': {size: 9027, hash: 'b79fcc3d6a1e5a91a7debec2ce6fe87db8a03dbcf7c4c8799e16c29a40656c1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: '5a24d99da4dfd5b4d5e583c3ad620a245024e0376fff244cc763a6c3291f9304', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'result/index.html': {size: 90172, hash: '10a172e3c91497707509f73a89f829f817cf816d51fc2f8a302a8b80a9eb0244', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'index.html': {size: 47723, hash: '98ca5f3c4998ea3ab963a147b0b87d1ba441e6e27e8747de6cb353e7f41a89c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 123764, hash: '1f46279a5be7443942b88aaa8c91d8efdc6cc56c9dc8e0b4a6487618b2b8515b', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'styles-QU3QQYJK.css': {size: 21801, hash: 'ficakvdC2LY', text: () => import('./assets-chunks/styles-QU3QQYJK_css.mjs').then(m => m.default)}
  },
};
