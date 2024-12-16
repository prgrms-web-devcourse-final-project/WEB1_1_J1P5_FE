// public/sw.js
// install service worker
self.addEventListener("install", () => {
  console.log("[Service Worker] installed");
});

// update service worker
self.addEventListener("activate", (e) => {
  console.log("[Service Worker] actived", e);
});

// fetch service worker
self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] fetched resource " + e.request.url);
});
