/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable implicit-arrow-linebreak */
const CACHE_NAME = "nusantarasa-lite-cache-v1";
const urlsToCache = [
  "/",
  "/templates/index.html",
  "/styles/responsive.css",
  "/styles/style.css",
  "/views/app.js",
  "/routes/router.js",
  "/routes/url_parser.js",
  "/components/aboutUs.js",
  "/components/acehMenu.js",
  "/components/baliMenu.js",
  "/components/bangkaBelitungMenu.js",
  "/components/bantenMenu.js",
  "/components/bengkuluMenu.js",
  "/components/contentList.js",
  "/components/footerBar.js",
  "/components/gorontaloMenu.js",
  "/components/headerBar.js",
  "/components/hero.js",
  "/components/jakartaMenu.js",
  "/components/jambiMenu.js",
  "/components/jawaBaratMenu.js",
  "/components/jawaTengahMenu.js",
  "/components/jawaTimurMenu.js",
  "/components/kalimantanBaratMenu.js",
  "/components/kalimantanSelatanMenu.js",
  "/components/kalimantanTengahMenu.js",
  "/components/kalimantanTimurMenu.js",
  "/components/kalimantanUtaraMenu.js",
  "/components/kepulauanRiauMenu.js",
  "/components/kulinerTerpopuler.js",
  "/components/lampungMenu.js",
  "/components/malukuMenu.js",
  "/components/malukuUtaraMenu.js",
  "/components/ntbMenu.js",
  "/components/nttMenu.js",
  "/components/riauMenu.js",
  "/components/sulawesiBaratMenu.js",
  "/components/sulawesiSelatanMenu.js",
  "/components/sulawesiTengahMenu.js",
  "/components/sulawesiTenggaraMenu.js",
  "/components/sulawesiUtaraMenu.js",
  "/components/sumateraBaratMenu.js",
  "/components/sumateraSelatanMenu.js",
  "/components/sumateraUtaraMenu.js",
  "/components/yogyakartaMenu.js",
  "/components/papuaMenu.js",
];

self.addEventListener("install", (event) => {
  console.log("Service Worker: Install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching files");
      return Promise.all(
        urlsToCache.map((url) =>
          cache.add(url).catch((error) => {
            console.error("Failed to cache:", url, error);
          })
        )
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          console.log(
            "Service Worker: Returning from cache",
            event.request.url
          );
          return response;
        }
        console.log("Service Worker: Fetching from network", event.request.url);
        return fetch(event.request).then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
      .catch((error) => {
        console.error("Fetching failed:", error);
        throw error;
      })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activate");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith("nusantarasa-lite-cache-") &&
                cacheName !== CACHE_NAME
            )
            .map((cacheName) => caches.delete(cacheName))
        )
      )
  );
});
