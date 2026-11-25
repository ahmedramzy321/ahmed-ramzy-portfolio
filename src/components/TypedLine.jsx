import { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

// Calm typewriter: types each phrase, holds, deletes, moves on.
// Reduced motion gets the first phrase statically.
export default function TypedLine() {
  const { lang, t } = useLanguage();
  const phrases = t.hero.typed;
  const [text, setText] = useState(phrases[0]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setText(phrases[0]);
      return;
    }
    setAnimated(true);
    let phrase = 0;
    let char = phrases[0].length;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = phrases[phrase];
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char >= current.length + 8) {
          deleting = true;
          timer = setTimeout(tick, 2400);
          return;
        }
        timer = setTimeout(tick, 55 + Math.random() * 60);
      } else {
        char -= 1;
        setText(current.slice(0, Math.max(0, char)));
        if (char <= 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
          timer = setTimeout(tick, 500);
          return;
        }
        timer = setTimeout(tick, 26);
      }
    };

    // start from the full first phrase, pause, then delete and cycle
    setText(phrases[0]);
    timer = setTimeout(tick, 2600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <p className="typed-line" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <span className="typed-prompt" aria-hidden="true">
        ›
      </span>{' '}
      <span className="typed-text">{text}</span>
      {animated && <span className="typed-caret" aria-hidden="true" />}
    </p>
  );
}
