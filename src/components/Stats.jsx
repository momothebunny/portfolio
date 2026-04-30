import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();
  return (
    <section className="py-14 border-y border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {t.stats.filter((_, i) => i !== 0).map((stat, idx) => (
            <div key={idx} className="text-center space-y-2 group">
              <div className="text-4xl font-extrabold bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

