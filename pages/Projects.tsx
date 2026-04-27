import React from 'react';
import { VEHICLES } from '../constants';
import { Reveal } from '../components/ui/Reveal';
import Transition from '../components/Transition';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <Transition>
    <div className="bg-white dark:bg-black min-h-screen text-stone-900 dark:text-white pt-32 pb-20 transition-colors duration-300 overflow-x-hidden">

        <div className="max-w-7xl mx-auto px-6 mb-20">
            <Reveal>
                <h1 className="font-display font-black text-6xl md:text-9xl text-stone-900 dark:text-white mb-2">PROJECT</h1>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="text-xl text-emerald-900 font-mono border-l-4 border-emerald-900 pl-4 max-w-xl">
                    Named after deities of Greek mythology, our vehicles represent the evolution of sustainable engineering.
                </p>
            </Reveal>
        </div>

        <div className="flex flex-col gap-32">
            {VEHICLES.map((car, index) => (
                <section key={car.id} className="relative w-full">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            {...(index === 0
                                ? { animate: { opacity: 1, y: 0 } }
                                : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 } }
                            )}
                            transition={{ duration: 0.8, delay: index === 0 ? 0.3 : 0 }}
                            className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-stone-300 dark:border-white/10 shadow-2xl shadow-green-900/20">
                                <img src={car.image} alt={car.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-emerald-900 text-white font-bold px-4 py-1 rounded-full text-sm">
                                    {car.year}
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} max-w-full`}>
                            <Reveal width="100%">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-stone-900 to-stone-600 dark:from-white dark:to-gray-600 mb-6 md:whitespace-nowrap leading-tight max-w-full text-left">
                                    {car.name.toUpperCase()}
                                </h2>
                            </Reveal>

                            <ul className="space-y-3 text-stone-600 dark:text-gray-300 text-sm sm:text-base md:text-lg font-light">
                                {car.description.map((desc, i) => (
                                    <Reveal key={i} delay={i * 0.1}>
                                        <li className="flex items-start gap-3 w-full">
                                            <span className="mt-2 w-2 h-2 rounded-full bg-emerald-900 flex-shrink-0" />
                                            <span className="break-words flex-1 leading-relaxed text-left">{desc}</span>
                                        </li>
                                    </Reveal>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Background Decorative Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full overflow-hidden select-none pointer-events-none">
                         <h3 className="text-[20vw] font-display font-black text-stone-900/5 dark:text-white/5 whitespace-nowrap text-center">
                             {car.year}
                         </h3>
                    </div>
                </section>
            ))}
        </div>
    </div>
    </Transition>
  );
};

export default Projects;