# Modifica testi del sito

Per cambiare i testi del sito, modifica solo i file in questa cartella.

- `home.ts`: testi della Home.
- `about.ts`: testi della pagina About.
- `team.ts`: testi della pagina Team, reparti, membri, ruoli e Albo. Le foto
  collegate sono in `public/team/`.
- `projects.ts`: testi e schede dei veicoli.
- `results.ts`: testi e risultati. Inserire solo risultati completi e confermati.
- `sponsors.ts`: sponsor, loghi, link opzionali e tipo di sfondo del logo.
- `joinus.ts`: testi della pagina Join Us (recruiting), fasi di selezione e FAQ.
- `layout.ts`: menu, footer, contatti, sede e social.

Regola pratica: cambia solo il testo tra virgolette.

Esempio:

```ts
titolo: "ABOUT",
```

puo diventare:

```ts
titolo: "CHI SIAMO",
```

Non cancellare virgole, parentesi o nomi prima dei due punti.

## Team e sponsor

Per un nuovo membro, aggiungi la foto WebP in
`public/team/members/<id-reparto>/` e poi una voce in `TEAM_STRUCTURE`. Il ruolo
`Capo Reparto` fa comparire automaticamente la persona nella sezione dedicata.

Per un nuovo sponsor, aggiungi il logo ottimizzato in `public/sponsor/2026/` e
una voce in `PARTNERS`. `url` è facoltativo: se manca, la scheda non è un link.
Usa `surface: "dark"` solo per loghi bianchi o pensati per fondi scuri.

## Testi su piu paragrafi

Alcuni testi sono scritti tra parentesi quadre, come elenco. Ogni riga tra
virgolette diventa un paragrafo separato sulla pagina:

```ts
description: [
  "Primo paragrafo.",
  "Secondo paragrafo.",
],
```

Per aggiungere un paragrafo, copia una riga e cambiane il testo, tenendo la
virgola finale.

## Recruiting e pagina Join Us

Il file `joinus.ts` contiene la data di apertura del recruiting, le due fasi di
selezione e le FAQ. Lo stato passa automaticamente ad "Applications open" alla
data indicata in `aperturaIso`. Alla chiusura, imposta `chiuseManualmente` su
`true`.

Il pulsante "Apply now" compare solo se le candidature sono aperte e
`stato.cta.url` contiene un link valido. Le informazioni ancora da confermare
sono elencate in `PUNTI_IN_SOSPESO.md` nella radice del progetto.
