import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import SectionHeading from './SectionHeading';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section container">
      <SectionHeading title={t.about.title} subtitle={t.about.subtitle} index="01" />
      <div className="about-grid">
        <motion.div
          className="about-text glass-card"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
        <div className="stats-grid">
          {t.stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
