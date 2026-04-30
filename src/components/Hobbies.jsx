import React from "react";
import { Heart, Target } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { hobbies as hobbiesData } from "../data/portfolioData";

const Hobbies = () => {
  const { t } = useLanguage();
  const { goalsTitle, hobbiesTitle, goals, hobbies: tHobbies } = t.hobbies;
  const hobbies = tHobbies.map((h, i) => ({ ...h, image: hobbiesData[i]?.image }));

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <Target className="text-fuchsia-500" size={22} />
            <h2 className="text-2xl font-bold">{goalsTitle}</h2>
          </div>
          <div className="space-y-4">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-fuchsia-500/25 transition-all group"
              >
                <div className="shrink-0 w-7 h-7 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/25 flex items-center justify-center text-fuchsia-400 text-xs font-bold">
                  {idx + 1}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <Heart className="text-fuchsia-500" size={22} />
            <h2 className="text-2xl font-bold">{hobbiesTitle}</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden border border-slate-800 hover:border-fuchsia-500/25 hover:-translate-y-0.5 transition-all group cursor-default h-20"
              >
                {/* Background image */}
                {hobby.image ? (
                  <img
                    src={hobby.image}
                    alt={hobby.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center text-3xl">
                    {hobby.emoji}
                  </div>
                )}
                {/* Text shadow backdrop */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                  <span className="text-fuchsia-500 text-sm font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,1)] leading-tight block">
                    {hobby.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
