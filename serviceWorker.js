const staticDevCoffee = "kurier-app-site-v1";
const assets = [
  "/projekt/",
  "/projekt/map.html",
  "/projekt/sos.html",
  "/projekt/index.html",
  "/projekt/css/style.css",
  "/projekt/js/app.js",
  "/projekt/images/coffe1.png",
  "/projekt/images/coffee2.jpg",
  "/projekt/images/coffee3.jpg",
  "/projekt/images/coffee4.jpg",
  "/projekt/images/coffee5.jpg",
  "/projekt/images/coffee6.jpg",
  "/projekt/images/coffee7.jpg",
  "/projekt/images/coffee8.jpg",
  "/projekt/images/coffee9.jpg",
    "/projekt/images/k1.jpg",
      "/projekt/images/k2.jpg",
        "/projekt/images/k3.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
