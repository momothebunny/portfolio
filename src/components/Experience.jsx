import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { experiences as expData } from '../data/portfolioData';

const dotStyle = {
  fuchsia: 'bg-fuchsia-500',
  violet: 'bg-violet-500',
  cyan: 'bg-cyan-500',
};
const roleStyle = {
  fuchsia: 'text-fuchsia-400',
  violet: 'text-violet-400',
  cyan: 'text-cyan-400',
};
const bulletStyle = {
  fuchsia: 'text-fuchsia-500',
  violet: 'text-violet-500',
  cyan: 'text-cyan-500',
};

const Experience = () => {
  const { t } = useLanguage();
  const { sectionTitle, activeLabel, items } = t.experience;
  const mergedItems = items.map((item, i) => ({ ...item, logo: expData[i]?.logo }));

  return (
    <section id="experience" className="py-16 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <Briefcase className="text-fuchsia-500" size={22} />
        <h2 className="text-3xl font-bold">{sectionTitle}</h2>
      </div>

      <div className="space-y-8">
        {mergedItems.map((exp, idx) => (
          <div key={idx} className="relative pl-8 border-l-2 border-slate-800">
            {/* Timeline dot */}
            <div
              className={`absolute -left-[11px] top-6 w-5 h-5 rounded-full border-2 border-slate-950 ${dotStyle[exp.color]} ${
                exp.current ? 'shadow-[0_0_18px_rgba(217,70,239,0.55)]' : ''
              }`}
            >
              {exp.current && (
                <span className="absolute inset-0 rounded-full bg-fuchsia-400 animate-ping opacity-60"></span>
              )}
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all">
              <div className="flex">
                {/* Left: square image with overlay */}
                <div className="group relative shrink-0 w-60 aspect-square overflow-hidden">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                      <Briefcase size={40} className="text-slate-600" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                  {/* Company info overlaid */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-white leading-tight">{exp.company}</h3>
                      {exp.current && (
                        <span className="px-1.5 py-0.5 bg-green-500/80 text-white text-[9px] font-bold rounded uppercase tracking-wide">
                          {activeLabel}
                        </span>
                      )}
                    </div>
                    <p className={`font-semibold text-xs ${roleStyle[exp.color]}`}>{exp.role}</p>
                    {exp.subtitle && (
                      <p className="text-[10px] text-slate-400 italic">{exp.subtitle}</p>
                    )}
                    <p className="text-[10px] text-slate-400 flex items-center gap-1">
                      <MapPin size={9} className="shrink-0" />
                      {exp.location}
                    </p>
                    <p className="text-[10px] text-slate-400">{exp.period}</p>
                  </div>
                </div>

                {/* Right: bullets + tags */}
                <div className="flex-1 p-4 space-y-1.5">
                  {exp.bullets.map((b, i) => (
                    <p key={i} className="text-slate-400 text-xs leading-relaxed flex gap-2">
                      <span className={`shrink-0 mt-0.5 text-[10px] ${bulletStyle[exp.color]}`}>▸</span>
                      {b}
                    </p>
                  ))}
                  {exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 bg-slate-800 border border-slate-700/60 rounded text-[9px] font-medium text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

