import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import clsx from 'clsx';

import profilePic from '../assets/image_1.png';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans text-primary-dark">

      {/* Floating Logo Removed */}

      {/* Vertical Menu Button (Visible when sidebar is closed) */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full z-40 transition-all duration-500",
          isSidebarOpen ? "-translate-x-full opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
        )}
      >
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="h-full flex items-center justify-center px-3 md:px-5 bg-white/70 backdrop-blur-md shadow-sm hover:bg-white transition-colors border-r border-gray-200"
        >
          <span 
            className="uppercase tracking-widest text-sm font-medium text-primary-dark"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Menu
          </span>
        </button>
      </div>

      {/* Off-canvas Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 h-full w-full md:w-[450px] bg-white z-50 shadow-2xl flex flex-col justify-between p-12 transition-transform duration-500 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-1/2 -right-6 md:-right-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Sidebar Top: Logo */}
        <div className="pt-4 pb-8">
          <Link
            to="/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex flex-col gap-6"
          >
            <img src={profilePic} alt="Salah Abdennebi" className="w-32 h-32 rounded-full object-cover shadow-lg" />
            <span className="font-serif text-4xl tracking-tight font-semibold text-primary-dark">
              Salah Abdennebi
            </span>
          </Link>
        </div>

        {/* Sidebar Middle: Navigation Links */}
        <nav className="flex flex-col gap-4 text-2xl font-serif text-gray-500">
          <Link to="/" onClick={() => setIsSidebarOpen(false)} className="hover:text-black transition-colors">
            {t('nav.projects')}
          </Link>
          <Link to="/profile" onClick={() => setIsSidebarOpen(false)} className="hover:text-black transition-colors">
            {t('nav.about')}
          </Link>
        </nav>

        {/* Sidebar Bottom: Info */}
        <div className="space-y-8 text-sm text-gray-500">
          <div>
            <p>+213 (0)50 000 000</p>
            <p>mail@architect.com</p>
          </div>

          <div className="flex flex-col gap-1">
            <a href="https://instagram.com" className="hover:text-black transition-colors">Instagram</a>
            <a href="https://linkedin.com" className="hover:text-black transition-colors">LinkedIn</a>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            <Globe size={16} />
            {['en', 'fr', 'es'].map(lang => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={clsx(
                  "uppercase tracking-wider hover:text-black transition-colors",
                  i18n.language === lang ? "text-black font-semibold" : ""
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="pt-4 text-xs opacity-70">
            <p>&copy; {new Date().getFullYear()} Salah Abdennebi</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="h-screen w-full overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <Outlet />
        </div>
      </main>

      {/* Overlay to close sidebar when clicking outside */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={clsx(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-500",
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />
    </div>
  );
}
