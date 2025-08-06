
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
      "chunk-3QPMFQLV.js",
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
    'index.csr.html': {size: 8986, hash: '8c91d3a17acc7b3c439f6b931f5996f13142ffea0483dd4a2bb7d4ef6ca00f92', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: 'c9590c85cb8582456b2851691955f7580e12674454a8b5f78585ce2dbc198ff5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47317, hash: 'd5221b4f3ce00e68866bfcd9f10f814dc17844d2ad37cb77aada55a0ef50aef5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 89741, hash: '03c25ad16b46eb31ce56cdb3e08facc7dd1df81b1935674870445b35da4f3b1f', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 123429, hash: '77b5a06545ced581f812170d53317e99059e10b10d6890a24d34449d7e25ab9e', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'styles-EKSKN2HZ.css': {size: 21669, hash: 'wA81Osr7PMM', text: () => import('./assets-chunks/styles-EKSKN2HZ_css.mjs').then(m => m.default)}
  },
};
