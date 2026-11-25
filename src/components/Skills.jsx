import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import TechLogo from './TechLogo';
import { useLanguage } from '../LanguageContext';
import SectionHeading from './SectionHeading';

const icons = { server: Server, code: Code2, wrench: Wrench };

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section container">
      <SectionHeading
        title={t.skills.title}
        subtitle={t.skills.subtitle}
        index="02"
      />
      <div className="skills-grid">
        {t.skills.groups.map((group, gi) => {
          const Icon = icons[group.icon] || Code2;
          return (
            <motion.div
              key={group.title}
              className="skill-group glass-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: gi * 0.12, ease: 'easeOut' }}
            >
              <div className="skill-group-head">
                <span className="skill-icon">
                  <Icon size={20} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((skill, si) => (
                  <li key={skill.name}>
                    <div className="skill-row">
                      {skill.logo && <TechLogo name={skill.logo} size={16} />}
                      <span dir="auto">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{
                          duration: 1.2,
                          delay: 0.2 + si * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
