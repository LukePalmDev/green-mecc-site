# Aggiornare il sito Green Mecc

Questa e' la guida operativa per chi aggiorna testi e immagini senza conoscere
la struttura tecnica del progetto.

## Regola generale

- I testi si modificano in `content/`.
- Nel repository si salvano soltanto immagini WebP gia' ottimizzate.
- Gli originali ricevuti dal team restano su OneDrive. Per lavorarci in locale
  si possono copiare in `assets-source/INBOX/`, che Git ignora.
- Non pubblicare foto di candidati prima che siano diventati membri del team e
  abbiano autorizzato la pubblicazione.

## Prima di iniziare

```bash
npm ci
```

## Aggiungere una persona e la sua foto

1. Aprire `content/C3-TEAM.ts`.
2. Nel reparto corretto aggiungere la persona nella posizione in cui deve
   comparire. Le persone marcate `Capo Reparto` devono restare all'inizio.
3. Contare la posizione della persona nel reparto, partendo da 1.
4. Preparare la foto con questo comando:

```bash
npm run asset:prepare -- member \
  --input="assets-source/INBOX/Mario Rossi.jpg" \
  --department=aerodynamics \
  --order=20 \
  --name="Mario Rossi"
```

Il comando corregge l'orientamento, ritaglia la foto a 900x1200 e crea, per
esempio, `TM20-MARIO-ROSSI.webp`. Se si sostituisce una foto esistente,
aggiungere `--force=true`.

Il percorso della foto non va scritto nel contenuto: viene calcolato
automaticamente da reparto, posizione, nome e cognome. Per questo, se si cambia
l'ordine delle persone, vanno rinumerate anche le foto. `npm run check:naming`
segnala subito qualsiasi differenza.

### Importazione di un'intera squadra

Per aggiornare decine di foto insieme, mettere in una cartella le sottocartelle
dei reparti e usare nomi file che contengano chiaramente nome e cognome. Poi:

```bash
npm run asset:team-batch -- --input="/percorso/cartella/TEAM"
```

Lo script legge l'elenco in `C3-TEAM.ts`, identifica tutte le foto prima di
scrivere alcun file e crea automaticamente i WebP numerati. Per controllare gli
abbinamenti senza modificare immagini:

```bash
npm run asset:team-batch -- --input="/percorso/cartella/TEAM" --dry-run=true
```

Se due file hanno lo stesso nome o una foto manca, l'importazione viene
annullata e mostra le persone da correggere.

## Sostituire la copertina di un reparto

L'ordine e': Management 1, Chassis 2, Mechanical Design 3, Strategy 4,
Electronics 5, Aerodynamics 6, Design & Communication 7, Logistics & PR 8.

```bash
npm run asset:prepare -- cover \
  --input="assets-source/INBOX/Nuova copertina.jpg" \
  --order=6 \
  --name="Aerodynamics" \
  --force=true
```

Il risultato e' una copertina 1600x900. Controllare sempre che il soggetto non
sia tagliato nella pagina Team.

## Aggiungere veicoli o risultati

I veicoli usano `V<numero>-<NOME>.webp`; i risultati
`R<numero>-<ANNO>.webp`. I comandi preparano immagini 1800x1200:

```bash
npm run asset:prepare -- vehicle --input="foto.jpg" --order=8 --name="Nome veicolo"
npm run asset:prepare -- result --input="foto.jpg" --order=7 --name="2027"
```

Dopo aver creato l'immagine, aggiungere la relativa scheda in
`content/C1-PROJECTS.ts` o `content/C2-RESULTS.ts`.

## Aggiungere uno sponsor

1. Conservare AI, EPS o PDF originale su OneDrive o in `assets-source/INBOX/`.
2. Esportare un WebP nitido, preferibilmente con sfondo trasparente.
3. Usare `S<ordine>-<NOME>.webp`, in maiuscolo e senza numeri nel nome.
4. Aggiungere lo sponsor in `content/C5-SPONSORS.ts` usando lo stesso ordine e
   nome. Il percorso viene costruito automaticamente.
5. Impostare `surface: "dark"` soltanto se il logo richiede un fondo scuro.

## Controllare e pubblicare

```bash
npm run check
npm audit
git status
```

`npm run check` verifica anche che ogni membro abbia esattamente la fotografia
attesa. Dopo il push su `main`, GitHub Actions pubblica automaticamente il sito.
Controllare almeno Home, Projects, Results, Team, Join Us e Sponsors sia da
computer sia da telefono.
