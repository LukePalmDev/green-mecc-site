import React from 'react';
import { PROJECTS_CONTENT, VEHICLES } from '../content/projects';
import { Reveal } from '../components/ui/Reveal';
import Transition from '../components/Transition';

const Projects: React.FC = () => {
  return (
    <Transition>
    <div className="bg-stone-50 dark:bg-stone-900 min-h-screen pt-32 pb-20 text-stone-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <Reveal width="100%">
            <h1 className="font-display font-black text-5xl md:text-7xl mb-4">{PROJECTS_CONTENT.titolo}</h1>
          </Reveal>
          <div className="h-2 w-24 bg-emerald-900 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative md:border-l-2 md:border-stone-300 md:dark:border-white/10 md:ml-0 space-y-24">
          {VEHICLES.map((car, index) => (
            <div key={car.id} className="relative md:pl-0">
              {/* Dot on timeline */}
              <div className="hidden md:block absolute left-[-9px] top-0 w-6 h-6 rounded-full bg-stone-50 dark:bg-stone-900 border-4 border-emerald-900 z-10"></div>

              <div className="md:grid md:grid-cols-5 md:gap-8 group">
                {/* Year — colonna sinistra */}
                <div className="hidden md:block md:col-span-1 text-right pt-1 pr-8">
                  <span className="text-4xl font-display font-bold text-stone-900/20 dark:text-white/20 group-hover:text-emerald-900 transition-colors">
                    {car.year}
                  </span>
                </div>

                {/* Card Content — colonna destra */}
                <div className="md:col-span-4 bg-stone-100 dark:bg-white/5 rounded-2xl overflow-hidden hover:bg-stone-200 dark:hover:bg-white/10 transition-colors border border-stone-300 dark:border-white/5">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    {/* Anno visibile solo su mobile */}
                    <div className="md:hidden mb-4">
                      <span className="text-3xl font-display font-bold text-emerald-900">{car.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-6">{car.name.toUpperCase()}</h3>
                    <ul className="space-y-3 text-stone-600 dark:text-gray-400 text-sm">
                      {car.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-900 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    </Transition>
  );
};

export default Projects;
