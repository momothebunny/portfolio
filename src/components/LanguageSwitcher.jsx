import { useLanguage } from '../context/LanguageContext';

const LANGS = ['en', 'hu', 'de'];

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="flex items-center gap-1">
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => setLang(l)}
            className={`text-xs font-semibold px-1.5 py-0.5 rounded transition-colors ${
              lang === l
                ? 'text-white bg-fuchsia-600'
                : 'text-gray-400 hover:text-white'
            }`}
            aria-label={t.lang[l]}
          >
            {l.toUpperCase()}
          </button>
          {i < LANGS.length - 1 && (
            <span className="text-gray-600 text-xs select-none">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
