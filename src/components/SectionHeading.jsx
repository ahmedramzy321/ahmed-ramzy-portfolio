import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, index }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-heading-top">
        <span className="section-index">{index}</span>
        <span className="section-subtitle">{subtitle}</span>
        <motion.span
          className="section-rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <h2>{title}</h2>
    </motion.div>
  );
}
