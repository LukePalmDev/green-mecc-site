import React, { useRef } from 'react';
import { PARTNERS } from '../constants';
import { asset } from '../utils/asset';
import Transition from '../components/Transition';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <Transition>
    <div className="w-full bg-white dark:bg-stone-950 overflow-hidden transition-colors duration-300" ref={containerRef}>
      
      {/* --- HERO SECTION REDESIGN --- */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        
        {/* Background Grain/Noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none z-50 mix-blend-overlay"></div>

        {/* MASSIVE TEXT LAYER BEHIND */}
        <div className="relative z-10 flex flex-col items-center justify-center leading-none select-none -translate-y-[8vh]">
           <motion.h1
              style={{ y: yText }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="font-display font-black text-[12vw] md:text-[12vw] tracking-tighter text-emerald-900 dark:text-white "
           >
              GREEN
           </motion.h1>
           <motion.h1
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="font-display font-black text-[10vw] md:text-[10vw] tracking-tighter text-stone-900 dark:text-white -mt-[2vw] mix-blend-exclusion"
           >
              MECC
           </motion.h1>
        </div>

        {/* CENTRAL IMAGE - DANDELION / NATURE */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            style={{ y: yImage, scale: scaleImage }}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 0.8, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-[80vw] h-[80vh] md:w-[80vw] md:h-[70vh] relative"
          >
             {/* Using a dandelion/flower abstract image to match the vibe */}
             {/* Gradient overlays for smooth fade to background - Light mode */}
             <div className="absolute inset-0 z-10 dark:hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
               <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
               <div className="absolute inset-0" style={{
                 background: 'radial-gradient(ellipse at center, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.6) 70%, white 100%)'
               }} />
             </div>
             {/* Gradient overlays for smooth fade to background - Dark mode */}
             <div className="absolute inset-0 z-10 hidden dark:block">
               <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-stone-950/60" />
               <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 via-transparent to-stone-950/60" />
               <div className="absolute inset-0" style={{
                 background: 'radial-gradient(ellipse at center, transparent 0%, transparent 45%, rgba(12, 10, 9, 0.3) 70%, rgba(12, 10, 9, 0.7) 100%)'
               }} />
             </div>
             <img
              src={asset("img-sfondo.webp")}
              className="w-full h-full object-cover opacity-80 dark:opacity-60"
              alt="Green Mecc Background"
             />
          </motion.div>
        </div>

        {/* DASHED BOX OVERLAY LAYOUT */}
        <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
            {/* The Box - Rounded corners everywhere, text integrated on top border */}
            <motion.div
              initial={{ width: "40%", height: "40%", opacity: 0 }}
              animate={{ width: "85%", height: "80vh", opacity: 1 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="relative border border-dashed border-stone-900/30 dark:border-white/30 rounded-[32px] mt-[5vh]"
            >
                {/* Top Label - Integrated into the border line */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute -top-3 left-0 right-0 flex justify-center z-20"
                >
                  <span className="bg-white dark:bg-stone-950 px-6 text-emerald-900 font-mono text-xs md:text-sm uppercase font-bold whitespace-nowrap tracking-[0.4em]">
                    Politecnico di Milano
                  </span>
                </motion.div>

                {/* Description Text inside the box - Centered */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  className="absolute bottom-8 left-0 right-0 text-center px-8"
                >
                    <p className="text-stone-600 dark:text-gray-300 text-lg md:text-2xl font-light font-sans max-w-xl mx-auto">
                      The official team competing in the <span className="text-stone-900 dark:text-white font-bold relative inline-block">
                        Shell Eco-marathon
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 2.2, duration: 0.8, ease: "easeInOut" }}
                          className="absolute bottom-0 left-0 h-[2px] bg-emerald-900"
                        />
                      </span>
                    </p>
                </motion.div>
            </motion.div>
        </div>

        {/* Scroll Indicator - Bottom Right and Rotated */}
        <div className="absolute right-8 bottom-10 z-20 hidden md:block">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="flex items-center justify-center gap-3 text-stone-900/30 dark:text-white/30 rotate-90"
            >
                <motion.span
                    animate={{ x: [4, 14, 4] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-[10px] font-mono uppercase tracking-widest leading-none"
                >
                    Scroll
                </motion.span>
                <div className="-rotate-90 flex items-center justify-center">
                    <ArrowDown size={16} />
                </div>
            </motion.div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-20 border-y border-stone-300 dark:border-white/10 bg-stone-100 dark:bg-black/50 overflow-hidden relative transition-colors duration-300">
         <div className="absolute inset-0 bg-emerald-900/5 mix-blend-color-dodge"></div>
         <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-stone-600 dark:text-gray-500">Trusted Partners</span>
         </div>

         <div className="flex overflow-hidden group">
            <motion.div
               animate={{ x: ["0%", "-50%"] }}
               transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
               className="flex gap-20 items-center px-10 whitespace-nowrap"
            >
                {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                    <div key={index} className="relative w-40 h-20 flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                        <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                    </div>
                ))}
            </motion.div>
         </div>
      </section>

    </div>
    </Transition>
  );
};

export default Home;