import React from 'react';
import { Mail, MapPin, Instagram, Facebook, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { FOOTER_CONTENT } from '../content/layout';

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-stone-100 dark:bg-black text-stone-900 dark:text-white pt-20 pb-10 border-t border-stone-300 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Contact */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="font-display text-2xl font-bold mb-2">{FOOTER_CONTENT.contatti.titolo}</h3>
          <a href={`mailto:${FOOTER_CONTENT.contatti.email}`} className="flex items-center space-x-3 text-stone-600 dark:text-gray-400 hover:text-emerald-900 transition-colors group">
            <div className="p-3 border border-stone-300 dark:border-white/10 rounded-full group-hover:border-emerald-900 transition-colors">
                <Mail size={20} />
            </div>
            <span>{FOOTER_CONTENT.contatti.email}</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="font-display text-2xl font-bold mb-2">{FOOTER_CONTENT.sede.titolo}</h3>
          <a href={FOOTER_CONTENT.sede.linkMappa} target="_blank" rel="noreferrer" className="flex items-start space-x-3 text-stone-600 dark:text-gray-400 hover:text-emerald-900 transition-colors group">
            <div className="p-3 border border-stone-300 dark:border-white/10 rounded-full group-hover:border-emerald-900 transition-colors">
                <MapPin size={20} />
            </div>
            <span>
              {FOOTER_CONTENT.sede.righeIndirizzo.map((riga) => (
                <React.Fragment key={riga}>
                  {riga}<br />
                </React.Fragment>
              ))}
            </span>
          </a>
        </div>

        {/* Social */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="font-display text-2xl font-bold mb-2">{FOOTER_CONTENT.social.titolo}</h3>
          <div className="flex space-x-4">
            <a href={FOOTER_CONTENT.social.instagram} target="_blank" rel="noreferrer" className="p-3 border border-stone-300 dark:border-white/10 rounded-full hover:border-emerald-900 hover:text-emerald-900 text-stone-600 dark:text-gray-400 transition-all transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href={FOOTER_CONTENT.social.facebook} target="_blank" rel="noreferrer" className="p-3 border border-stone-300 dark:border-white/10 rounded-full hover:border-emerald-900 hover:text-emerald-900 text-stone-600 dark:text-gray-400 transition-all transform hover:scale-110">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="font-display text-2xl font-bold mb-2">{FOOTER_CONTENT.tema.titolo}</h3>
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-3 text-stone-600 dark:text-gray-400 hover:text-emerald-900 transition-colors group"
          >
            <div className="p-3 border border-stone-300 dark:border-white/10 rounded-full group-hover:border-emerald-900 transition-all transform group-hover:rotate-180 duration-500">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </div>
            <span className="font-medium">
              {theme === 'dark' ? FOOTER_CONTENT.tema.testoModalitaChiara : FOOTER_CONTENT.tema.testoModalitaScura}
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-300 dark:border-white/10 flex flex-col md:flex-row justify-between items-center opacity-40">
        <p className="text-sm">© {new Date().getFullYear()} {FOOTER_CONTENT.copyrightNome}</p>
        <p className="text-sm font-display font-bold">{FOOTER_CONTENT.istituzione}</p>
      </div>
    </footer>
  );
};

export default Footer;
