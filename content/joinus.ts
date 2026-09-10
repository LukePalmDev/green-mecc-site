// =============================================================================
// PAGINA JOIN US  ->  /join-us
// =============================================================================
//
//  ATTENZIONE — PRIMA DI PUBBLICARE
//  Questa pagina contiene SEGNAPOSTO da sostituire. Cerca la parola PLACEHOLDER
//  in questo file: ogni occorrenza va sostituita con il testo definitivo.
//
//  In attesa di risposta:
//    1. Come ci si candida (link a un form? una email? solo test in presenza?)
//       -> campo `stato.cta.url`
//    2. Quante fasi ha la selezione (2 o 3?)
//       -> array `fasi.tappe`: aggiungi o togli una voce, il layout si adatta
//    3. Le sei risposte delle FAQ
//       -> array `faq.voci`
//
//  Finche' i segnaposto sono qui, NON fare push su main:
//  ogni commit su main pubblica il sito in automatico.
//
// =============================================================================

export const JOINUS_CONTENT = {
  titolo: "JOIN US",
  occhiello:
    "Turn what you study into something that actually moves. Green Mecc is open to students from every course at Politecnico di Milano.",

  intro: [
    "Joining the team is an incredible opportunity because it allows you to expand your theoretical knowledge and finally turn it into real-world practice. This is exactly what it takes to become a true engineer. You won't just be reading textbooks or memorizing formulas; you will be getting your hands dirty, tackling complex problems, and finding innovative solutions. By working on a tangible project, you will bridge the gap between academic concepts and actual manufacturing, shaping yourself into a complete, forward-thinking professional ready to build the future of mobility.",
  ],

  // ---------------------------------------------------------------------------
  // STATO DELLE CANDIDATURE
  // Metti `aperte: false` quando il recruiting e' chiuso: la pagina mostra
  // automaticamente il messaggio di chiusura al posto del pulsante.
  // ---------------------------------------------------------------------------
  stato: {
    aperte: true,
    titoloSezione: "Application status",
    etichettaAperte: "Applications open",
    etichettaChiuse: "Applications closed",
    testoAperte:
      "The recruiting phase will take place in October. The selection process consists of a written test, followed by an oral interview for those who pass the first stage.",
    testoChiuse:
      "PLACEHOLDER — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Applications are currently closed: follow our social channels to be notified when the next recruiting round opens.",
    cta: {
      testo: "Apply now",
      // PLACEHOLDER — sostituire con il link al form di candidatura,
      // oppure con "mailto:sem-dmec@polimi.it" se si procede via email.
      url: "#",
    },
  },

  // ---------------------------------------------------------------------------
  // COME FUNZIONA — timeline delle fasi di selezione
  // Aggiungere o togliere una tappa: basta aggiungere/rimuovere un blocco { }.
  // La numerazione 01, 02, 03... e' calcolata in automatico.
  // ---------------------------------------------------------------------------
  fasi: {
    titolo: "How it works",
    sottotitolo: "From the written test to the interview.",
    tappe: [
      {
        titolo: "The written test",
        testo:
          "PLACEHOLDER — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The written test lets us assess your skills and your potential.",
      },
      {
        titolo: "The interview",
        testo:
          "PLACEHOLDER — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Candidates who pass the written test are invited to an individual oral interview with the heads of the department they applied for.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // REPARTI — la griglia legge direttamente DEPARTMENTS_INFO da team.ts.
  // Per modificare nomi o descrizioni dei reparti, agisci su team.ts.
  // ---------------------------------------------------------------------------
  reparti: {
    titolo: "Choose your department",
    sottotitolo:
      "Eight departments, one vehicle. Pick the one that fits you best and discover what it does.",
  },

  ctaFinale: {
    titolo: "Put your skills to work",
    testo:
      "PLACEHOLDER — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Every season starts with a new group of students.",
    bottonePrimario: "Apply now",
    bottoneSecondario: "Discover the departments",
  },

  // ---------------------------------------------------------------------------
  // FAQ — tutte le risposte sono da scrivere.
  // ---------------------------------------------------------------------------
  faq: {
    titolo: "Frequently asked questions",
    sottotitolo: "Everything worth knowing before you apply.",
    voci: [
      {
        domanda: "Who can join the team?",
        risposta:
          "PLACEHOLDER — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        domanda: "Do I need previous experience?",
        risposta:
          "PLACEHOLDER — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        domanda: "When does the next recruiting round open?",
        risposta:
          "PLACEHOLDER — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        domanda: "How does the selection process work?",
        risposta:
          "PLACEHOLDER — Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        domanda: "How much time does the team require?",
        risposta:
          "PLACEHOLDER — Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
      {
        // Questa e' l'unica risposta ricavata da dati gia' presenti sul sito
        // (l'indirizzo nel footer). Da confermare comunque.
        domanda: "Where do you work?",
        risposta:
          "PLACEHOLDER — Our base is at Politecnico di Milano, Via Candiani 72, 20158 Milano. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
};
