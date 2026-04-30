import React from "react";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { education as eduData } from "../data/portfolioData";

const Education = () => {
  const { t } = useLanguage();
  const { sectionTitle, currentLabel, items } = t.education;
  const mergedItems = items.map((item, i) => ({ ...item, logo: eduData[i]?.logo }));

  return (
    <section id="education" className="py-16 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <GraduationCap className="text-fuchsia-500" size={22} />
        <h2 className="text-3xl font-bold">{sectionTitle}</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {mergedItems.map((edu, idx) => (
          <div
            key={idx}
            className={`group relative rounded-2xl border overflow-hidden transition-all ${
              edu.current
                ? "border-fuchsia-500/30 hover:border-fuchsia-500/60"
                : "border-slate-800 hover:border-slate-700"
            }`}
          >
            {/* Full-card image */}
            <div className="relative w-full aspect-square overflow-hidden">
              {edu.logo ? (
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                  <GraduationCap size={48} className="text-slate-600" />
                </div>
              )}

              {/* Strong gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

              {/* Badge */}
              {edu.current && (
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-fuchsia-500 text-white text-[9px] font-bold rounded uppercase tracking-wide shadow-lg">
                  {currentLabel}
                </span>
              )}

              {/* Text overlaid at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                <h3 className="font-bold text-white text-base leading-tight">{edu.school}</h3>
                <p className="text-fuchsia-400 font-semibold text-sm">{edu.degree}</p>
                <p className="text-slate-300 text-xs">{edu.field}</p>

                {edu.gpa && (
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-xs font-bold">
                    GPA: {edu.gpa}
                  </div>
                )}

                <p className="text-slate-400 text-xs">
                  {edu.period} &middot; {edu.location}
                </p>

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="pt-1 space-y-1">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-slate-300 text-xs leading-relaxed flex gap-2">
                        <span className="text-fuchsia-400 shrink-0">&#8250;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

