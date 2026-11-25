import { motion } from 'framer-motion';
import { Download, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { profile } from '../data';
import { useLanguage } from '../LanguageContext';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section container">
      <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} index="05" />
      <motion.div
        className="contact-card glass-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="contact-lead">{t.contact.lead}</p>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <Mail size={18} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn btn-ghost">
            <Phone size={18} /> <span dir="ltr">{profile.phone}</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <GithubIcon size={18} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>
          <a href={profile.cv.en} download className="btn btn-ghost">
            <Download size={18} /> {t.contact.cvEn}
          </a>
          <a href={profile.cv.ar} download className="btn btn-ghost">
            <Download size={18} /> {t.contact.cvAr}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
