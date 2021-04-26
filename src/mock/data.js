import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Clayton Jones | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Clayton Jones',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'claytonjones.jpeg',
  paragraphOne:
    'I am a Software Developer based in Seattle with experience in front and backend JavaScript, with a special interest in creating single page applications with React.',
  paragraphTwo:
    'With recent startup experience, I am comfortable being thrown head first into the stack to solve challenging problems on day one. I am as productive working on a cross-functional team as I am tackling features as the only developer.',
  paragraphThree:
    'Coming from a background in Massage Therapy I’ve learned to effectively communicate and manage expectations with clients while also establishing trust. Communication is the foundation of any company, team, or client relationship, and it is what enables us to make progress, and be successful.',
  resume:
    'https://docs.google.com/document/d/1XBA9v56nSzkeWUH0OqZ5Om2S4WOU3d4qdsZm4F1wsA8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lightninglaw.png',
    title: 'Lightning Law',
    info: 'Online platform for law professionals.',
    info2: 'Built with: React, JavaScript, HTML, SCSS, Azure DevOps, Git',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dungeonscribe.png',
    title: 'Dungeon Scribe',
    info: 'Online tool to create and manage Dungeons and Dragons characters and campaigns.',
    info2: 'Built with: JavaScript, React, Redux Toolkit, Node.js, Socket.io, Express',
    url: 'http://www.dungeonscribe.io',
    repo: 'https://github.com/Dungeons-Developers/DnD-React', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dndscribe.png',
    title: 'D&D Scribe',
    info:
      'The basis for Dungeon Scribe, D&D Scribe is a CLI application that allows you to create Dungeons and Dragons characters.',
    info2: 'Built with: JavaScript, Node.js, Express, Readline',
    url: 'https://www.npmjs.com/package/dnd-scribe',
    repo: 'https://github.com/Dungeons-Developers/DnD-client', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working with me?',
  btn: 'Connect',
  email: 'claytonjonesLMP@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/claytonjjones/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/clayton-jones',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
