import React from 'react';
import { Github, Linkedin, Mail, BrainCircuit, MapPin, Building2, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="about" className="relative pt-32 pb-10 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[130px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-20 right-1/4 w-[400px] h-[500px] bg-violet-600/8 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-6 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-400 text-xs font-semibold uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse"></span>
            {h.badge}
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Misurda Luca
          </h1>

          <p className="text-xl font-medium bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {h.subtitle}
          </p>

          <div className="flex flex-col gap-1.5 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Building2 size={13} className="text-fuchsia-500 shrink-0" />
              {h.company}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={13} className="text-fuchsia-500 shrink-0" />
              {h.location}
            </span>
          </div>

          <p className="text-base text-slate-400 max-w-lg leading-relaxed">
            {h.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#projects"
              className="px-7 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-fuchsia-600/25 text-sm"
            >
              {h.btnProjects}
            </a>
            <a
              href="#contact"
              className="px-7 py-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold transition-all text-sm border border-slate-700"
            >
              {h.btnContact}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}LucaMisurda_CV.pdf`}
              download
              className="px-7 py-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold transition-all text-sm border border-slate-700 flex items-center gap-2"
            >
              <Download size={15} />
              {h.btnCV}
            </a>
          </div>

          <div className="flex gap-3 pt-1">
            <a
              href="https://github.com/momothebunny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/luca-misurda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:misurda.luca@gmail.com"
              aria-label="Email"
              className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative order-1 md:order-2">
          <div className="relative mx-auto w-72 md:w-full aspect-square max-w-sm">
            {/* Glowing ring */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-500 rounded-3xl blur-sm opacity-25"></div>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src={`${import.meta.env.BASE_URL}images/profile.png`}
                alt="Misurda Luca"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 scale-[1.03] group-hover:scale-100"
              />
            </div>

            {/* Floating GPA card */}
            <div className="absolute -bottom-5 -left-5 bg-slate-900/95 backdrop-blur-sm border border-slate-700 px-4 py-3 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/15 rounded-lg text-green-400">
                  <BrainCircuit size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">
                    {h.gpaLabel}
                  </div>
                  <div className="text-base font-bold text-white">4.26 / 5.00</div>
                </div>
              </div>
            </div>

            {/* Floating current position card */}
            <div className="absolute -top-4 -right-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700 px-4 py-3 rounded-2xl shadow-xl">
              <div className="text-[10px] text-slate-500 uppercase tracking-wide font-medium mb-1">
                {h.currentRole}
              </div>
              <div className="text-xs font-semibold text-fuchsia-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0"></span>
                Vantage Towers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
