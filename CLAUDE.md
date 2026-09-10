# Istruzioni per gli assistenti AI

## Progetto

- Stack: React 19, TypeScript, Vite, React Router con `HashRouter`.
- Deploy: GitHub Pages tramite `.github/workflows/deploy.yml` a ogni push su
  `main`.
- Base path Vite: `/green-mecc-site/`.
- Non modificare o versionare `dist/`, `node_modules/` e file `.DS_Store`.
- Non versionare link condivisi, password o token usati per recuperare asset
  esterni.

## Regole di modifica

- Mantieni testi e dati editoriali nei file `content/*.ts`.
- Usa `utils/asset.ts` per gli asset in `public/`, così il base path di GitHub
  Pages resta corretto.
- Mantieni le route nel formato hash (`#/...`) e aggiungi le voci di navigazione
  in `content/layout.ts`.
- Conserva lo stile, il responsive design, il tema chiaro/scuro e
  l'accessibilità dei componenti esistenti.
- Non inventare dati mancanti: annotali in `PUNTI_IN_SOSPESO.md`.
- Salva le foto dei membri in `public/team/members/<id-reparto>/` e le
  copertine in `public/team/covers/`; in `content/team.ts` assegna il ruolo
  `Capo Reparto` solo alle persone esplicitamente marcate come capo nella fonte.
- I loghi della stagione corrente sono in `public/sponsor/2026/`. Se un logo
  nasce per uno sfondo scuro, usa `surface: "dark"` in `content/sponsors.ts`.
- Per Results non pubblicare annate con risultato mancante o indicato con `?`:
  lasciale in `PUNTI_IN_SOSPESO.md` fino alla conferma editoriale.

## Prima di pubblicare

1. Cerca testi provvisori con `grep -RInE 'PLACEHOLDER|TODO|FIXME|lorem'` (escludi
   `.git`, `node_modules` e `dist`).
2. Esegui `npm run check`.
3. Controlla che `git status` contenga solo modifiche previste.
4. Dopo il push, attendi la GitHub Action e verifica il sito pubblico, inclusa
   `#/join-us`, `#/team`, `#/projects`, `#/results` e `#/sponsors`.

## Recruiting

- I dati della pagina Join Us sono in `content/joinus.ts`.
- Lo stato diventa automaticamente aperto alla data `stato.aperturaIso`.
- Alla chiusura imposta `stato.chiuseManualmente` su `true`.
- Il pulsante di candidatura appare soltanto con candidature aperte e un URL
  diverso da `#`.
