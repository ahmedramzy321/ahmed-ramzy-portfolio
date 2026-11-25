import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import CodeBackdrop from './components/CodeBackdrop';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="warm-wash" aria-hidden="true" />
      <CodeBackdrop />
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
