import { motion } from 'framer-motion';
import { ExternalLink, Image, Play, Star } from 'lucide-react';
import { GithubIcon } from './icons';
import TechLogo from './TechLogo';
import { profile, projectsMeta } from '../data';
import { useLanguage } from '../LanguageContext';
import { useTilt } from '../useTilt';
import SectionHeading from './SectionHeading';

function ProjectCard({ meta, text, t, index }) {
  const tilt = useTilt(3.5);
  return (
    <motion.article
      className={`project-card glass-card ${meta.featured ? 'project-featured' : ''}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.12 }}
    >
      <div
        className="project-tilt"
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        {meta.image && (
          <div className="project-img">
            <img src={meta.image} alt={text.name} loading="lazy" />
            {meta.coverArt && (
              <span className="cover-art-badge">
                <Image size={12} /> {t.projects.coverArt}
              </span>
            )}
          </div>
        )}
        <div className="project-body">
          <span className="project-index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="project-title-row">
            <h3>{text.name}</h3>
            {meta.featured && (
              <span className="featured-badge">
                <Star size={13} /> {t.projects.featured}
              </span>
            )}
          </div>
          <div className="project-stack">
            {meta.stack.map((tech) => (
              <span key={tech.label} className="chip" dir="ltr">
                {tech.logo && <TechLogo name={tech.logo} size={13} />}
                {tech.label}
              </span>
            ))}
          </div>
          <p className="project-desc">{text.description}</p>
          <div className="project-links">
            <a
              className="project-link"
              href={meta.url}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={16} /> {t.projects.viewGithub}{' '}
              <ExternalLink size={14} />
            </a>
            {meta.demo && (
              <a
                className="project-link project-link-demo"
                href={meta.demo}
                target="_blank"
                rel="noreferrer"
              >
                <Play size={15} /> {t.projects.liveDemo}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section container">
      <SectionHeading
        title={t.projects.title}
        subtitle={t.projects.subtitle}
        index="03"
      />
      <div className="projects-grid">
        {projectsMeta.map((meta, i) => (
          <ProjectCard
            key={meta.id}
            meta={meta}
            text={t.projects.items[meta.id]}
            t={t}
            index={i}
          />
        ))}
      </div>
      <motion.p
        className="projects-more"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t.projects.moreBefore}{' '}
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>{' '}
        {t.projects.moreAfter}
      </motion.p>
    </section>
  );
}
