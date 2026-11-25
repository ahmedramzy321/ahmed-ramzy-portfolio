import {
  siReact,
  siTypescript,
  siJavascript,
  siLaravel,
  siPhp,
  siDotnet,
  siMysql,
  siPostgresql,
  siTailwindcss,
  siBootstrap,
  siRedux,
  siGit,
  siGithub,
  siDocker,
  siLinux,
  siPostman,
  siVite,
  siNextdotjs,
  siHtml5,
  siCss,
} from 'simple-icons';

export const LOGOS = {
  react: siReact,
  typescript: siTypescript,
  javascript: siJavascript,
  laravel: siLaravel,
  php: siPhp,
  dotnet: siDotnet,
  mysql: siMysql,
  postgresql: siPostgresql,
  tailwind: siTailwindcss,
  bootstrap: siBootstrap,
  redux: siRedux,
  git: siGit,
  github: siGithub,
  docker: siDocker,
  linux: siLinux,
  postman: siPostman,
  vite: siVite,
  nextjs: siNextdotjs,
  html5: siHtml5,
  css: siCss,
};

export default function TechLogo({ name, size = 18, colored = true }) {
  const icon = LOGOS[name];
  if (!icon) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      fill={colored ? `#${icon.hex}` : 'currentColor'}
      className="tech-logo"
    >
      <path d={icon.path} />
    </svg>
  );
}
