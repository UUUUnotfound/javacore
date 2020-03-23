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
    "url": "advanced/index.html",
    "revision": "1b6f5cde4819765ac5bb859d268b0d0c"
  },
  {
    "url": "advanced/java-code-style.html",
    "revision": "73eeebf465ee27d5e8b81a1761a49da4"
  },
  {
    "url": "advanced/java-crypto.html",
    "revision": "d0d1cf4b56a3c98b36920ac9cc94948b"
  },
  {
    "url": "advanced/java-locale.html",
    "revision": "312781c3befa46084d8826879e5ac421"
  },
  {
    "url": "advanced/java-regex.html",
    "revision": "0b712973823c742688bba673cabc8f41"
  },
  {
    "url": "advanced/jdk8.html",
    "revision": "fc13d3deaf3ce2bbad84b0a016128499"
  },
  {
    "url": "assets/css/0.styles.f34682e6.css",
    "revision": "5434c4f1793919f0fb93c1db404a9122"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.91c14d8c.js",
    "revision": "5c3e46433e70b4e72785964db4f31bf6"
  },
  {
    "url": "assets/js/11.b9f472c6.js",
    "revision": "91fb2535ac75f43aa7c61496efc1b1b9"
  },
  {
    "url": "assets/js/12.928e5181.js",
    "revision": "c8d96a7d0e0a99d8efe471d2bf3a567e"
  },
  {
    "url": "assets/js/13.1a5a2a93.js",
    "revision": "06231f878454df1d97d2e879732ef1ef"
  },
  {
    "url": "assets/js/14.11542a0d.js",
    "revision": "b2c0f48482806771bd14d0949de8ada1"
  },
  {
    "url": "assets/js/15.102a0190.js",
    "revision": "ad6e22a2c917a86886cf6c595a1af63c"
  },
  {
    "url": "assets/js/16.254b27e6.js",
    "revision": "7ac37aef08c3f86e7b898b3d60a79a1b"
  },
  {
    "url": "assets/js/17.703b9a9b.js",
    "revision": "363726686685be29afa2f00373c1970c"
  },
  {
    "url": "assets/js/18.fd55a4a6.js",
    "revision": "c654df24889896270e7f5889181fc7d2"
  },
  {
    "url": "assets/js/19.10ade8af.js",
    "revision": "7f0a9e0e672c75908a4e6d8eefd01527"
  },
  {
    "url": "assets/js/20.79c9eb23.js",
    "revision": "5babcf71e35f7bb8f054d285fb6d4846"
  },
  {
    "url": "assets/js/21.0cce5347.js",
    "revision": "ff14f7abe1e0febf500fa4419178448f"
  },
  {
    "url": "assets/js/22.2db22722.js",
    "revision": "36772d42f5cad9d5cb604e1f0c3f9948"
  },
  {
    "url": "assets/js/23.dcb13b9c.js",
    "revision": "83c9802090c94f759c1300d994dace5e"
  },
  {
    "url": "assets/js/24.6bffe5d5.js",
    "revision": "57e439a5e78f4a95ab848731e2ae9487"
  },
  {
    "url": "assets/js/25.2da76292.js",
    "revision": "57c4076c7639214895d558380cf49f08"
  },
  {
    "url": "assets/js/26.345dfef3.js",
    "revision": "1184ecfa8573c5342ec30d9ef0d9ac3b"
  },
  {
    "url": "assets/js/27.c30475cd.js",
    "revision": "a0c7523550d379a4897d21bb92684ca2"
  },
  {
    "url": "assets/js/28.7eb940f3.js",
    "revision": "0cbf264c6e5bd5742897249a6e154a3d"
  },
  {
    "url": "assets/js/29.8e92b5c2.js",
    "revision": "857f62a888dcc880d193e60372a76aff"
  },
  {
    "url": "assets/js/30.e89792d4.js",
    "revision": "cb5907fea181c819052b2cf9c2a42f14"
  },
  {
    "url": "assets/js/31.74d195c4.js",
    "revision": "fd9e93aa1c00178fb2dbb803ddb04f6b"
  },
  {
    "url": "assets/js/32.44c8f591.js",
    "revision": "66e25256f5dfd5602e110505c228e76d"
  },
  {
    "url": "assets/js/33.2ea2c4b8.js",
    "revision": "6a9c9a89abb3b23beb0b07271774718b"
  },
  {
    "url": "assets/js/34.8dfb43cb.js",
    "revision": "1ee3bbf01b21fb938cc71db51a472783"
  },
  {
    "url": "assets/js/35.863570ca.js",
    "revision": "bebf8d218052fc29143d82318f8b1a76"
  },
  {
    "url": "assets/js/36.5a22897c.js",
    "revision": "2f3aa53c4503b9f4027ff31732caa84c"
  },
  {
    "url": "assets/js/37.2251aacd.js",
    "revision": "c37b4ede836c179f0ef1d3c6ef74259f"
  },
  {
    "url": "assets/js/38.a75d177b.js",
    "revision": "cf750fb3f4651559263e02718338b8bc"
  },
  {
    "url": "assets/js/39.23f95e8a.js",
    "revision": "a3e1a304b92eb8c91d3b25ecfdd65c4a"
  },
  {
    "url": "assets/js/4.cd676e38.js",
    "revision": "3ba11f02072cd133be9861fda056e3ca"
  },
  {
    "url": "assets/js/40.65001a76.js",
    "revision": "0f0e1ac0393be561e194972cafd90438"
  },
  {
    "url": "assets/js/41.814a559f.js",
    "revision": "5ef1b6891da90a859d9632cab3156706"
  },
  {
    "url": "assets/js/42.6d7c8b18.js",
    "revision": "223dc1a36409cc9ee732e970bd50635b"
  },
  {
    "url": "assets/js/43.15e69d69.js",
    "revision": "666a928f2075ce0bc57f68452c56246f"
  },
  {
    "url": "assets/js/44.ab3160fb.js",
    "revision": "d71896aab7db3b38882c519218089e8f"
  },
  {
    "url": "assets/js/45.1fbc89ef.js",
    "revision": "77d3fdf99a4ba543a7ce70983d93208c"
  },
  {
    "url": "assets/js/46.d5d37097.js",
    "revision": "27b37a2b20419b0a0a7e43b2fb453c37"
  },
  {
    "url": "assets/js/47.6fcf10d7.js",
    "revision": "5abcc2eaa3fa9ba88fbc38b2b02ff776"
  },
  {
    "url": "assets/js/48.efbd887a.js",
    "revision": "6dd966535801422092259c1146f2d89a"
  },
  {
    "url": "assets/js/49.227928de.js",
    "revision": "39665291a9dad912902603a433701ed6"
  },
  {
    "url": "assets/js/5.03bf4309.js",
    "revision": "1ff6cada595bc62edd52226aed284145"
  },
  {
    "url": "assets/js/50.b9cf52f4.js",
    "revision": "8961226f64ecb3306ae0b9d6455099bd"
  },
  {
    "url": "assets/js/51.427e5c0a.js",
    "revision": "1caeb19ed52304ce10be722764e09f6c"
  },
  {
    "url": "assets/js/52.9ada5c29.js",
    "revision": "3fd4329d4bf9f7873aa2837dd9f0f046"
  },
  {
    "url": "assets/js/53.bd6d2d4f.js",
    "revision": "4a2d73de2dc9ad684d1137236625302c"
  },
  {
    "url": "assets/js/54.78e9faae.js",
    "revision": "08400d972c66dd2954a8c454f2176ac3"
  },
  {
    "url": "assets/js/55.34f85803.js",
    "revision": "b9c260a531d70eda3face47f834c8f16"
  },
  {
    "url": "assets/js/56.8409493e.js",
    "revision": "a4e30eb847e28244c197e36fe4a2b2cd"
  },
  {
    "url": "assets/js/57.9f30c4a0.js",
    "revision": "9bd75ad796035a9216e3b62f1102c5f8"
  },
  {
    "url": "assets/js/58.4dc573bd.js",
    "revision": "fa5166feb2dc756c7a9d4eb1a2807c04"
  },
  {
    "url": "assets/js/59.08b8955a.js",
    "revision": "5331efd136899bc1f7d52f6642c10438"
  },
  {
    "url": "assets/js/6.b4217476.js",
    "revision": "05f4edcd443fb29fe91794274c9ac691"
  },
  {
    "url": "assets/js/60.271d82f3.js",
    "revision": "560c17d4c820b9e9180b47c128856a80"
  },
  {
    "url": "assets/js/61.40d3e91d.js",
    "revision": "9965be2512f30ca7b9fb865698ef6f93"
  },
  {
    "url": "assets/js/62.e6294c12.js",
    "revision": "b30f4da7a540d389dcb0df1b5b4ff758"
  },
  {
    "url": "assets/js/63.ff80a4c0.js",
    "revision": "2373644fd5f5c7bc3d610fc08d63572a"
  },
  {
    "url": "assets/js/7.7e09c600.js",
    "revision": "406868a4e630804cb506dca51776ad0b"
  },
  {
    "url": "assets/js/8.41850d14.js",
    "revision": "87dfce8eeb7ccedcb69c9ab008a84be0"
  },
  {
    "url": "assets/js/9.fd9e7994.js",
    "revision": "c912b704b4169d68459c5dbbb23bd7e6"
  },
  {
    "url": "assets/js/app.d7dfeda6.js",
    "revision": "e42e10c1eea1fec4292e9cfe6fe434f9"
  },
  {
    "url": "assets/js/vendors~flowchart.16fe5c35.js",
    "revision": "6f1363afe314ec7cb1c8e6bc9fa98fbc"
  },
  {
    "url": "assets/js/vendors~notification.ffada997.js",
    "revision": "c4bbafc68016576dead5099c0afe0a81"
  },
  {
    "url": "basics/index.html",
    "revision": "5ee47b38c6f1a6201e07c5743c6579f5"
  },
  {
    "url": "basics/java-annotation.html",
    "revision": "154faf8cb0b2f0aee7ecd3c9d61742b7"
  },
  {
    "url": "basics/java-array.html",
    "revision": "8fc72cffcc90326b219dbfba4ecd2ad0"
  },
  {
    "url": "basics/java-basic-grammar.html",
    "revision": "f4112ddc38efe327c0327ac7b354377b"
  },
  {
    "url": "basics/java-class.html",
    "revision": "414d338a75c4da94ab104419c3aa7ed7"
  },
  {
    "url": "basics/java-common-tool-class.html",
    "revision": "b17c7b4fe9543e17c95c65ae64919a54"
  },
  {
    "url": "basics/java-control-statement.html",
    "revision": "209a440c6a17da4e2c0fd2d982dbb139"
  },
  {
    "url": "basics/java-data-type.html",
    "revision": "ebf0e2bea01ca6697f41bebfefbe0f1d"
  },
  {
    "url": "basics/java-develop-env.html",
    "revision": "a957b5276ac6753e1eb0b659146529f6"
  },
  {
    "url": "basics/java-enum.html",
    "revision": "97acf8a06d22abee2968c402e87fea58"
  },
  {
    "url": "basics/java-exception.html",
    "revision": "8680a3dcf33908da323110779d42288d"
  },
  {
    "url": "basics/java-generic.html",
    "revision": "43e70ae0523e0b33784896c6d6a1fdfe"
  },
  {
    "url": "basics/java-method.html",
    "revision": "4d12e38a156f58470fed8ed31944d4c7"
  },
  {
    "url": "basics/java-oop.html",
    "revision": "9828a3f95547591948bcf2e0102cc796"
  },
  {
    "url": "basics/java-reflection.html",
    "revision": "9d46ff253aa2664af5c46e4585990ce7"
  },
  {
    "url": "concurrent/index.html",
    "revision": "15ab0a162c359bf556b01efb5a52edad"
  },
  {
    "url": "concurrent/java-atomic-class.html",
    "revision": "bc9be3273620ec96a28acae1041f4164"
  },
  {
    "url": "concurrent/java-concurrent-basic-mechanism.html",
    "revision": "992837bf4865e4b5d80b385b4a4267eb"
  },
  {
    "url": "concurrent/java-concurrent-container.html",
    "revision": "27b4efe8957b2fd7770836b910ec9ec7"
  },
  {
    "url": "concurrent/java-concurrent-interview.html",
    "revision": "25e875c6de4b692f597e63b0fc23af9f"
  },
  {
    "url": "concurrent/java-concurrent-introduction.html",
    "revision": "20c484cb6b2e8b1260ceae3f23cd48da"
  },
  {
    "url": "concurrent/java-concurrent-tools.html",
    "revision": "1e7af4f1f55cdd8a137c7844c9121dee"
  },
  {
    "url": "concurrent/java-lock.html",
    "revision": "36fa2491b07f1ae5462185d81d80beeb"
  },
  {
    "url": "concurrent/java-memory-model.html",
    "revision": "d758123097ad7b9de310aaceb114e4fa"
  },
  {
    "url": "concurrent/java-thread-pool.html",
    "revision": "4398887d64bb0ac5c251be898e8ce2be"
  },
  {
    "url": "concurrent/java-thread.html",
    "revision": "bcab316038d4c2670f771e107aee4010"
  },
  {
    "url": "container/index.html",
    "revision": "0c91d634f8fe5b90ed462e0d14f2fb1d"
  },
  {
    "url": "container/java-container-list.html",
    "revision": "4824c4bbf08d07563b46d28a5a543e68"
  },
  {
    "url": "container/java-container-map.html",
    "revision": "15e5280ad5f40615b2b6b968ac0ff322"
  },
  {
    "url": "container/java-container-queue.html",
    "revision": "1c79dc32ff0c7956136b783ad7a234e5"
  },
  {
    "url": "container/java-container-set.html",
    "revision": "432e2586c457b219c9daedfabafd6694"
  },
  {
    "url": "container/java-container.html",
    "revision": "c53696dae335bb11c03ee2bad33cb324"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "cc3d50daffea6b0aa93f0d289e65f405"
  },
  {
    "url": "io/index.html",
    "revision": "3818964c4e0946c6958c6f6cc71325d9"
  },
  {
    "url": "io/java-bio.html",
    "revision": "4ab59c2973990474c4de5cd704d38ab8"
  },
  {
    "url": "io/java-io-base.html",
    "revision": "2aa69e6b0b4a4e4ab9bc383aaaa58cc7"
  },
  {
    "url": "io/java-net.html",
    "revision": "a4d6d7047c4d226bac7786051556ea27"
  },
  {
    "url": "io/java-nio.html",
    "revision": "40f8cce7f4221707d49eb2792d414b65"
  },
  {
    "url": "io/java-serialization.html",
    "revision": "3abcef4bdd79ae316c9082a8eb5fb31e"
  },
  {
    "url": "jvm/index.html",
    "revision": "8e95a48ded457f8cdd7c7f10586ad845"
  },
  {
    "url": "jvm/jvm-action.html",
    "revision": "901db5a90c0b45ba0c51111375bb5228"
  },
  {
    "url": "jvm/jvm-architecture.html",
    "revision": "ea701f75383148ef76b7eebd35fc6a9c"
  },
  {
    "url": "jvm/jvm-bytecode.html",
    "revision": "25f9121bc508705be0cbd070f2a7beb5"
  },
  {
    "url": "jvm/jvm-class-loader.html",
    "revision": "c8e1842906ade71729258a82bc04d932"
  },
  {
    "url": "jvm/jvm-gc.html",
    "revision": "dcc50abcd1943627b4d62e66b4a5d20d"
  },
  {
    "url": "jvm/jvm-memory.html",
    "revision": "6c4abe9bce0a233d22607ad380c9db84"
  },
  {
    "url": "jvm/jvm-tools.html",
    "revision": "8d299ae718d99405b21e141d28bd6318"
  },
  {
    "url": "jvm/troubleshooting.html",
    "revision": "5276989ea8e7a7c027b1a44d38de9bd9"
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
