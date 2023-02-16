/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8312c4402de9dd8e69e32b5570b8391a"
  },
  {
    "url": "assets/css/0.styles.dd1ae7c6.css",
    "revision": "d450c3ecc32ed95cc38b2497be2e38f3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.b3c6cadc.js",
    "revision": "ad3ee99dcff53d831c442198c15f74a9"
  },
  {
    "url": "assets/js/16.b9eb6be8.js",
    "revision": "29ae7149f937810c9c820d057aa2e57d"
  },
  {
    "url": "assets/js/17.f829100a.js",
    "revision": "8dceb00f63fb206ccfb8c7c505caca82"
  },
  {
    "url": "assets/js/18.4ccb1772.js",
    "revision": "01efb56405cededed45dde0b4b418898"
  },
  {
    "url": "assets/js/19.686fa5bc.js",
    "revision": "a1d406c08ce6406bb14e2bc2a775469b"
  },
  {
    "url": "assets/js/2.1a92edb6.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.b411da52.js",
    "revision": "37e9573c409c8ade0a6bf12d080e1005"
  },
  {
    "url": "assets/js/21.1b1a7dce.js",
    "revision": "aa639b8a53b2fe58e999c667f1cb421f"
  },
  {
    "url": "assets/js/22.79b3738a.js",
    "revision": "6c24ff5badb20dd62f0d25124765f5f5"
  },
  {
    "url": "assets/js/23.437cc24f.js",
    "revision": "c0737244c08a6027329a7485bdfa97f6"
  },
  {
    "url": "assets/js/24.e9fd0747.js",
    "revision": "aee22cad59c7b81c9981d293d118d54c"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.3c71fcca.js",
    "revision": "b571707f54429051ffeeff5b8e1517e4"
  },
  {
    "url": "assets/js/6.73f22f79.js",
    "revision": "65c87ea66ae3b2e4b676cfecaec56395"
  },
  {
    "url": "assets/js/7.3f7143c7.js",
    "revision": "ba5677f2c1b45600efbf2676bd653ea6"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.3397c702.js",
    "revision": "ac6230c4560065d2c0edbb963c2a07cd"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e6803140155c639a63f3712b2167bdaf"
  },
  {
    "url": "design/index.html",
    "revision": "acee2426c57c994ef85f666417046263"
  },
  {
    "url": "index.html",
    "revision": "617ac34b6fba20cd70de51f237378452"
  },
  {
    "url": "intro/index.html",
    "revision": "e17a1802eebd1bbf33a30fa33bdf3ad7"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "03b8c61a8fe49501caaccea99de1541a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e4baa904bccdb8e15b44a6d4c4d3538e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6d6216de303dd197d24b8e0a355f080a"
  },
  {
    "url": "software/index.html",
    "revision": "5d3962b21ead2d6321a54ca7ed92df4d"
  },
  {
    "url": "test/index.html",
    "revision": "14eaefa4711a5e0f7e2a75df3d7cbe48"
  },
  {
    "url": "use cases/index.html",
    "revision": "ca898e1fd0d78b724b9195ba5bff31eb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
