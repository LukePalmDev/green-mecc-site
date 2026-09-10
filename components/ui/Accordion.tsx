import React, { useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export interface AccordionItem {
  domanda: string;
  risposta: string;
}

interface AccordionProps {
  voci: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ voci }) => {
  const [apertoIndex, setApertoIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="border-t border-stone-300 dark:border-white/10">
      {voci.map((voce, i) => {
        const isAperto = apertoIndex === i;
        const bottoneId = `${baseId}-btn-${i}`;
        const pannelloId = `${baseId}-panel-${i}`;

        return (
          <div key={i} className="border-b border-stone-300 dark:border-white/10">
            <h3>
              <button
                id={bottoneId}
                type="button"
                aria-expanded={isAperto}
                aria-controls={pannelloId}
                onClick={() => setApertoIndex(isAperto ? null : i)}
                className="w-full flex items-start gap-6 py-8 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-900 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black rounded-sm"
              >
                <span className="font-mono text-xs text-emerald-900 pt-2 tabular-nums flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 font-display font-bold text-xl md:text-2xl text-stone-900 dark:text-white group-hover:text-emerald-900 dark:group-hover:text-emerald-400 transition-colors">
                  {voce.domanda}
                </span>
                <motion.span
                  animate={{ rotate: isAperto ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-shrink-0 text-emerald-900 pt-1"
                >
                  <Plus size={24} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isAperto && (
                <motion.div
                  id={pannelloId}
                  role="region"
                  aria-labelledby={bottoneId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pl-12 pr-12 max-w-3xl text-stone-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed">
                    {voce.risposta}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
