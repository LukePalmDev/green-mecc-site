import React from 'react';
import { Mail, MapPin, Instagram, Facebook, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-stone-100 dark:bg-black text-stone-900 dark:text-white pt-20 pb-10 border-t border-stone-300 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Contact */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="font-display text-2xl font-bold mb-2">Contact Us</h3>
          <a href="mailto:sem-dmec@polimi.it" className="flex items-center space-x-3 text-stone-600 dark:text-gray-400 hover:text-emerald-900 transition-colors group">
            <div className="p-3 border border-stone-300 dark:border-white/10 rounded-full group-hover:border-emerald-900 transition-colors">
                <Mail size={20} />
            </div>
            <span>sem-dmec@polimi.it</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="font-display text-2xl font-bold mb-2">Location</h3>
          <a href="https://maps.app.goo.gl/mH2p1g7C5bVS8Lb66" target="_blank" rel="noreferrer" className="flex items-start space-x-3 text-stone-600 dark:text-gray-400 hover:text-emerald-900 transition-colors group">
            <div className="p-3 border border-stone-300 dark:border-white/10 rounded-full group-hover:border-emerald-900 transition-colors">
                <MapPin size={20} />
            </div>
            <span>
              Politecnico di Milano<br />
              Via Candiani 72,<br />
              20158, Milano, ITALY
            </span>
          </a>
        </div>

        {/* Social */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="font-display text-2xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/team_green_mecc/" target="_blank" rel="noreferrer" className="p-3 border border-stone-300 dark:border-white/10 rounded-full hover:border-emerald-900 hover:text-emerald-900 text-stone-600 dark:text-gray-400 transition-all transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/meccEpolimi/" target="_blank" rel="noreferrer" className="p-3 border border-stone-300 dark:border-white/10 rounded-full hover:border-emerald-900 hover:text-emerald-900 text-stone-600 dark:text-gray-400 transition-all transform hover:scale-110">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="font-display text-2xl font-bold mb-2">Theme</h3>
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-3 text-stone-600 dark:text-gray-400 hover:text-emerald-900 transition-colors group"
          >
            <div className="p-3 border border-stone-300 dark:border-white/10 rounded-full group-hover:border-emerald-900 transition-all transform group-hover:rotate-180 duration-500">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </div>
            <span className="font-medium">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-300 dark:border-white/10 flex flex-col md:flex-row justify-between items-center opacity-40">
        <p className="text-sm">© {new Date().getFullYear()} Team Green Mecc.</p>
        <p className="text-sm font-display font-bold">POLITECNICO DI MILANO</p>
      </div>
    </footer>
  );
};

export default Footer;
