import React from 'react';
import { PARTNERS } from '../constants';
import { Reveal } from '../components/ui/Reveal';
import Transition from '../components/Transition';

const Sponsors: React.FC = () => {
  return (
    <Transition>
    <div className="bg-white dark:bg-black min-h-screen text-stone-900 dark:text-white pt-32 pb-20 transition-colors duration-300 overflow-x-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <Reveal>
          <h1 className="font-display font-black text-6xl md:text-9xl text-stone-900 dark:text-white mb-2">SPONSORS</h1>
        </Reveal>
        <p className="text-xl text-emerald-900 font-mono border-l-4 border-emerald-900 pl-4 max-w-xl">
          The partners and institutions that make our mission possible, supporting the innovation and research of Green Mecc.
        </p>
      </div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {PARTNERS.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-8 rounded-2xl border border-stone-200 dark:border-white/10 hover:border-emerald-900/40 hover:bg-stone-50 dark:hover:bg-white/[0.03] transition-all duration-300 aspect-square"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </div>

    </div>
    </Transition>
  );
};

export default Sponsors;
