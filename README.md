# Green Mecc website

Sito ufficiale del Team Green Mecc del Politecnico di Milano. È una single-page
application React + TypeScript costruita con Vite e pubblicata su GitHub Pages.

## Avvio locale

Richiede Node.js 20 o successivo.

```bash
npm ci
npm run dev
```

Il server locale usa normalmente `http://localhost:6831/green-mecc-site/`.

## Controlli

```bash
npm run typecheck
npm run check:naming
npm run build
# oppure entrambi
npm run check
```

`npm run check` verifica nomenclatura, tipi e build. Gli stessi controlli
vengono eseguiti dalla GitHub Action prima del deploy.

## Contenuti

I testi modificabili sono nella cartella `content/`; le istruzioni dettagliate
sono in `content/README.md`. La procedura completa per gli aggiornamenti e' in
`AGGIORNA-SITO.md`. Immagini, icone e loghi pubblici sono in `public/`.

Gli asset della stagione 2026 sono organizzati così:

- `public/general/`: immagini generali di Home e Albo;
- `public/team/covers/`: copertine numerate dei reparti;
- `public/team/members/`: foto numerate dei membri, suddivise per reparto;
- `public/sponsor/`: i 22 loghi della lista sponsor aggiornata;
- `public/vehicles/V7-EROS.webp`: Eros 2026;
- `public/results/R6-2026.webp`: foto del risultato 2026.

Le immagini originali ad alta risoluzione e i file Illustrator non vengono
versionati: si conservano su OneDrive e possono essere lavorati localmente in
`assets-source/INBOX/`. Nel repository restano solo le versioni WebP ottimizzate.

La pagina recruiting è raggiungibile all'hash route `#/join-us`. La sua data di
apertura, le fasi, le FAQ e il futuro link di candidatura sono in
`content/C4-JOIN-US.ts`.

## Convenzione dei nomi

I file che corrispondono alle voci del menu seguono lo stesso ordine numerico:

1. Projects
2. Results
3. Team
4. Join Us
5. Sponsors
6. About

La Home usa il numero `0`; la pagina di dettaglio di un reparto condivide il
numero `3` con Team. I contenuti usano il prefisso `C`, le pagine `P`, le icone
dei reparti `D` e i loghi sponsor `S`. Esempi:

- `content/C1-PROJECTS.ts`;
- `pages/P3-TEAM-GROUP.tsx`;
- `public/departments/D2-bullhorn.svg`;
- `public/sponsor/S5-BREMBO.webp`.

Per gli asset numerati usare `numberedAsset()` in `utils/asset.ts`: il percorso
viene costruito dalla posizione e dal nome, senza duplicare il filename nei file
dei contenuti. Gli altri prefissi sono `G` per le immagini generali, `V` per i
veicoli, `R` per i risultati, `TC` per le copertine Team e `TM` per i membri.

Il comando `npm run asset:prepare` converte e ritaglia una singola immagine. Il
comando `npm run asset:team-batch` prepara in blocco le foto di un'intera
squadra; gli esempi completi sono in `AGGIORNA-SITO.md`.

## Pubblicazione

Ogni push su `main` avvia `.github/workflows/deploy.yml`. Se typecheck e build
passano, GitHub Pages pubblica il contenuto di `dist/` all'indirizzo:

https://lukepalmdev.github.io/green-mecc-site/#/

Le informazioni ancora mancanti o da confermare sono raccolte in
`PUNTI_IN_SOSPESO.md`.
