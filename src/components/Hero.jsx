import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import TechLogo from './TechLogo';
import TypedLine from './TypedLine';
import { profile } from '../data';
import { useLanguage } from '../LanguageContext';
import { useTilt } from '../useTilt';

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const nameContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const word = {
  hidden: { y: '112%' },
  show: { y: '0%', transition: { duration: 0.95, ease: EASE } },
};

export default function Hero() {
  const { lang, t } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const tilt = useTilt(4);
  const { scrollY } = useScroll();
  const yPhoto = useTransform(scrollY, [0, 700], [0, 56]);
  const yText = useTransform(scrollY, [0, 700], [0, 20]);

  return (
    <section id="home" className="hero container">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        key={lang}
      >
        <motion.p className="hero-eyebrow" variants={item}>
          <span className="pulse-dot" /> {t.hero.eyebrow}
        </motion.p>
        <motion.p className="hero-hi" variants={item}>
          {t.hero.hi}
        </motion.p>
        <motion.h1
          className="hero-name"
          variants={nameContainer}
          initial="hidden"
          animate="show"
        >
          {t.hero.name.split(' ').map((w, i, arr) => (
            <span className="mask" key={i}>
              <motion.span className="mask-inner" variants={word}>
                {w}
                {i < arr.length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          ))}
          <svg
            className="hero-name-underline"
            viewBox="0 0 300 12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M2 9 C 60 3, 150 11, 298 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.15, delay: 1.05, ease: 'easeInOut' }}
            />
          </svg>
        </motion.h1>

        <div className="hero-grid">
          <motion.div style={{ y: yText }}>
            <motion.h2 className="hero-role" variants={item}>
              {t.hero.role}
            </motion.h2>
            <motion.div variants={item}>
              <TypedLine />
            </motion.div>
            <motion.p className="hero-tagline" variants={item}>
              {t.hero.tagline}
            </motion.p>
            <motion.div className="hero-actions" variants={item}>
              <a href="#projects" className="btn btn-primary">
                {t.hero.viewWork} <Arrow size={18} />
              </a>
              <a href={profile.cv[lang]} download className="btn btn-ghost">
                <Download size={18} /> {t.hero.downloadCv}
              </a>
            </motion.div>
            <motion.div className="hero-socials" variants={item}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <span className="hero-location" dir="ltr">
                <MapPin size={16} /> {profile.location}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-photo-stack"
            variants={item}
            style={{ y: yPhoto }}
          >
            <div className="hero-photo-back" aria-hidden="true" />
            <div
              className="hero-photo-frame"
              ref={tilt.ref}
              onPointerMove={tilt.onPointerMove}
              onPointerLeave={tilt.onPointerLeave}
            >
              <img className="hero-photo" src={profile.photo} alt={t.hero.name} />
            </div>
            <div className="orbit-badge" aria-hidden="true">
              <svg className="orbit-ring" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="orbit-circle"
                    d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                  />
                </defs>
                <text>
                  <textPath href="#orbit-circle">
                    REACT · LARAVEL · TYPESCRIPT ·
                  </textPath>
                </text>
              </svg>
              <span className="orbit-center">
                <TechLogo name="react" size={20} />
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
