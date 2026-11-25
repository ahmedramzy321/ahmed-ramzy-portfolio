import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './i18n';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') === 'ar' ? 'ar' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
