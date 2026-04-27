import React from 'react';
import { motion } from 'framer-motion';

const Transition = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      
      {/* Slide Out Panel (Green) - Exits when page loads */}
      <motion.div
        className="slide-in fixed top-0 left-0 w-full h-screen bg-emerald-900 origin-bottom z-[100]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Slide In Panel (Green) - Enters when page loads */}
      <motion.div
        className="slide-out fixed top-0 left-0 w-full h-screen bg-emerald-900 origin-top z-[100]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Secondary Layer (Black) for depth */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-stone-950 origin-top z-[90]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;