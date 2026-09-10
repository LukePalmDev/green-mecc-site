# Punti in sospeso

Aggiornato il 10 settembre 2026.

## Recruiting

- Fornire il link ufficiale o la modalità di candidatura. Finché
  `content/joinus.ts > stato.cta.url` resta `#`, il pulsante “Apply now” è
  volutamente nascosto.
- Fornire la data di chiusura del recruiting. Per ora il sito apre
  automaticamente le candidature il 21 settembre 2026 e resta aperto finché
  `chiuseManualmente` non viene impostato su `true`.
- Confermare che apertura (21 settembre) e test scritto (12 ottobre) si
  riferiscano al 2026. Il sito non mostra l'anno, ma l'apertura automatica usa il
  2026.
- Facoltativo: aggiungere orario, luogo e argomenti del test scritto, se si
  desidera pubblicarli.

## Team

- Inserire i membri dei reparti Electronics e Logistics & PR, oggi vuoti.
- Sostituire `public/user-3.webp`, usata come immagine provvisoria per tutti i
  membri, con le foto individuali quando saranno disponibili.

## Miglioria tecnica non bloccante

- Il progetto carica Tailwind CSS dal CDN direttamente in `index.html`. Il sito
  funziona, ma la console segnala che per la produzione sarebbe preferibile
  compilare Tailwind localmente con PostCSS o CLI. Questa migrazione va trattata
  separatamente perché modifica dipendenze e pipeline CSS dell'intero sito.
