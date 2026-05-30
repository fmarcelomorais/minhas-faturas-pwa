self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // por enquanto não faz cache
});