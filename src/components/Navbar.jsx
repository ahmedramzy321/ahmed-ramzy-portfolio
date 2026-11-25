import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Languages, Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-inner container">
        <a href="#home" className="brand">
          AR<span className="brand-dot">.</span>
        </a>
        <ul className="nav-links">
          {t.nav.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="btn btn-sm btn-ghost lang-toggle" onClick={toggle}>
          <Languages size={16} /> {lang === 'en' ? 'عربي' : 'EN'}
        </button>
        <a href="#contact" className="btn btn-sm btn-primary nav-cta">
          {t.hireMe}
        </a>
        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {t.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
