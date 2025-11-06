// sw.js - Service Worker for ILP Tracker
const CACHE_NAME = 'ilp-tracker-cache-v1';
const URLS_TO_CACHE = [
    './ilptracker.html',
    './manifest.json',
    './icon-512.png',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap'
];

self.addEventListener('install', event =>
{
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
    );
});

self.addEventListener('activate', event =>
{
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
});

self.addEventListener('fetch', event =>
{
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
