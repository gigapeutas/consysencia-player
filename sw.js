// O Motor do App Instalável (PWA)
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Deixa a internet passar direto (por enquanto não bloqueia nada offline)
});
