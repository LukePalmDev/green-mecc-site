import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { JOINUS_CONTENT } from '../content/C4-JOIN-US';
import { DEPARTMENTS_INFO } from '../content/C3-TEAM';
import { Reveal } from '../components/ui/Reveal';
import { Accordion } from '../components/ui/Accordion';
import Transition from '../components/Transition';

const JoinUs: React.FC = () => {
  const { titolo, occhiello, intro, stato, fasi, reparti, ctaFinale, faq } = JOINUS_CONTENT;

  const candidatureAperte =
    !stato.chiuseManualmente && Date.now() >= Date.parse(stato.aperturaIso);
  const candidatureInArrivo =
    !stato.chiuseManualmente && !candidatureAperte;
  const linkCandidaturaPronto = stato.cta.url.trim() !== '' && stato.cta.url.trim() !== '#';
  const mostraCta = candidatureAperte && linkCandidaturaPronto;
  const etichettaStato = candidatureInArrivo
    ? stato.etichettaInArrivo
    : candidatureAperte
      ? stato.etichettaAperte
      : stato.etichettaChiuse;
  const testoStato = candidatureInArrivo
    ? stato.testoInArrivo
    : candidatureAperte
      ? stato.testoAperte
      : stato.testoChiuse;

  return (
    <Transition>
      <div className="bg-white dark:bg-black min-h-screen text-stone-900 dark:text-white pt-32 pb-20 transition-colors duration-300 overflow-x-hidden">

        {/* --- HEADER --- */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <Reveal>
            <h1 className="font-display font-black text-6xl md:text-9xl text-stone-900 dark:text-white mb-2">
              {titolo}
            </h1>
          </Reveal>
          <p className="text-xl text-emerald-900 font-mono border-l-4 border-emerald-900 pl-4 max-w-xl">
            {occhiello}
          </p>
        </div>

        {/* --- INTRO --- */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-3xl space-y-6 text-stone-600 dark:text-gray-300 text-base md:text-lg font-light leading-relaxed">
            {intro.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>
        </section>

        {/* --- STATO CANDIDATURE --- */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="border border-stone-300 dark:border-white/10 rounded-3xl p-8 md:p-12 bg-stone-50 dark:bg-white/[0.02] transition-colors duration-300">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-gray-500 block mb-6">
              {stato.titoloSezione}
            </span>

            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div className="flex-1">
                {/* Pallino di stato: verde pieno se aperte, grigio se chiuse */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    {candidatureAperte && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-900 opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${
                        candidatureAperte ? 'bg-emerald-900' : 'bg-stone-400 dark:bg-gray-600'
                      }`}
                    />
                  </span>
                  <span className="font-display font-bold text-2xl md:text-3xl">
                    {etichettaStato}
                  </span>
                </div>
                <p className="text-stone-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                  {testoStato}
                </p>
              </div>

              {mostraCta && (
                <div className="flex-shrink-0">
                  <a
                    href={stato.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-emerald-900 text-white px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-emerald-800 transition-colors"
                  >
                    {stato.cta.testo}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* --- COME FUNZIONA: timeline, stesso linguaggio di Projects e Results --- */}
        <section className="bg-stone-50 dark:bg-stone-950 py-32 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-20">
              <h2 className="font-display font-black text-4xl md:text-6xl text-stone-900 dark:text-white mb-4">
                {fasi.titolo}
              </h2>
              <p className="text-stone-600 dark:text-gray-400 font-mono text-sm md:text-base">
                {fasi.sottotitolo}
              </p>
            </div>

            <div className="relative md:border-l-2 md:border-stone-300 md:dark:border-white/10 space-y-20">
              {fasi.tappe.map((tappa, index) => (
                <div key={index} className="relative">
                  {/* Pallino sulla timeline */}
                  <div className="hidden md:block absolute left-[-9px] top-0 w-6 h-6 rounded-full bg-stone-50 dark:bg-stone-950 border-4 border-emerald-900 z-10" />

                  <div className="md:grid md:grid-cols-6 md:gap-8 group">
                    {/* Numero fase */}
                    <div className="hidden md:block md:col-span-1 text-right pt-0 pr-8">
                      <span className="text-4xl font-display font-bold text-stone-900/20 dark:text-white/20 group-hover:text-emerald-900 transition-colors tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="md:col-span-5">
                      <div className="md:hidden mb-3">
                        <span className="text-3xl font-display font-bold text-emerald-900 tabular-nums">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                        {tappa.titolo}
                      </h3>
                      <p className="text-stone-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed">
                        {tappa.testo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- REPARTI: riusa i dati e le icone gia' presenti in team.ts --- */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="mb-16">
            <h2 className="font-display font-black text-4xl md:text-6xl text-stone-900 dark:text-white mb-4">
              {reparti.titolo}
            </h2>
            <p className="text-stone-600 dark:text-gray-400 font-mono text-sm md:text-base max-w-xl">
              {reparti.sottotitolo}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {DEPARTMENTS_INFO.map((dept) => (
              <Link
                key={dept.id}
                to={`/team/${dept.id}`}
                className="group relative flex flex-col items-start gap-6 p-6 md:p-8 rounded-2xl border border-stone-200 dark:border-white/10 hover:border-emerald-900/40 hover:bg-stone-50 dark:hover:bg-white/[0.03] transition-all duration-300"
              >
                <img
                  src={dept.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain dark:brightness-[1.8] group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-display font-bold text-base md:text-lg leading-tight text-stone-900 dark:text-white group-hover:text-emerald-900 dark:group-hover:text-emerald-400 transition-colors">
                  {dept.title}
                </span>
                <ArrowUpRight
                  size={18}
                  className="absolute top-6 right-6 text-stone-300 dark:text-gray-700 group-hover:text-emerald-900 transition-colors"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* --- CTA FINALE --- */}
        <section className="bg-emerald-900 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-display font-black text-4xl md:text-7xl mb-6">
              {ctaFinale.titolo}
            </h2>
            <p className="text-white/70 text-base md:text-lg font-light max-w-2xl mx-auto mb-12">
              {ctaFinale.testo}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {mostraCta && (
                <a
                  href={stato.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-stone-100 transition-colors"
                >
                  {ctaFinale.bottonePrimario}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              <Link
                to="/team"
                className="group inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white transition-colors"
              >
                {ctaFinale.bottoneSecondario}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="mb-16">
            <h2 className="font-display font-black text-4xl md:text-6xl text-stone-900 dark:text-white mb-4">
              {faq.titolo}
            </h2>
            <p className="text-stone-600 dark:text-gray-400 font-mono text-sm md:text-base">
              {faq.sottotitolo}
            </p>
          </div>
          <Accordion voci={faq.voci} />
        </section>

      </div>
    </Transition>
  );
};

export default JoinUs;
