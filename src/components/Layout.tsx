import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import clsx from 'clsx';

import profilePic from '../assets/image_1.png';

export default function Layout() {
  const { i18n } = useTranslation();

  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm text-primary-dark transition-all">
        <div className="max-w-7xl mx-auto px-6 h-40 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-6 font-serif text-3xl tracking-tight font-semibold drop-shadow-md">
            <img src={profilePic} alt="Salah Abdennebi" className="w-32 h-32 rounded-full object-cover shadow-md" />
            Salah Abdennebi
          </Link>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                <Globe size={20} />
                <span className="text-sm font-medium uppercase">{i18n.language}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-black/80 backdrop-blur-md shadow-xl border border-white/10 rounded">
                  {['en', 'fr', 'es'].map(lang => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={clsx(
                        "block w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition-colors",
                        i18n.language === lang && "font-bold text-white"
                      )}
                    >
                      {lang === 'en' ? 'English' : lang === 'fr' ? 'Français' : 'Español'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity text-sm font-medium uppercase tracking-wider">
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Salah Abdennebi. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
