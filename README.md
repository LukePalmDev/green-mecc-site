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
sono in `content/README.md`. Immagini, icone e loghi pubblici sono in `public/`.

Gli asset della stagione 2026 sono organizzati così:

- `public/team/covers/`: copertine dei reparti;
- `public/team/members/`: foto dei membri, suddivise per reparto;
- `public/sponsor/`: i 20 loghi della lista sponsor aggiornata;
- `public/vehicles/M7-Eros.webp`: Eros 2026;
- `public/result/R6-2026.webp`: foto del risultato 2026.

Le immagini originali ad alta risoluzione e i file Illustrator non vengono
versionati: nel repository restano solo le versioni WebP ottimizzate per il web.

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
dei contenuti.

## Pubblicazione

Ogni push su `main` avvia `.github/workflows/deploy.yml`. Se typecheck e build
passano, GitHub Pages pubblica il contenuto di `dist/` all'indirizzo:

https://lukepalmdev.github.io/green-mecc-site/#/

Le informazioni ancora mancanti o da confermare sono raccolte in
`PUNTI_IN_SOSPESO.md`.
