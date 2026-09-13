import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import Transition from '../components/Transition';
import { JOINUS_CONTENT } from '../content/C4-JOIN-US';
import { getRecruitingState } from '../utils/recruiting';

const ApplicationsClosed: React.FC = () => {
  const { stato } = JOINUS_CONTENT;
  const recruiting = getRecruitingState(stato);

  useEffect(() => {
    if (stato.chiuseManualmente || !recruiting.hasApplicationForm) {
      return;
    }

    const redirectToForm = () => window.location.replace(stato.cta.url);
    const delay = recruiting.openingTime - Date.now();

    if (delay <= 0) {
      redirectToForm();
      return;
    }

    const timeout = window.setTimeout(redirectToForm, delay);
    return () => window.clearTimeout(timeout);
  }, [recruiting.hasApplicationForm, recruiting.openingTime, stato.chiuseManualmente, stato.cta.url]);

  const message = recruiting.isUpcoming
    ? stato.paginaChiusa.testoInArrivo
    : stato.paginaChiusa.testoChiuse;

  return (
    <Transition>
      <div className="bg-white dark:bg-black min-h-screen text-stone-900 dark:text-white pt-32 pb-20 transition-colors duration-300">
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-28">
          <div className="border border-stone-300 dark:border-white/10 rounded-3xl p-8 md:p-14 bg-stone-50 dark:bg-white/[0.02]">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-emerald-900 mb-8">
              <CalendarDays size={18} aria-hidden="true" />
              Application status
            </div>

            <h1 className="font-display font-black text-2xl sm:text-5xl md:text-6xl leading-[0.9] mb-8">
              {stato.paginaChiusa.titolo}
            </h1>

            <p className="text-stone-600 dark:text-gray-300 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mb-6">
              {message}
            </p>

            {recruiting.isUpcoming && (
              <p className="text-stone-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
                {stato.paginaChiusa.notaInArrivo}
              </p>
            )}

            <Link
              to="/join-us"
              className="group inline-flex items-center gap-3 border border-emerald-900 text-emerald-900 px-7 py-4 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-emerald-900 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              {stato.paginaChiusa.bottoneIndietro}
            </Link>
          </div>
        </section>
      </div>
    </Transition>
  );
};

export default ApplicationsClosed;
