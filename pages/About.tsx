import React from 'react';
import { Reveal } from '../components/ui/Reveal';
import Transition from '../components/Transition';

const About: React.FC = () => {
  return (
    <Transition>
    <div className="bg-white dark:bg-black min-h-screen text-stone-900 dark:text-white pt-32 pb-20 transition-colors duration-300 overflow-x-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <Reveal>
          <h1 className="font-display font-black text-6xl md:text-9xl text-stone-900 dark:text-white mb-2">ABOUT</h1>
        </Reveal>
        <p className="text-xl text-emerald-900 font-mono border-l-4 border-emerald-900 pl-4 max-w-xl">
          We are a multidisciplinary group of students from Politecnico di Milano, united by the passion for innovation and sustainability.
        </p>
      </div>

      {/* --- OUR MISSION SECTION --- */}
      <section className="py-32 relative bg-stone-50 dark:bg-stone-950 z-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-end mb-20 border-b border-stone-300 dark:border-white/10 pb-12">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-stone-900 dark:text-white leading-[0.9]">
              OUR<br/><span className="text-emerald-900">MISSION</span>
            </h2>
            <p className="text-stone-600 dark:text-gray-400 text-lg max-w-md pb-2 font-mono">
              Engineering the future of sustainable mobility through student-driven innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Collaborative Platform", text: "Achieving practical experience in maximizing energy efficiency through shared knowledge." },
              { num: "02", title: "Student Driven", text: "Students manage the entire development process, from concept design to on-track testing." },
              { num: "03", title: "Since 2005", text: "A legacy of mechanical engineering excellence supporting high efficiency vehicle research." }
            ].map((card, i) => (
              <div key={i} className="group relative p-8 border-l border-stone-300 dark:border-white/10 hover:border-emerald-900 hover:bg-stone-100 dark:hover:bg-white/[0.02] transition-colors duration-500 h-full">
                <span className="text-emerald-900 font-mono text-xs mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">/{card.num}</span>
                <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-white mb-4">{card.title}</h3>
                <p className="text-stone-600 dark:text-gray-400 leading-relaxed text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    </Transition>
  );
};

export default About;
