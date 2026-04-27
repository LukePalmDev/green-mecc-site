import React from 'react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS_INFO } from '../constants';
import { Reveal } from '../components/ui/Reveal';
import Transition from '../components/Transition';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Transition>
    <div className="bg-white dark:bg-black min-h-screen text-stone-900 dark:text-white pt-32 pb-20 transition-colors duration-300 overflow-x-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <Reveal>
          <h1 className="font-display font-black text-6xl md:text-9xl text-stone-900 dark:text-white mb-2">ABOUT</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl text-emerald-900 font-mono border-l-4 border-emerald-900 pl-4 max-w-xl">
            We are a multidisciplinary group of students from Politecnico di Milano, united by the passion for innovation and sustainability.
          </p>
        </Reveal>
      </div>

      {/* --- OUR MISSION SECTION --- */}
      <section className="py-32 relative bg-stone-50 dark:bg-stone-950 z-20 transition-colors duration-300 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-end mb-20 border-b border-stone-300 dark:border-white/10 pb-12">
              <h2 className="font-display text-5xl md:text-7xl font-bold text-stone-900 dark:text-white leading-[0.9]">
                OUR<br/><span className="text-emerald-900">MISSION</span>
              </h2>
              <p className="text-stone-600 dark:text-gray-400 text-lg max-w-md pb-2 font-mono">
                Engineering the future of sustainable mobility through student-driven innovation.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Collaborative Platform", text: "Achieving practical experience in maximizing energy efficiency through shared knowledge." },
              { num: "02", title: "Student Driven", text: "Students manage the entire development process, from concept design to on-track testing." },
              { num: "03", title: "Since 2005", text: "A legacy of mechanical engineering excellence supporting high efficiency vehicle research." }
            ].map((card, i) => (
              <Reveal key={i} delay={0.2 * i}>
                <div className="group relative p-8 border-l border-stone-300 dark:border-white/10 hover:border-emerald-900 hover:bg-stone-100 dark:hover:bg-white/[0.02] transition-colors duration-500 h-full">
                  <span className="text-emerald-900 font-mono text-xs mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">/{card.num}</span>
                  <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-white mb-4">{card.title}</h3>
                  <p className="text-stone-600 dark:text-gray-400 leading-relaxed text-sm">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7 GROUPS — stile Projects --- */}
      <div className="flex flex-col gap-32">
        {DEPARTMENTS_INFO.map((dept, index) => (
          <section key={dept.id} className="relative w-full">
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
                  <img
                    src="/img-sfondo.webp"
                    alt={dept.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Text Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} max-w-full`}>
                <Reveal width="100%">
                  <Link
                    to={`/about/${dept.id}`}
                    className="group/link flex items-start gap-3 mb-6 w-full min-w-0"
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-stone-900 to-stone-600 dark:from-white dark:to-gray-600 group-hover/link:from-emerald-900 group-hover/link:to-emerald-700 leading-none pb-2 transition-all duration-300 min-w-0">
                      {dept.title.toUpperCase()}
                    </h2>
                    <ArrowUpRight
                      className="text-stone-400 dark:text-gray-600 group-hover/link:text-emerald-900 transition-colors mt-2 flex-shrink-0"
                      size={28}
                    />
                  </Link>
                </Reveal>

                <ul className="space-y-3 text-stone-600 dark:text-gray-300 text-sm sm:text-base md:text-lg font-light">
                  <Reveal delay={0.1}>
                    <li className="flex items-start gap-3 w-full">
                      <span className="mt-2 w-2 h-2 rounded-full bg-emerald-900 flex-shrink-0" />
                      <span className="break-words flex-1 leading-relaxed text-left">{dept.description}</span>
                    </li>
                  </Reveal>
                </ul>
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
    </div>
    </Transition>
  );
};

export default About;
