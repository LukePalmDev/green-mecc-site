// Pagina Join Us -> /join-us
// Le informazioni ancora da confermare sono raccolte in PUNTI_IN_SOSPESO.md.

export const JOINUS_CONTENT = {
  titolo: "JOIN US",
  occhiello:
    "Bring what you study beyond the classroom. Join Green Mecc and turn your skills, ideas and curiosity into a real vehicle built to compete.",

  intro: [
    "Joining the team is an incredible opportunity because it allows you to expand your theoretical knowledge and finally turn it into real-world practice. This is exactly what it takes to become a true engineer. You won't just be reading textbooks or memorizing formulas; you will be getting your hands dirty, tackling complex problems, and finding innovative solutions. By working on a tangible project, you will bridge the gap between academic concepts and actual manufacturing, shaping yourself into a complete, forward-thinking professional ready to build the future of mobility.",
  ],

  // ---------------------------------------------------------------------------
  // STATO DELLE CANDIDATURE
  // Metti `aperte: false` quando il recruiting e' chiuso: la pagina mostra
  // automaticamente il messaggio di chiusura al posto del pulsante.
  // ---------------------------------------------------------------------------
  stato: {
    // Il sito passa automaticamente da "in apertura" ad "aperte" a questa data.
    // Impostare `chiuseManualmente: true` alla chiusura del recruiting.
    aperturaIso: "2026-09-14T00:00:00+02:00",
    chiuseManualmente: false,
    titoloSezione: "Application status",
    etichettaInArrivo: "Applications open on 14 September",
    etichettaAperte: "Applications open",
    etichettaChiuse: "Applications closed",
    testoInArrivo:
      "Recruiting opens on 14 September. The selection starts with a written test on 12 October, followed by an oral interview for candidates who pass it.",
    testoAperte:
      "Recruiting is open. The selection starts with a written test on 12 October, followed by an oral interview for candidates who pass it.",
    testoChiuse:
      "Applications are currently closed. Follow our social channels to hear about the next recruiting round.",
    cta: {
      testo: "Apply now",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSerlrSWv7ycqKrxaic_4tU0mHX6ANEEEv98-ioq30xWqMMa0A/viewform",
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
          "The first stage is a written test on 12 October. It allows us to assess your skills, motivation and potential.",
      },
      {
        titolo: "The interview",
        testo:
          "Candidates who pass the written test are invited to an oral interview with the heads of the department they applied for.",
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
      "Every season starts with students who are ready to learn, contribute and turn ideas into a working vehicle.",
    bottonePrimario: "Apply now",
    bottoneSecondario: "Discover the departments",
  },

  // ---------------------------------------------------------------------------
  // FAQ
  // ---------------------------------------------------------------------------
  faq: {
    titolo: "Frequently asked questions",
    sottotitolo: "Everything worth knowing before you apply.",
    voci: [
      {
        domanda: "Who can join the team?",
        risposta:
          "Any student currently enrolled at Politecnico di Milano can apply, regardless of their degree programme or year of study.",
      },
      {
        domanda: "Do I need previous experience?",
        risposta:
          "No previous experience is required. What matters most is curiosity, commitment and a willingness to learn and get involved. Relevant skills or previous experience are always welcome, but they are not essential.",
      },
      {
        domanda: "When does the next recruiting round open?",
        risposta:
          "Applications for the next recruiting round will open on 14 September. Stay tuned to our website and social media channels for further information.",
      },
      {
        domanda: "How does the selection process work?",
        risposta:
          "The selection process consists of a written test on 12 October and an oral interview with members of the team for candidates who pass the written test. It is an opportunity to get to know you and talk about your interests.",
      },
      {
        domanda: "How much time does the team require?",
        risposta:
          "The time commitment varies throughout the year depending on ongoing projects and deadlines. On average, members dedicate around two hours per week to team activities.",
      },
      {
        domanda: "When and where does the team work?",
        risposta:
          "Working hours depend on the department and the activities underway. Most activities take place in our office and mechanical workshop in Building B6, while some tasks can also be carried out independently from home.",
      },
    ],
  },
};
