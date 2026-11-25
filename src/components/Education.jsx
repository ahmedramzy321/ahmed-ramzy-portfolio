import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SectionHeading from './SectionHeading';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section container">
      <SectionHeading title={t.education.title} subtitle={t.education.subtitle} index="04" />
      <div className="education-grid">
        <motion.div
          className="education-card glass-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="education-icon">
            <GraduationCap size={28} />
          </span>
          <div>
            <h3>{t.education.degree}</h3>
            <p className="education-school">{t.education.school}</p>
            <p className="education-detail">
              {t.education.year} - {t.education.detail}
            </p>
          </div>
        </motion.div>
        {t.education.training.map((tr, i) => (
          <motion.div
            key={tr.title}
            className="education-card glass-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.12 * (i + 1) }}
          >
            <span className="education-icon education-icon-alt">
              <Award size={26} />
            </span>
            <div>
              <h3 dir="auto">{tr.title}</h3>
              <p className="education-school">{tr.org}</p>
              <p className="education-detail">{tr.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
