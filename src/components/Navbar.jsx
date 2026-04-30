import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: '#about',      label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects',   label: t.nav.projects },
    { href: '#skills',     label: t.nav.skills },
    { href: '#education',  label: t.nav.education },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-lg shadow-black/20 border-b border-slate-900'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#about"
          className="text-xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent tracking-tight"
        >
          ML.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-slate-400 hover:text-fuchsia-400 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/40 rounded-full text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white hover:border-fuchsia-500 transition-all"
          >
            {t.nav.contact}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800 px-6 py-5 space-y-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block text-slate-400 hover:text-fuchsia-400 transition-colors py-2.5 border-b border-slate-900 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 px-4 py-3 bg-fuchsia-600 text-white rounded-xl text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

