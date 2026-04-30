import React from 'react';
import { Mail, Smartphone, Github, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer id="contact" className="relative py-16 overflow-hidden border-t border-slate-900">
      {/* Gradient glow from below */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-fuchsia-950/15 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-fuchsia-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-semibold uppercase tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          {f.availableLabel}
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
          {f.heading}
        </h2>
        <p className="text-slate-400 mb-12 max-w-lg mx-auto text-base leading-relaxed">
          {f.description}
        </p>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="mailto:misurda.luca@gmail.com"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5 transition-all group"
          >
            <Mail size={18} className="text-fuchsia-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="font-medium text-sm">misurda.luca@gmail.com</span>
          </a>
          <div className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-all group cursor-default">
            <Smartphone size={18} className="text-violet-400 shrink-0" />
            <span className="font-medium text-sm">+36 70 292 8789</span>
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-900/80 rounded-2xl border border-slate-800 cursor-default">
            <MapPin size={18} className="text-cyan-400 shrink-0" />
            <span className="font-medium text-sm text-slate-400">{f.location}</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-900 text-slate-600 text-xs flex-wrap gap-4">
          <p>{f.copyright}</p>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/luca-misurda" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors flex items-center gap-1.5">
              <Linkedin size={13} /> LinkedIn
            </a>
            <a href="https://github.com/momothebunny" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors flex items-center gap-1.5">
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

