# Modifica testi del sito

Per cambiare i testi del sito, modifica solo i file in questa cartella.

- `home.ts`: testi della Home.
- `about.ts`: testi della pagina About.
- `team.ts`: testi della pagina Team, reparti, membri e Albo.
- `projects.ts`: testi e schede dei veicoli.
- `results.ts`: testi e risultati.
- `sponsors.ts`: sponsor, loghi e link.
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

## Segnaposto da sostituire

Il file `joinus.ts` contiene testi provvisori marcati con la parola
PLACEHOLDER. Vanno tutti sostituiti prima di pubblicare la pagina Join Us.
