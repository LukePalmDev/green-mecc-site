import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Results from './pages/Results';
import TeamGroup from './pages/TeamGroup';
import Sponsors from './pages/Sponsors';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Component to force scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Multiple approaches to ensure scroll reset works with Lenis
    // 1. Immediate reset
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 2. Delayed reset to ensure Lenis catches up
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);
  return null;
};

// Smooth Scrolling Manager
const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
    return null;
}

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-0 top-0 w-[3px] h-screen z-[150] pointer-events-none">
      <div className="w-full h-full bg-stone-200/30 dark:bg-white/10" />
      <motion.div
        className="absolute top-0 left-0 w-full bg-emerald-900"
        style={{ height: `${progress * 100}%` }}
        transition={{ type: 'tween', duration: 0 }}
      />
    </div>
  );
};

// Animated Routes Wrapper
const AnimatedRoutes = () => {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/team/:groupId" element={<TeamGroup />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/results" element={<Results />} />
                <Route path="/sponsors" element={<Sponsors />} />
            </Routes>
        </AnimatePresence>
    );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <SmoothScroll />
        <ScrollProgress />
        <div className="font-sans antialiased text-stone-900 dark:text-gray-100 bg-white dark:bg-stone-950 min-h-screen flex flex-col selection:bg-emerald-900 selection:text-white transition-colors duration-300">
          <Navbar />
          <main className="flex-grow relative">
              <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;