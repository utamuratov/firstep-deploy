
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-XPKMMV7R.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U6BZ2XDE.js",
      "chunk-YXV7UAZK.js",
      "chunk-MAGCBL5F.js"
    ],
    "route": "/test"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R5EWMOA6.js",
      "chunk-YXV7UAZK.js",
      "chunk-MAGCBL5F.js"
    ],
    "route": "/result"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8958, hash: '0473adc6c676f03ab238b179ffa1faab16cec319941b198bb018d68905c5bf8d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: 'a76182bfe00b593e08bfb9f6625ce10177a130f5cd43e75f1714092fbbdf4efb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49841, hash: '81468cea4584d6ab412ae7064449821547a4f533234d1d754fff00acef0a8e58', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 92176, hash: '9841b4755d9adc0e87e6305f632d5121868fba08b59ccaa706fc52d7e25c96a6', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 125904, hash: '614220f397d6161717fdd877cea8655eda0ee620d11b2706d65479a23d4e7d8f', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'styles-LEPD75BE.css': {size: 21670, hash: 'fm4QbNp7MzE', text: () => import('./assets-chunks/styles-LEPD75BE_css.mjs').then(m => m.default)}
  },
};
