# Istruzioni per gli assistenti AI

## Progetto

- Stack: React 19, TypeScript, Vite, React Router con `HashRouter`.
- Deploy: GitHub Pages tramite `.github/workflows/deploy.yml` a ogni push su
  `main`.
- Base path Vite: `/green-mecc-site/`.
- Non modificare o versionare `dist/`, `node_modules/` e file `.DS_Store`.
- Gli originali di foto e loghi restano su OneDrive o, solo durante la
  lavorazione locale, in `assets-source/INBOX/`, che e' ignorata da Git.
- Non versionare link condivisi, password o token usati per recuperare asset
  esterni.

## Regole di modifica

- Mantieni testi e dati editoriali nei file `content/C*.ts`.
- Usa `utils/asset.ts` per gli asset in `public/`, così il base path di GitHub
  Pages resta corretto.
- Mantieni le route nel formato hash (`#/...`) e aggiungi le voci di navigazione
  in `content/C7-LAYOUT.ts`.
- Conserva lo stile, il responsive design, il tema chiaro/scuro e
  l'accessibilità dei componenti esistenti.
- Non inventare dati mancanti: annotali in `PUNTI_IN_SOSPESO.md`.
- Le foto dei membri seguono
  `public/team/members/<id-reparto>/TM<ordine>-<NOME-COGNOME>.webp`; le copertine
  `public/team/covers/TC<ordine>-<REPARTO>.webp`. In `content/C3-TEAM.ts` non
  scrivere percorsi: sono derivati dall'ordine dei membri. Assegna `Capo
  Reparto` solo alle persone esplicitamente marcate come capo nella fonte.
- Per preparare immagini usa `npm run asset:prepare`; per un'intera squadra usa
  `npm run asset:team-batch`. Segui `AGGIORNA-SITO.md`.
- I loghi sponsor sono direttamente in `public/sponsor/` e si chiamano
  `S<ordine>-<NOME>.webp`, con il nome in maiuscolo e senza altri numeri. Se un
  logo nasce per uno sfondo scuro, usa `surface: "dark"` in
  `content/C5-SPONSORS.ts`.
- Le icone in `public/departments/` seguono `D<ordine>-<nome>.svg`, con nome
  minuscolo e senza numeri finali. Usa `numberedAsset()` invece di scrivere il
  filename completo nei contenuti.
- Le immagini generali usano `G`, i veicoli `V`, i risultati `R`, le copertine
  Team `TC` e le foto membri `TM`. Tutti i nomi descrittivi sono maiuscoli,
  tranne le icone reparto `D` che seguono lo standard minuscolo gia' adottato.
- Pagine e contenuti seguono l'ordine del menu: `1` Projects, `2` Results, `3`
  Team, `4` Join Us, `5` Sponsors, `6` About. La Home è `0`; il dettaglio Team
  condivide `P3` con la pagina Team; `C7-LAYOUT.ts` contiene menu e footer.
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

- I dati della pagina Join Us sono in `content/C4-JOIN-US.ts`.
- Lo stato diventa automaticamente aperto alla data `stato.aperturaIso`.
- Alla chiusura imposta `stato.chiuseManualmente` su `true`.
- Il pulsante di candidatura appare soltanto con candidature aperte e un URL
  diverso da `#`.
