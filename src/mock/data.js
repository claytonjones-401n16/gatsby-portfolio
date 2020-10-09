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
    "I am a Software Developer with experience in both front and backend JavaScript, with a special interest in React. I love being able to create something. There's nothing quite like the feeling of building a website, or tool, and see it be successfully put to use.",
  paragraphTwo:
    "I have been a licensed massage therapist for the last 6 years where I've worked one on one with clients to help them reach their goals. I’m passionate about helping others, and using programming to improve people’s lives.",
  paragraphThree:
    'As a massage therapist I’ve learned to effectively communicate and manage expectations while also establishing trust. Communication is the foundation of any company, team, or client relationship, and it is what enables us to make progress, and be successful.',
  resume:
    'https://docs.google.com/document/d/1XBA9v56nSzkeWUH0OqZ5Om2S4WOU3d4qdsZm4F1wsA8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dungeonscribe.png',
    title: 'Dungeon Scribe',
    info: 'Online tool to create and manage Dungeons and Dragons characters and campaigns.',
    info2: 'Built with: JavaScript, React, Redux Toolkit, Node.js, Socket.io, Express',
    url: 'http://www.dungeonscribe.io',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dndscribe.png',
    title: 'D&D Scribe',
    info:
      'The basis for Dungeon Scribe, D&D Scribe is a CLI application that allows you to create Dungeons and Dragons characters.',
    info2: 'Built with: JavaScript, Node.js, Express, Readline',
    url: 'https://www.npmjs.com/package/dnd-scribe',
    repo: '', // if no repo, the button will not show up
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
