const B = import.meta.env.BASE_URL;
export const profile = {
  name: 'Ahmed Ramzy',
  fullName: 'Ahmed Ramzy Mohamed Mosallam',
  location: 'Gharbia, Egypt',
  email: 'ahmedramzy2012006@gmail.com',
  phone: '+20 122 837 4455',
  github: 'https://github.com/ahmedramzy321',
  linkedin: 'https://linkedin.com/in/ahmed-ramzy-mosallam',
  cv: {
    en: B + 'cv/Ahmed-Ramzy-CV-EN.pdf',
    ar: B + 'cv/Ahmed-Ramzy-CV-AR.pdf',
  },
  photo: B + 'photo.jpg',
};

// Logo keys resolve in components/TechLogo.jsx (simple-icons).
export const marqueeLogos = [
  'react',
  'typescript',
  'javascript',
  'laravel',
  'php',
  'dotnet',
  'mysql',
  'postgresql',
  'tailwind',
  'redux',
  'git',
  'docker',
  'linux',
  'vite',
  'nextjs',
  'postman',
  'bootstrap',
];

// Language-neutral project facts. Names/descriptions live in i18n.js, keyed by id.
export const projectsMeta = [
  {
    id: 'ecommerce',
    url: 'https://github.com/ahmedramzy321/Management-System',
    demo: null,
    image: B + 'projects/ecommerce-cover.png',
    coverArt: true,
    stack: [
      { label: 'Laravel', logo: 'laravel' },
      { label: 'MVC', logo: null },
      { label: 'MySQL', logo: 'mysql' },
      { label: 'PHP', logo: 'php' },
    ],
    featured: true,
  },
  {
    id: 'school',
    url: 'https://github.com/ahmedramzy321/school-management-system',
    demo: null,
    image: B + 'projects/school-cover.png',
    coverArt: true,
    stack: [
      { label: 'Laravel 12', logo: 'laravel' },
      { label: 'MySQL', logo: 'mysql' },
      { label: 'SQL Server', logo: null },
      { label: 'Sanctum', logo: null },
    ],
    featured: true,
  },
  {
    id: 'freshcart',
    url: 'https://github.com/ahmedramzy321/FrechChart',
    demo: null,
    image: B + 'projects/freshcart.jpg',
    stack: [
      { label: 'React', logo: 'react' },
      { label: 'Vite', logo: 'vite' },
      { label: 'REST API', logo: null },
    ],
    featured: false,
  },
  {
    id: 'kanban',
    url: 'https://github.com/ahmedramzy321/-Kanban',
    demo: 'https://ahmedramzy321.github.io/-Kanban/',
    image: B + 'projects/kanban.jpg',
    stack: [
      { label: 'TypeScript', logo: 'typescript' },
      { label: 'React', logo: 'react' },
    ],
    featured: false,
  },
  {
    id: 'quizmaster',
    url: 'https://github.com/ahmedramzy321/Quiz-Master',
    demo: 'https://ahmedramzy321.github.io/Quiz-Master/',
    image: B + 'projects/quizmaster.jpg',
    stack: [
      { label: 'JavaScript', logo: 'javascript' },
      { label: 'OOP', logo: null },
      { label: 'ES6', logo: null },
    ],
    featured: false,
  },
  {
    id: 'contacthub',
    url: 'https://github.com/ahmedramzy321/Contact-Hub-Smart-Contact-Manager',
    demo: 'https://ahmedramzy321.github.io/Contact-Hub-Smart-Contact-Manager/',
    image: B + 'projects/contacthub.jpg',
    stack: [
      { label: 'JavaScript', logo: 'javascript' },
      { label: 'Bootstrap', logo: 'bootstrap' },
      { label: 'CSS3', logo: 'css' },
    ],
    featured: false,
  },
];
