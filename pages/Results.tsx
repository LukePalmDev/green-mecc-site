import React from 'react';
import { RESULTS } from '../constants';
import { Reveal } from '../components/ui/Reveal';
import Transition from '../components/Transition';
import { motion } from 'framer-motion';
import { Trophy, MapPin, Car } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <Transition>
    <div className="bg-stone-50 dark:bg-stone-900 min-h-screen pt-32 pb-20 text-stone-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
            <Reveal width="100%">
                <h1 className="font-display font-black text-5xl md:text-7xl mb-4">RESULT</h1>
                <div className="h-2 w-24 bg-emerald-900 mx-auto"></div>
            </Reveal>
        </div>

        <div className="relative md:border-l-2 md:border-stone-300 md:dark:border-white/10 md:ml-0 space-y-24">
            {RESULTS.map((res, index) => (
                <div key={index} className="relative md:pl-0">
                    {/* Dot on timeline */}
                    <div className="hidden md:block absolute left-[-9px] top-0 w-6 h-6 rounded-full bg-stone-50 dark:bg-stone-900 border-4 border-emerald-900 z-10"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        {...(index === 0
                            ? { animate: { opacity: 1, y: 0 } }
                            : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
                        )}
                        transition={{ duration: 0.5, delay: index === 0 ? 0.3 : 0 }}
                        className="md:grid md:grid-cols-5 md:gap-8 group"
                    >
                        {/* Year - visible on desktop left side */}
                        <div className="hidden md:block md:col-span-1 text-right pt-1 pr-8">
                            <span className="text-4xl font-display font-bold text-stone-900/20 dark:text-white/20 group-hover:text-emerald-900 transition-colors">{res.year}</span>
                        </div>

                        {/* Card Content */}
                        <div className="md:col-span-4 bg-stone-100 dark:bg-white/5 rounded-2xl overflow-hidden hover:bg-stone-200 dark:hover:bg-white/10 transition-colors border border-stone-300 dark:border-white/5">
                            <div className="aspect-video w-full overflow-hidden">
                                <img src={res.image} alt={res.competition} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <div className="md:hidden mb-4">
                                     <span className="text-3xl font-display font-bold text-emerald-900">{res.year}</span>
                                </div>
                                <h3 className="text-2xl font-bold font-display mb-2">{res.competition}</h3>
                                <div className="space-y-3 text-stone-600 dark:text-gray-400 text-sm mb-6">
                                    <div className="flex items-center gap-3">
                                        <MapPin size={16} className="text-emerald-900" />
                                        <span>{res.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Car size={16} className="text-emerald-900" />
                                        <span>{res.vehicle} <span className="text-stone-900/30 dark:text-white/30 px-2">|</span> {res.category}</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-3 bg-emerald-900/10 text-emerald-900 px-4 py-2 rounded-lg border border-emerald-900/20">
                                    <Trophy size={20} />
                                    <span className="font-bold">{res.result}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
      </div>
    </div>
    </Transition>
  );
};

export default Results;