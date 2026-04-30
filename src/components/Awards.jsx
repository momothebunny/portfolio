import React from "react";
import { Award, BookOpen, Trophy, Zap, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Awards = () => {
  const { t } = useLanguage();
  const a = t.awards;

  const typeConfig = {
    award: {
      icon: <Trophy size={13} />,
      badge: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25",
      label: a.typeLabels.award,
    },
    hackathon: {
      icon: <Zap size={13} />,
      badge: "text-violet-400 bg-violet-500/10 border-violet-500/25",
      label: a.typeLabels.hackathon,
    },
  };

  return (
    <section className="py-16 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <Award className="text-fuchsia-500" size={22} />
              <h2 className="text-2xl font-bold">{a.sectionTitle}</h2>
            </div>
            <div className="space-y-4">
              {a.items.map((item, idx) => {
                const cfg = typeConfig[item.type];
                return (
                  <div
                    key={idx}
                    className="p-5 bg-slate-900/50 border border-slate-800 rounded-xl flex gap-4 hover:border-slate-700 transition-all group"
                  >
                    <div className="shrink-0 w-12 text-right">
                      <span className="text-fuchsia-500 font-bold text-sm">{item.year}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1.5 flex-wrap">
                        <h3 className="font-bold text-white text-sm group-hover:text-fuchsia-300 transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <span className={`shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${cfg.badge}`}>
                          {cfg.icon} {cfg.label}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="text-violet-500" size={20} />
                <h2 className="text-xl font-bold">{a.languagesTitle}</h2>
              </div>
              <div className="space-y-4">
                {a.languages.map((n, idx) => (
                  <div key={idx} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <div className="flex justify-between items-start mb-2.5 gap-2">
                      <span className="font-bold text-sm text-white">{n.lang}</span>
                      <span className="text-[10px] text-slate-500 text-right leading-tight max-w-[130px]">{n.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${n.color} ${n.width} transition-all`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <Star className="text-cyan-500" size={20} />
                <h2 className="text-xl font-bold">{a.certsTitle}</h2>
              </div>
              <div className="space-y-2">
                {a.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-all">
                    <div>
                      <div className="text-sm font-semibold text-white">{cert.name}</div>
                      <div className="text-xs text-slate-500">{cert.detail}</div>
                    </div>
                    <span className="text-xs text-slate-600 shrink-0 ml-3">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
