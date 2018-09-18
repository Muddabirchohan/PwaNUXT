importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.2b62637fdf48eeb10d3d.js",
    "revision": "c5426743f3a2ab6450f0bdcb87c5202e"
  },
  {
    "url": "/_nuxt/layouts_default.957258421d29e071ab90.js",
    "revision": "0ac611743f6ed35596548b53a1d4b622"
  },
  {
    "url": "/_nuxt/manifest.2bc6321dcfa1dc235a98.js",
    "revision": "01a31328a295375623d515cb290cf22c"
  },
  {
    "url": "/_nuxt/pages_index.0d38de2e3d56bdfdaff4.js",
    "revision": "756405e67236550264582a01c4fb7d53"
  },
  {
    "url": "/_nuxt/vendor.862b4cc93b8413f27eca.js",
    "revision": "a8138430e0a154f79205b946852858b9"
  }
], {
  "cacheId": "pwa-news",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





