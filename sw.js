const CACHE_NAME = 'trigo-stop-cache-v1';

// Força a ativação imediata do Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Estratégia Network-First: Tenta a rede, se falhar (offline) não quebra a app
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('<h2 style="font-family:sans-serif;text-align:center;margin-top:50px;">Modo Offline Ativo</h2>', {
                headers: { 'Content-Type': 'text/html; charset=utf-8' }
            });
        })
    );
});
