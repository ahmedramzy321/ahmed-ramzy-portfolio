export const translations = {
  en: {
    dir: 'ltr',
    nav: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#skills', label: 'Skills' },
      { href: '#projects', label: 'Projects' },
      { href: '#education', label: 'Education' },
      { href: '#contact', label: 'Contact' },
    ],
    hireMe: 'Hire me',
    hero: {
      eyebrow: 'Open to work and freelance projects',
      hi: "Hi, I'm",
      name: 'Ahmed Ramzy',
      role: 'Full-Stack Web Developer',
      tagline:
        'Computer Science student at Mansoura University building full-stack products with React, TypeScript, Laravel, and .NET.',
      viewWork: 'View my work',
      downloadCv: 'Download CV',
      typed: [
        'builds full-stack products',
        'designs clean databases',
        'ships with React and Laravel',
        'writes code that lasts',
      ],
    },
    about: {
      title: 'About me',
      subtitle: 'Who I am',
      paragraphs: [
        "I'm a Computer Science student at Mansoura University (graduating 2028) and a full-stack web developer who learns by building. Instead of only following courses, I design and ship my own systems, from database schema to deployed UI.",
        'On the backend I work with Laravel and .NET, and on the frontend with React and TypeScript. My Laravel systems use service and repository layers, role-based permissions, and queued jobs, because I care about code that survives real users, not just demos.',
        "I'm currently training in React and .NET at Route Academy, after completing a full-stack PHP program at NTI. Right now I'm looking for a full-time job and freelance work, where I can turn this energy into real products.",
      ],
    },
    stats: [
      { value: '20+', label: 'Projects built' },
      { value: '3.1', label: 'GPA' },
      { value: '2', label: 'Laravel systems' },
      { value: '15+', label: 'Technologies' },
    ],
    skills: {
      title: 'Skills',
      subtitle: 'What I work with',
      groups: [
        {
          title: 'Frontend',
          icon: 'code',
          skills: [
            { name: 'React.js / Hooks / Router', level: 88, logo: 'react' },
            { name: 'TypeScript / JavaScript ES6+', level: 85, logo: 'typescript' },
            { name: 'Redux Toolkit / Context API', level: 80, logo: 'redux' },
            { name: 'Tailwind CSS / Bootstrap', level: 88, logo: 'tailwind' },
          ],
        },
        {
          title: 'Backend',
          icon: 'server',
          skills: [
            { name: 'Laravel / PHP', level: 90, logo: 'laravel' },
            { name: 'RESTful APIs / Sanctum', level: 85, logo: 'php' },
            { name: 'MySQL / PostgreSQL', level: 82, logo: 'postgresql' },
            { name: 'SQL Server', level: 78, logo: null },
            { name: 'ASP.NET Core (in training)', level: 65, logo: 'dotnet' },
          ],
        },
        {
          title: 'Tools & Practices',
          icon: 'wrench',
          skills: [
            { name: 'Git / GitHub / Postman', level: 85, logo: 'git' },
            { name: 'Docker / Linux / VPS', level: 70, logo: 'docker' },
            { name: 'SOLID / Clean Code', level: 85, logo: null },
            { name: 'OOP / Data Structures', level: 85, logo: null },
          ],
        },
      ],
    },
    projects: {
      title: 'Featured projects',
      subtitle: 'Selected work',
      featured: 'Featured',
      viewGithub: 'View on GitHub',
      liveDemo: 'Live demo',
      coverArt: 'Cover graphic',
      moreBefore: 'More on',
      moreAfter: '- 20+ repositories and counting.',
      items: {
        ecommerce: {
          name: 'E-Commerce Management System',
          description:
            'A full e-commerce platform with shopping cart, online payment, and order management for admins, employees, and customers. Separate admin and employee dashboards with an approval workflow: every employee change requires admin approval.',
        },
        school: {
          name: 'School Management System',
          description:
            'A full-stack school platform with service and repository layers, role- and permission-based access control, a queued sync job to a secondary SQL Server database, and a read-only SQL console with query logging and CSRF/XSS/SQL-injection protection.',
        },
        freshcart: {
          name: 'FreshCart',
          description:
            'A React + Vite e-commerce frontend with an organized API layer, full authentication flow, product catalog, and cart.',
        },
        kanban: {
          name: 'Kanban Board',
          description:
            'A TypeScript kanban board for organizing tasks with a clean, typed component structure.',
        },
        quizmaster: {
          name: 'Quiz Master',
          description:
            'A quiz game written in object-oriented JavaScript with ES6 modules, categories, and difficulty levels.',
        },
        contacthub: {
          name: 'Contact Hub',
          description:
            'A responsive smart contact manager with dynamic client-side interactions to add, view, and manage contacts.',
        },
      },
    },
    education: {
      title: 'Education & training',
      subtitle: 'My journey',
      degree: 'B.Sc. Computer Science',
      school: 'Faculty of Computers and Information Sciences, Mansoura University',
      year: 'Expected graduation 2028',
      detail: 'GPA: 3.1',
      training: [
        {
          title: 'Full-Stack Web Development Trainee (React & .NET)',
          org: 'Route Academy',
          period: 'Present',
        },
        {
          title: 'Full-Stack Web Development with PHP',
          org: 'National Telecommunications Institute (NTI)',
          period: 'May 2026 - August 2026',
        },
      ],
    },
    contact: {
      title: 'Get in touch',
      subtitle: "Let's work together",
      lead: "I'm open to junior roles and freelance projects. The fastest way to reach me is email.",
      cvEn: 'CV (English)',
      cvAr: 'CV (Arabic)',
    },
    footer: 'Designed & built by Ahmed Ramzy',
    footerTech: 'React · Vite · Framer Motion · built by hand, no templates',
  },

  ar: {
    dir: 'rtl',
    nav: [
      { href: '#home', label: 'الرئيسية' },
      { href: '#about', label: 'من أنا' },
      { href: '#skills', label: 'المهارات' },
      { href: '#projects', label: 'المشاريع' },
      { href: '#education', label: 'التعليم' },
      { href: '#contact', label: 'تواصل' },
    ],
    hireMe: 'وظّفني',
    hero: {
      eyebrow: 'متاح للعمل والمشاريع الحرة',
      hi: 'مرحبًا، أنا',
      name: 'أحمد رمزي',
      role: 'مطوّر ويب متكامل',
      tagline:
        'طالب علوم حاسب بجامعة المنصورة، أبني منتجات ويب متكاملة بـ React وTypeScript وLaravel و.NET.',
      viewWork: 'شاهد أعمالي',
      downloadCv: 'حمّل السيرة الذاتية',
      typed: [
        'يبني منتجات ويب متكاملة',
        'يصمم قواعد بيانات نظيفة',
        'يطلق مشاريع بـ React وLaravel',
        'يكتب كودًا يعيش طويلًا',
      ],
    },
    about: {
      title: 'من أنا',
      subtitle: 'تعرّف عليّ',
      paragraphs: [
        'أنا طالب علوم حاسب بجامعة المنصورة (تخرج 2028) ومطوّر ويب متكامل أتعلم بالبناء. بدل الاكتفاء بالكورسات، أصمم وأطلق أنظمتي الخاصة، من قاعدة البيانات حتى واجهة المستخدم المنشورة.',
        'في الواجهات الخلفية أعمل بـ Laravel و.NET، وفي الواجهات الأمامية بـ React وTypeScript. أنظمتي المبنية بـ Laravel تستخدم طبقات Service وRepository وصلاحيات مبنية على الأدوار ومهام مجدولة، لأنني أهتم بكود يتحمل المستخدمين الحقيقيين، لا مجرد عروض تجريبية.',
        'أتدرب حاليًا على React و.NET في أكاديمية Route، بعد إتمام برنامج تطوير الويب المتكامل بـ PHP في المعهد القومي للاتصالات (NTI). وأبحث الآن عن وظيفة وعمل حر لأحوّل هذه الطاقة إلى منتجات حقيقية.',
      ],
    },
    stats: [
      { value: '+20', label: 'مشروعًا منفذًا' },
      { value: '3.1', label: 'المعدل التراكمي' },
      { value: '2', label: 'نظاما Laravel' },
      { value: '+15', label: 'تقنية' },
    ],
    skills: {
      title: 'المهارات',
      subtitle: 'ما أعمل به',
      groups: [
        {
          title: 'الواجهات الأمامية',
          icon: 'code',
          skills: [
            { name: 'React.js / Hooks / Router', level: 88, logo: 'react' },
            { name: 'TypeScript / JavaScript ES6+', level: 85, logo: 'typescript' },
            { name: 'Redux Toolkit / Context API', level: 80, logo: 'redux' },
            { name: 'Tailwind CSS / Bootstrap', level: 88, logo: 'tailwind' },
          ],
        },
        {
          title: 'الواجهات الخلفية',
          icon: 'server',
          skills: [
            { name: 'Laravel / PHP', level: 90, logo: 'laravel' },
            { name: 'RESTful APIs / Sanctum', level: 85, logo: 'php' },
            { name: 'MySQL / PostgreSQL', level: 82, logo: 'postgresql' },
            { name: 'SQL Server', level: 78, logo: null },
            { name: 'ASP.NET Core (قيد التدريب)', level: 65, logo: 'dotnet' },
          ],
        },
        {
          title: 'الأدوات والممارسات',
          icon: 'wrench',
          skills: [
            { name: 'Git / GitHub / Postman', level: 85, logo: 'git' },
            { name: 'Docker / Linux / VPS', level: 70, logo: 'docker' },
            { name: 'SOLID / Clean Code', level: 85, logo: null },
            { name: 'OOP / Data Structures', level: 85, logo: null },
          ],
        },
      ],
    },
    projects: {
      title: 'أبرز المشاريع',
      subtitle: 'مختارات من أعمالي',
      featured: 'مميز',
      viewGithub: 'شاهد على GitHub',
      liveDemo: 'عرض مباشر',
      coverArt: 'غلاف توضيحي',
      moreBefore: 'المزيد على',
      moreAfter: '- أكثر من 20 مستودعًا والعدد في ازدياد.',
      items: {
        ecommerce: {
          name: 'نظام إدارة متجر إلكتروني',
          description:
            'منصة تجارة إلكترونية متكاملة بعربة تسوق ودفع إلكتروني وإدارة طلبات للمدير والموظفين والعملاء، مع لوحتي تحكم منفصلتين ودورة موافقات: كل تعديل من الموظف يتطلب موافقة المدير.',
        },
        school: {
          name: 'نظام إدارة المدارس',
          description:
            'نظام مدارس متكامل بمعمارية Service/Repository وصلاحيات مبنية على الأدوار والسياسات، ومزامنة مجدولة مع قاعدة SQL Server ثانوية، ووحدة استعلامات SQL للقراءة فقط مع تسجيل الاستعلامات وحماية من CSRF وXSS وحقن SQL.',
        },
        freshcart: {
          name: 'FreshCart',
          description:
            'واجهة متجر إلكتروني بـ React وVite مع طبقة API منظمة ومصادقة كاملة وكتالوج منتجات وعربة تسوق.',
        },
        kanban: {
          name: 'لوحة كانبان',
          description:
            'لوحة كانبان بـ TypeScript لتنظيم المهام بهيكل مكوّنات نظيف ومُعرَّف الأنواع.',
        },
        quizmaster: {
          name: 'Quiz Master',
          description:
            'لعبة اختبارات مكتوبة بـ JavaScript كائنية التوجه مع وحدات ES6 وتصنيفات ومستويات صعوبة.',
        },
        contacthub: {
          name: 'Contact Hub',
          description:
            'مدير جهات اتصال ذكي ومتجاوب بتفاعلات ديناميكية لإضافة وعرض وإدارة جهات الاتصال.',
        },
      },
    },
    education: {
      title: 'التعليم والتدريب',
      subtitle: 'مسيرتي',
      degree: 'بكالوريوس علوم الحاسب',
      school: 'كلية الحاسبات وعلوم المعلومات - جامعة المنصورة',
      year: 'التخرج المتوقع 2028',
      detail: 'المعدل التراكمي: 3.1',
      training: [
        {
          title: 'متدرب تطوير ويب متكامل (React و.NET)',
          org: 'أكاديمية Route',
          period: 'حاليًا',
        },
        {
          title: 'تطوير ويب متكامل بـ PHP',
          org: 'المعهد القومي للاتصالات (NTI)',
          period: 'مايو 2026 - أغسطس 2026',
        },
      ],
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'لنعمل معًا',
      lead: 'أنا متاح للوظائف ومشاريع العمل الحر. أسرع طريقة للتواصل هي البريد الإلكتروني.',
      cvEn: 'السيرة الذاتية (إنجليزي)',
      cvAr: 'السيرة الذاتية (عربي)',
    },
    footer: 'صُمم وطُوّر بواسطة أحمد رمزي',
    footerTech: 'React · Vite · Framer Motion · مبني يدويًا بدون قوالب',
  },
};
