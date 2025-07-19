
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
    'index.csr.html': {size: 8986, hash: '272c6b84a4dee06e517ecffcf06aa045d969879e35f9832e93e51151df1c726e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: 'dd20d9252908252584b95f254fba413975ec2986394bbca4d36afe4bed6d44fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47687, hash: '57c5730439ae13d0b9a2761bd6246b2d4011b2e516f1972a9d9bf66fe287a9da', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 90247, hash: 'd00c2e2b104839c3181b6483108f1eb9464cd4a1d542ee6a159f5c6d265426e5', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 65454, hash: '0a02f31a0de76e323d3c705dcd0ce41d31d22be87717319d88191c309f49cbf4', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'styles-X25ILXCJ.css': {size: 21610, hash: 'YqlG3TV2YVs', text: () => import('./assets-chunks/styles-X25ILXCJ_css.mjs').then(m => m.default)}
  },
};
