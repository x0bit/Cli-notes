const CACHE_NAME = 'cli-reader-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/docs.json',
  'https://unpkg.com/vue@3.4.15/dist/vue.global.prod.js',
  'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
