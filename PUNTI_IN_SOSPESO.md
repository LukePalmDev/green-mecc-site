# Punti in sospeso

Aggiornato il 14 settembre 2026.

## Recruiting

- Verificare che l'accesso Google obbligatorio al form di candidatura sia
  voluto. Il collegamento è inserito, ma per un visitatore non autenticato il
  form reindirizza oggi alla schermata di login Google.
- Fornire la data di chiusura del recruiting. Le candidature sono
  aperte manualmente da subito e restano aperte finché
  `chiuseManualmente` non viene impostato su `true`.
- Facoltativo: aggiungere orario, luogo e argomenti del test scritto, se si
  desidera pubblicarli.

## Team

- Fornire la copertina definitiva del reparto Logistics & PR. Aerodynamics usa
  ora la nuova fotografia ricevuta; Logistics & PR mantiene temporaneamente la
  precedente fotografia di gruppo.
- Attendere le eventuali una o due nuove foto Team e l'indicazione delle foto
  da sostituire. Irene Marchetti è confermata come Team Leader.

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
- Per il prossimo cambio completo della squadra, valutare un unico file CSV con
  reparto, ordine, nome, cognome, ruolo, email e LinkedIn. L'importazione batch
  prepara gia' tutte le fotografie, ma i dati delle persone vengono ancora
  aggiornati manualmente in `content/C3-TEAM.ts`.
- Quattro persone compaiono oggi in due reparti e usano due copie identiche
  della stessa foto. Se i casi aumentano, conviene introdurre un archivio unico
  delle persone e collegare ciascuna persona a uno o più reparti.
- Aggiungere in CI un controllo visivo automatico delle pagine principali con
  screenshot desktop e mobile. I controlli correnti coprono nomi, associazione
  membri/foto, TypeScript e build.
