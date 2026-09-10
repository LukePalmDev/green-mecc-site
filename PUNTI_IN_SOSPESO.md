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

- Fornire le copertine mancanti dei reparti Aerodynamics e Logistics & PR. I
  membri e le loro foto sono presenti, ma per ora nella pagina Team restano le
  due immagini di reparto precedenti.
- Confermare se Irene Marchetti debba essere indicata come Team Leader o con un
  altro ruolo: nel materiale ricevuto il suo file non contiene l'indicazione
  “capo”, quindi il sito la mostra senza ruolo.

## Results

- Confermare con Irene Marchetti i risultati 2026 riportati nel documento
  ricevuto. Sono stati pubblicati come forniti: secondo posto all'Innovation
  Award, terzo posto nella gara di efficienza Urban Concept battery electric e
  qualificazione alla Global Championship 2027.
- Fornire il risultato 2025 e decidere se pubblicare la foto 2025. Nel documento
  il campo è ancora `?`, quindi né la scheda né la foto 2025 sono state aggiunte.

## Sponsor

- Fornire, se si vogliono rendere cliccabili tutte le schede, gli URL ufficiali
  degli sponsor che non avevano un link già verificato nel progetto. In assenza
  di URL la scheda mostra correttamente il logo senza puntare a `#`.

## Miglioria tecnica non bloccante

- Il progetto carica Tailwind CSS dal CDN direttamente in `index.html`. Il sito
  funziona, ma la console segnala che per la produzione sarebbe preferibile
  compilare Tailwind localmente con PostCSS o CLI. Questa migrazione va trattata
  separatamente perché modifica dipendenze e pipeline CSS dell'intero sito.
