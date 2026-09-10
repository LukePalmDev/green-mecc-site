import React from 'react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS_INFO, TEAM_CONTENT } from '../content/C3-TEAM';
import { Reveal } from '../components/ui/Reveal';
import Transition from '../components/Transition';
import { ArrowUpRight } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <Transition>
    <div className="bg-white dark:bg-black min-h-screen text-stone-900 dark:text-white pt-32 pb-20 transition-colors duration-300 overflow-x-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <Reveal>
          <h1 className="font-display font-black text-6xl md:text-9xl text-stone-900 dark:text-white mb-2">{TEAM_CONTENT.titolo}</h1>
        </Reveal>
        <p className="text-xl text-emerald-900 font-mono border-l-4 border-emerald-900 pl-4 max-w-xl">
          {TEAM_CONTENT.descrizione}
        </p>
      </div>

      {/* --- REPARTI --- */}
      <div className="flex flex-col gap-32">
        {DEPARTMENTS_INFO.map((dept, index) => (
          <section key={dept.id} className="relative w-full">
            <div className="max-w-7xl mx-auto px-6">

              {/* Title - full width */}
              <div className="mb-8">
                <Link
                  to={`/team/${dept.id}`}
                  className="group/link flex items-start gap-3 w-full min-w-0"
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-stone-900 to-stone-600 dark:from-white dark:to-gray-600 group-hover/link:from-emerald-900 group-hover/link:to-emerald-700 leading-tight py-1 transition-all duration-300 min-w-0">
                    {dept.title.toUpperCase()}
                  </h2>
                  <ArrowUpRight
                    className="text-stone-400 dark:text-gray-600 group-hover/link:text-emerald-900 transition-colors mt-2 flex-shrink-0"
                    size={28}
                  />
                </Link>
              </div>

              {/* Content: text left, image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <ul className="space-y-3 text-stone-600 dark:text-gray-300 text-sm sm:text-base md:text-lg font-light">
                  {dept.description.map((paragrafo, i) => (
                    <li key={i} className="flex items-start gap-3 w-full">
                      <span className="mt-2 w-2 h-2 rounded-full bg-emerald-900 flex-shrink-0" />
                      <span className="break-words flex-1 leading-relaxed text-left">{paragrafo}</span>
                    </li>
                  ))}
                </ul>

                {/* Image Side */}
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-stone-300 dark:border-white/10 shadow-2xl shadow-green-900/20">
                  <img
                    src={dept.image}
                    alt={dept.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      dept.coverNeedsZoom
                        ? 'scale-[1.6] hover:scale-[1.7]'
                        : 'hover:scale-105'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Background Decorative Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full overflow-hidden select-none pointer-events-none">
              <h3 className="text-[20vw] font-display font-black text-stone-900/5 dark:text-white/5 whitespace-nowrap text-center">
                {String(index + 1).padStart(2, '0')}
              </h3>
            </div>
          </section>
        ))}
      </div>

      {/* --- ALBO --- */}
      <section className="mt-32 relative w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-stone-900 to-stone-600 dark:from-white dark:to-gray-600 leading-tight py-1">
              {TEAM_CONTENT.albo.titolo}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div className="text-stone-600 dark:text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              <p>
                {TEAM_CONTENT.albo.testo}
              </p>
            </div>

            {/* Image Side */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-stone-300 dark:border-white/10 shadow-2xl shadow-green-900/20">
              <img
                src={TEAM_CONTENT.albo.immagine}
                alt={TEAM_CONTENT.albo.testoAlternativoImmagine}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- RIMANDO A JOIN US (la sezione completa vive ora in /join-us) --- */}
      <section className="mt-32 relative w-full bg-stone-50 dark:bg-stone-950 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/join-us" className="group/cta block">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-stone-900 to-stone-600 dark:from-white dark:to-gray-600 group-hover/cta:from-emerald-900 group-hover/cta:to-emerald-700 leading-tight py-1 transition-all duration-300">
                  {TEAM_CONTENT.rimandoJoinUs.titolo}
                </h2>
                <p className="text-stone-600 dark:text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mt-4">
                  {TEAM_CONTENT.rimandoJoinUs.testo}
                </p>
              </div>
              <span className="inline-flex items-center gap-3 text-emerald-900 font-mono text-sm uppercase tracking-widest flex-shrink-0 group-hover/cta:gap-5 transition-all duration-300">
                {TEAM_CONTENT.rimandoJoinUs.link}
                <ArrowUpRight size={20} />
              </span>
            </div>
          </Link>
        </div>
      </section>

    </div>
    </Transition>
  );
};

export default Team;
