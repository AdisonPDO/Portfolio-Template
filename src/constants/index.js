import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  graduate,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'À propos',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Mobile Developer',
    icon: frontend,
  },
  {
    title: 'Full Stack Developer',
    icon: backend,
  },
  {
    title: 'Web Developer',
    icon: ux,
  },
  {
    title: 'Software Engineer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Les jardins du Cloitre de Marseille',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2019 - Nov 2019',
  },
  {
    title: 'Android Developer',
    company_name: 'Perfumist',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sept 2020 - Jun 2021',
  },
  {
    title: 'Android & IOS Developer',
    company_name: 'Agrove',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Dec 2021 - Dec 2022',
  },
  {
    title: 'Software Engineer',
    company_name: 'Elloha',
    icon: dcc,
    iconBg: '#333333',
    date: 'Dec 2022 - Actuellement',
  },
  {
    title: 'Architecte Logiciel - Bac +5',
    company_name: 'Epitech',
    icon: graduate,
    iconBg: '#333333',
    date: 'Sep 2022 - Juil 2024',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Perfumist',
    description: 'Refonte intégrale de l’application android mobile Perfumist (1m+ téléchargements)',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Agrove',
    description:
      'Developpement de l’application mobile Agrove (Android & IOS), application pour monitorer les capteurs connectés remontant les données des cultures agricoles.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Elloha',
    description: 'Refonte integrale de l’application mobile Elloha (Android & IOS), lancement de la refonte en React de la solution web, developpement de nouveaux endpoints pour l’API Rest et veille technologique sur des sujets AI et Data Science.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Raquette Padel Pro',
    description: `Developpement d'une application BtoB pour Raquette Padel Pro, application pour la commande et consultation de produits pour les clubs de padel.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Ludocars66',
    description:
      'Developpement de la solution web pour Ludocars66, location de voitures.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
