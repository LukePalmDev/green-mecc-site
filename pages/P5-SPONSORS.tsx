import React from 'react';
import { PARTNERS, SPONSORS_CONTENT } from '../content/C5-SPONSORS';
import { Reveal } from '../components/ui/Reveal';
import Transition from '../components/Transition';

const Sponsors: React.FC = () => {
  return (
    <Transition>
    <div className="bg-white dark:bg-black min-h-screen text-stone-900 dark:text-white pt-32 pb-20 transition-colors duration-300 overflow-x-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <Reveal>
          <h1 className="font-display font-black text-6xl md:text-9xl text-stone-900 dark:text-white mb-2">{SPONSORS_CONTENT.titolo}</h1>
        </Reveal>
        <p className="text-xl text-emerald-900 font-mono border-l-4 border-emerald-900 pl-4 max-w-xl">
          {SPONSORS_CONTENT.descrizione}
        </p>
      </div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {PARTNERS.map((partner) => {
            const cardClassName = `group flex items-center justify-center p-8 rounded-2xl border hover:border-emerald-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 aspect-square ${
              partner.surface === 'dark'
                ? 'bg-stone-900 border-stone-700'
                : 'bg-white border-stone-200'
            }`;
            const logo = (
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            );

            return partner.url ? (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} — sito ufficiale`}
                className={cardClassName}
              >
                {logo}
              </a>
            ) : (
              <div key={partner.name} className={cardClassName}>
                {logo}
              </div>
            );
          })}
        </div>
      </div>

    </div>
    </Transition>
  );
};

export default Sponsors;
