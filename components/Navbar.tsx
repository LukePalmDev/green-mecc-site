import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVBAR_CONTENT } from '../content/layout';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed w-full z-50 top-2 md:top-6 px-4 md:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
          <div className="pointer-events-auto bg-white/80 dark:bg-black/20 backdrop-blur-md border border-stone-300 dark:border-white/10 px-6 py-3 rounded-full transition-colors duration-300">
            <NavLink to="/" className="font-display font-bold text-xl tracking-tighter text-stone-900 dark:text-white hover:text-emerald-900 transition-colors">
              {NAVBAR_CONTENT.nomeSito}
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block pointer-events-auto bg-white/80 dark:bg-black/20 backdrop-blur-md border border-stone-300 dark:border-white/10 px-8 py-3 rounded-full transition-colors duration-300">
            <div className="flex items-baseline space-x-10">
              {NAVBAR_CONTENT.vociMenu.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 ${
                      isActive ? 'text-emerald-900' : 'text-black-400 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div 
                          layoutId="nav-dot"
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-900 rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pointer-events-auto">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-full bg-white/80 dark:bg-black/20 backdrop-blur-md border border-stone-300 dark:border-white/10 text-stone-900 dark:text-white hover:text-emerald-900 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-white dark:bg-stone-950 flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8 px-6">
              {NAVBAR_CONTENT.vociMenu.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-display font-black text-4xl md:text-7xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-stone-900 to-stone-500 dark:from-white dark:to-gray-500 hover:to-emerald-900 transition-all whitespace-nowrap"
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
