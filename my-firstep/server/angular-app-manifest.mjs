
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
    'index.csr.html': {size: 8986, hash: '5ac424771003dfd1e883e6037ca33e82960014a0460fcec79de47cc7e735d00b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: '95d52654be000b30090368d4dca6dc5527877ff8858af6594001941f8867ddc9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47317, hash: '2b9a3a5bb5202ae7d5483611df0cc325aeeb9103e9f25ba5b0529db91fec3d29', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 89741, hash: '9fb69bbe843980883a5f898706e9aa1158c947c225aeb668abbff7083f3f8951', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 123429, hash: '07308ca129a975d54f1f437764906ce50bb600a9b8f44c6c859f95de8566e450', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'styles-EKSKN2HZ.css': {size: 21669, hash: 'wA81Osr7PMM', text: () => import('./assets-chunks/styles-EKSKN2HZ_css.mjs').then(m => m.default)}
  },
};
