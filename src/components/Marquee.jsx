import TechLogo from './TechLogo';
import { marqueeLogos } from '../data';

const LABELS = {
  react: 'React',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  laravel: 'Laravel',
  php: 'PHP',
  dotnet: '.NET',
  mysql: 'MySQL',
  postgresql: 'PostgreSQL',
  tailwind: 'Tailwind CSS',
  redux: 'Redux',
  git: 'Git',
  docker: 'Docker',
  linux: 'Linux',
  vite: 'Vite',
  nextjs: 'Next.js',
  postman: 'Postman',
  bootstrap: 'Bootstrap',
};

export default function Marquee() {
  const items = [...marqueeLogos, ...marqueeLogos];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((key, i) => (
          <span className="marquee-item" key={`${key}-${i}`}>
            <TechLogo name={key} size={22} /> {LABELS[key] || key}
          </span>
        ))}
      </div>
    </div>
  );
}
