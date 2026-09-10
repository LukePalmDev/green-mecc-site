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
npm run build
# oppure entrambi
npm run check
```

Il typecheck viene eseguito anche dalla GitHub Action prima del build e del
deploy.

## Contenuti

I testi modificabili sono nella cartella `content/`; le istruzioni dettagliate
sono in `content/README.md`. Immagini, icone e loghi pubblici sono in `public/`.

La pagina recruiting è raggiungibile all'hash route `#/join-us`. La sua data di
apertura, le fasi, le FAQ e il futuro link di candidatura sono in
`content/joinus.ts`.

## Pubblicazione

Ogni push su `main` avvia `.github/workflows/deploy.yml`. Se typecheck e build
passano, GitHub Pages pubblica il contenuto di `dist/` all'indirizzo:

https://lukepalmdev.github.io/green-mecc-site/#/

Le informazioni ancora mancanti o da confermare sono raccolte in
`PUNTI_IN_SOSPESO.md`.
