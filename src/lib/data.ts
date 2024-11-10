import {
  TypescriptOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  CsharpOriginal,
  PostgresqlOriginal,
  ReactOriginal,
  NextjsOriginal,
  NodejsOriginal,
  TailwindcssOriginal,
  UnityOriginal,
  GitOriginal,
  FigmaOriginal,
  PhotoshopOriginal,
  NeovimOriginal,
} from "devicons-react";
import {
  Code,
  Github,
  Instagram,
  KeyboardIcon,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export const technologies = {
  languages: {
    typescript: {
      name: "TypeScript",
      icon: TypescriptOriginal,
      shortname: "TS",
      yearStarted: 2021,
    },
    javascript: {
      name: "JavaScript",
      icon: JavascriptOriginal,
      shortname: "JS",
      yearStarted: 2020,
    },
    html: {
      name: "HTML",
      icon: Html5Original,
      shortname: "HTML",
      yearStarted: 2020,
    },
    css: {
      name: "CSS",
      icon: Css3Original,
      shortname: "CSS",
      yearStarted: 2020,
    },
    csharp: {
      name: "C#",
      icon: CsharpOriginal,
      shortname: "C#",
      yearStarted: 2019,
    },
    postgresql: {
      name: "Postgresql",
      icon: PostgresqlOriginal,
      shortname: "PSQL",
      yearStarted: 2021,
    },
  },
  frameworks: {
    react: {
      name: "React",
      icon: ReactOriginal,
      shortname: "React",
      yearStarted: 2021,
    },
    nextjs: {
      name: "Next.js",
      icon: NextjsOriginal,
      shortname: "Next",
      yearStarted: 2022,
    },
    nodejs: {
      name: "Node.js",
      icon: NodejsOriginal,
      shortname: "Node",
      yearStarted: 2021,
    },
    tailwindcss: {
      name: "Tailwind CSS",
      icon: TailwindcssOriginal,
      shortname: "Tailwind",
      yearStarted: 2022,
    },
  },
  tools: {
    neovim: {
      name: "Neovim",
      icon: NeovimOriginal,
      shortname: "Neovim",
      yearStarted: 2023,
    },
    unity: {
      name: "Unity",
      icon: UnityOriginal,
      shortname: "Unity",
      yearStarted: 2019,
    },
    git: {
      name: "Git",
      icon: GitOriginal,
      shortname: "Git",
      yearStarted: 2020,
    },
    figma: {
      name: "Figma",
      icon: FigmaOriginal,
      shortname: "Figma",
      yearStarted: 2021,
    },
    photoshop: {
      name: "Photoshop",
      icon: PhotoshopOriginal,
      shortname: "PS",
      yearStarted: 2015,
    },
  },
};

export const projects = [
  {
    name: "AoTTG 2",
    type: "game",
    img: "/projects/aottggame.webp",
    subheading: "Attack on Titan Community Fan Game",
    description:
      "Contributed as 2D Art Lead, Game Developer, and Web Developer for Attack on Titan Tribute Game 2. Developed game features, designed UI, and created the game's website and API.",
    technologies: [
      technologies.languages.csharp,
      technologies.tools.unity,
      technologies.frameworks.nodejs,
      technologies.languages.postgresql,
    ],
    github: "https://github.com/AoTTG-2",
    liveDemo: "https://aottg2.com",
    ctaLabel: "Play Game",
    yearStarted: 2020,
  },
  {
    name: "AoTTG 2 Website",
    type: "web",
    img: "/projects/aottgweb.webp",
    subheading: "Official Website of AoTTG 2",
    description:
      "Designed and developed the official website for Attack on Titan Tribute Game 2, serving as the main hub for the game's community. The website maintains the game's visual identity while providing an intuitive user experience for both new and existing players.",
    technologies: [
      technologies.languages.typescript,
      technologies.frameworks.react,
      technologies.frameworks.tailwindcss,
      technologies.languages.html,
      technologies.languages.css,
    ],
    github: "https://github.com/AoTTG-2",
    liveDemo: "https://aottg2.com",
    yearStarted: 2024,
  },
  {
    name: "Who's That Pokémon?",
    type: "web",
    img: "/projects/pokemon.webp",
    subheading: "Interactive Pokémon Guessing Game",
    description:
      "A React-based game where players guess Pokémon names as quickly as possible, featuring leaderboards and Redux state management.",
    technologies: [
      technologies.languages.typescript,
      technologies.frameworks.react,
      technologies.languages.html,
      technologies.languages.css,
    ],
    github: "https://github.com/gisketch/pokemon-guessing-game",
    liveDemo: "https://pokemon.gisketch.com",
    yearStarted: 2023,
  },

  {
    name: "COVID: Armageddon",
    type: "game",
    img: "/projects/covid.webp",
    subheading: "Award-winning 2D Platformer Game",
    ctaLabel: "Play Game",
    description:
      "A Unity-based 2D platformer game set in a post-apocalyptic future, where a boy travels back in time to stop COVID. Won the 2021 MCM Youth E-nnovation Summit.",
    technologies: [technologies.languages.csharp, technologies.tools.unity],
    github: "https://github.com/gisketch/covid-armageddon",
    liveDemo: "https://github.com/gisketch/covid-armageddon",
    yearStarted: 2021,
  },
];

function getLearningsText() {
  const learning = ["NextJS", "Colemak-DH"];

  if (learning.length === 0) return "";
  if (learning.length === 1) return learning[0];
  if (learning.length === 2) return `${learning[0]} and ${learning[1]}`;

  return learning.reduce((text, item, index) => {
    if (index === learning.length - 1) {
      return `${text}, and ${item}`;
    }
    return index === 0 ? item : `${text}, ${item}`;
  }, "");
}

export const about = () => {
  const currentYear = new Date().getFullYear();
  const calculateExperience = (yearStarted: number) =>
    currentYear - yearStarted;

  return {
    name: "gisketch",
    realName: "Glenn Jimenez",
    nickname: "Ghegi",
    hobbies: ["Artist", "Guitarist", "Gamer", "Zelda Fan"],
    descriptions: [
      `Been coding for **${calculateExperience(
        2019
      )}+** years, with **${calculateExperience(
        2023
      )}+** years professionally. I love creating stunning websites that leave an impression, making life easier through automation, building cool tools, and crafting fun games.`,
      `Always learning something new; currently exploring ${getLearningsText()}. Code might be my thing, but art and music keep me creative!`,
    ],
    titles: ["Web developer.", "Game developer."],
    work: ["Software Engineer at Lexagle", "Developer at AoTTG 2"],
    location: "Philippines",
    email: "dev@gisketch.com",
    copyrightYear: currentYear,
    yearsOfExperience: calculateExperience(2019),
    preferredLanguage: technologies.languages.typescript,
    preferredIDE: technologies.tools.neovim,
    interests: ["Game Development", "Web Development", "Digital Art", "Music"],
    education: {
      degree: "Electronics Engineering",
      graduationYear: 2023,
    },
  };
};

export const timeline = [
  { year: 2001, event: "Born in the Philippines" },
  {
    year: 2004,
    event: "Introduced to computers and developed a passion for technology",
  },
  { year: 2009, event: "Started creating digital animations as a hobby" },
  { year: 2015, event: "Began learning digital art and graphic design" },
  { year: 2019, event: "Started learning programming with Unity and C#" },
  { year: 2020, event: "Joined AoTTG 2 project as a contributor" },
  {
    year: 2021,
    event: "Began focusing on web development (JavaScript, React)",
  },
  {
    year: 2021,
    event: "Won the MCM Youth E-nnovation Summit with COVID: Armageddon",
  },
  {
    year: 2022,
    event: "Created Zelda GPT-3 Math Parser, won best research paper",
  },
  { year: 2023, event: "Graduated with a degree in Electronics Engineering" },
  {
    year: 2023,
    event: "Started working as a Junior Software Engineer at Lexagle",
  },
  {
    year: 2024,
    event:
      "Continuing to expand fullstack development skills and seeking new opportunities",
  },
];

export const getExperience = (technology) => {
  const currentYear = new Date().getFullYear();
  return currentYear - technology.yearStarted;
};

const achievements = [
  {
    title: "Zelda: GPT-3 Math Parser project",
    subtitle: "Best Research Paper",
    location: "University of Southern Mindanao",
    img: "/resume/zelda.webp",
    stack: ["R&D", "React", "Node.js", "JavaScript"],
    descriptions: [
      "Developed a software that can parse natural language into math expression",
      "Integrated OpenAI's GPT-3 model",
    ],
    month: 5,
    year: 2023,
  },
  {
    title: "COVID: Armageddon",
    subtitle: "Game Development Champion",
    location: "MCM Youth Summit",
    stack: ["C#", "Photoshop"],
    img: "/resume/covid.webp",
    descriptions: [
      `Single-handedly built "COVID: Armageddon," a 2D platformer game in Unity 3D, within a tight deadline of 3 weeks`,
      "Conceptualized and crafted a post-apocalyptic world with captivating visuals and intense gameplay",
      "Served as the coder and artist, managing tight deadlines and juggling academic commitments during exam week",
    ],
    month: 10,
    year: 2021,
    endedMonth: 11,
    endedYear: 2021,
  },
  {
    title: "Datathon Champion",
    stack: ["Python"],
    icon: Code,
    subtitle: "JIECEP National Summit",
    descriptions: [
      "Led a team of three classmates to victory, securing first place in the prestigious national competition",
      "Achieved the highest score by answering correctly and swiftly on 6 out of 6 competition problems",
    ],
    month: 11,
    year: 2022,
  },
  {
    title: "Speedtyping Champion",
    subtitle: "JIECEP Regional Summit",
    icon: KeyboardIcon,
    stack: ["180 WPM (peak)"],
    descriptions: [
      "Maintained an average typing speed of 130 words per minute (wpm)",
    ],
    month: 10,
    year: 2022,
  },
];

const experiences = [
  {
    title: "Lexagle",
    subtitle: "Junior Software Engineer",
    location: "Remote・Singapore",
    img: "/resume/lex.webp",
    stack: [
      "TypeScript",
      "React",
      "MaterialUI",
      "TailwindCss",
      "Kotlin",
      "Springboot",
      "REST",
      "Postgresql",
    ],
    descriptions: [
      "Contributed to the migration of the component library from Material-UI to TailwindCSS, improving maintainability and performance",
      "Developed and maintained RESTful APIs using Kotlin and Spring Boot, implementing database migrations with Flyway",
      "Collaborated with the team on full-stack development tasks, working with React for frontend and PostgreSQL for database management",
      "Participated in code reviews and implemented best practices for both frontend and backend development",
    ],
    month: 8,
    year: 2023,
    isPresent: true,
  },
  {
    title: "AoTTG 2",
    img: "/resume/aottg2.webp",
    subtitle: "Game Dev・Lead Web Dev・Artist",
    location: "Open-source",
    stack: ["C#", "TypeScript", "ExpressJs", "Postgresql"],
    descriptions: [
      "Led the development of the official website and backend infrastructure using TypeScript, Express.js, and PostgreSQL",
      "Designed and implemented a new UI system for the game, creating high-fidelity mockups in Photoshop and implementing them in Unity C#",
      "Spearheaded the development of RESTful APIs for user authentication and game services",
      "Collaborated with the development team to implement new game features and mechanics",
    ],
    month: 6,
    year: 2020,
    isPresent: true,
  },
];

const education = [
  {
    title: "Electronics Engineering",
    subtitle: "University of Southern Mindanao",
    location: "Philippines",
    img: "/resume/usm.webp",
    stack: [
      "Embedded Systems",
      "Python",
      "C++",
      "JavaScript",
      "Circuit Design",
      "Project Management",
      "Technical Writing",
      "Public Speaking",
      "Team Leadership",
    ],
    descriptions: [
      "Developed 10+ automation projects using various microcontrollers and embedded systems",
      "Led multiple thesis projects combining hardware and software solutions",
      "Gained hands-on experience in circuit design, PCB fabrication, and system integration",
      "Collaborated with cross-functional teams on various engineering projects",
      "Presented technical proposals and research findings to faculty and industry panels",
    ],
    month: 6,
    year: 2019,
    endedMonth: 6,
    endedYear: 2023,
  },
  {
    title: "CS50x",
    subtitle: "Introduction to Computer Science",
    location: "Harvard Online",
    img: "/resume/cs50.webp",
    stack: [
      "C",
      "Python",
      "SQL",
      "HTML/CSS",
      "JavaScript",
      "Flask",
      "Algorithms",
      "Data Structures",
      "Web Development",
    ],
    descriptions: [
      "Mastered fundamental programming concepts through hands-on problem sets",
      "Developed understanding of algorithms, data structures, and computational thinking",
      "Built web applications using Python Flask framework",
      "Completed projects covering various domains: from low-level programming to web development",
      "Learned database design and management using SQL",
    ],
    month: 6,
    year: 2023,
  },
];

const intro = `I'm a passionate self-taught developer with a strong focus on **TypeScript** and modern frontend development, using tools like **React**, **Next.js**, and **TailwindCSS**. While frontend is my forte, I'm comfortable working across the full stack - I've built backend services with **Express.js** and have experience with **C#** and **Kotlin**. Being an artist at heart, I have a keen eye for design and love creating beautiful, intuitive user experiences. I'm always eager to expand my skillset and tackle new challenges, whether that's learning new technologies or solving complex problems.`;

const capabilities = {
  language: ["Tagalog - Native", "English - C1"],
  programmingLanguages: [
    "TypeScript",
    "JavaScript",
    "C#",
    "Kotlin",
    "HTML",
    "CSS",
    "Markdown",
  ],
  frameworks: [
    "React",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "Framer Motion",
    "Express.js",
    "Unity",
  ],
  services: ["GitHub", "Vercel", "Netlify", "AWS"],
  tools: ["Neovim", "Git", "Figma", "Photoshop"],
};

const interests = [
  `Beyond coding, I'm a **digital artist** at heart who's been **drawing since childhood**. My journey with computers started incredibly early - I was just **3 years old** when I first laid hands on a keyboard, sparking a lifelong passion for technology. I love bringing ideas to life through **animation** and have a deep appreciation for **game design**, especially puzzle-adventure games. **The Legend of Zelda** series holds a special place in my heart as my all-time favorite!`,
  `I'm also a bit of a keyboard enthusiast - I can type efficiently in both **QWERTY** and **Colemak-DH** layouts. When I'm not coding or drawing, you'll find me strumming my **guitar** or playing simple tunes on the **keyboard**. I love how these creative outlets - whether it's coding, art, or music - all flow together in their own unique way!`,
];

export const resumeData = {
  achievements,
  experiences,
  education,
  intro,
  capabilities,
  interests,
};

export const socialMedia = [
  {
    platform: "GitHub",
    icon: Github,
    username: "gisketch",
    url: "https://github.com/gisketch",
  },
  {
    platform: "LinkedIn",
    icon: Linkedin,
    username: "glennjimenez",
    url: "https://www.linkedin.com/in/ghegijmnz/",
  },
  {
    platform: "Twitter",
    icon: Twitter,
    username: "gisketch",
    url: "https://twitter.com/gisketch",
  },
  {
    platform: "Instagram",
    icon: Instagram,
    username: "gisketch",
    url: "https://www.instagram.com/gisketch",
  },
  {
    platform: "YouTube",
    icon: Youtube,
    username: "gisketch",
    url: "https://www.youtube.com/@gisketch",
  },
];

export const stats = {
  github: {
    repositories: 50,
    stars: 200,
    followers: 100,
    contributions: 1500,
  },
  youtube: {
    subscribers: 1000,
    views: 50000,
  },
  instagram: {
    followers: 500,
    posts: 100,
  },
};

export const testimonials = [
  {
    name: "Tony TwoHands (Braden Marshall)",
    title: "Manager at AoTTG 2",
    quote:
      "An **incredibly agreeable** lad whose **work ethic knows no bounds**. Made a **huge impact** on the team and we wouldn't be half of what we are without him. If I was legally able to pay this man, he would have **drained my bank account**.",
  },
  {
    name: "Justine Paul Alvaro",
    title: "Software Engineer",
    quote:
      "Glenn was **great to work with** at Lexagle. As a Junior Software Engineer, he **picked up new ideas and technologies very quickly**. Glenn is **excellent at solving problems and writing code**. I **highly recommend** him for any future jobs.",
  },
  {
    name: "Christian Razul",
    title: "Software Engineer",
    quote:
      "Glenn is an **unforgettable coworker** for all the good reasons. He's easy to work with and an excellent developer, consistently delivering clean, well-documented code. His **attention to detail is like no other**, and he has a remarkable ability to explain complex concepts to stakeholders at all levels.",
  },
];

export const getRandomFunFact = (funFact) => {
  let funFacts = [
    "I was the first senior artist in the AoTTG 2 skinning community.",
    "I learned how to use the computer at the age of 3.",
    "I did most of my animations with only a mouse.",
    "I play the keyboard and the guitar.",
  ];

  funFacts = funFacts.filter((fact) => fact !== funFact);

  return funFacts[Math.floor(Math.random() * funFacts.length)];
};

export const repositories = [
  {
    name: "AoTTG 2 Website",
    language: "TypeScript",
    description:
      "Designed and developed the official website for Attack on Titan Tribute Game 2, serving as the main hub for the game's community. The website maintains the game's visual identity while providing an intuitive user experience for both new and existing players.",
    url: "https://github.com/AoTTG-2/AoTTG2-Website",
    demo: "https://aottg2.com",
    owner: "AoTTG-2",
    repo: "AoTTG2-Website",
  },
  {
    name: "Who's that Pokemon",
    language: "TypeScript",
    description:
      "A React-based game where players guess Pokémon names as quickly as possible, featuring leaderboards and Redux state management.",
    url: "https://github.com/gisketch/pokemon-guessing-game",
    demo: "https://pokemon.gisketch.com",
    owner: "gisketch",
    repo: "pokemon-guessing-game",
  },
  {
    name: "AoTTG 2",
    language: "C#",
    description:
      "Contributed as 2D Art Lead, Game Developer, and Web Developer for Attack on Titan Tribute Game 2. Developed game features, designed UI, and created the game's website and API.",
    url: "https://github.com/AoTTG-2/AoTTG-2-Unity",
    demo: "https://aottg2.com",
    owner: "AoTTG-2",
    repo: "AoTTG2-Unity",
  },
  {
    name: "COVID: Armageddon",
    language: "C#",
    description:
      "COVID Armageddon is a 2D platformer game developed in Unity 3D, and was declared the champion of the 2021 MCM Youth E-nnovation Summit.",
    url: "https://github.com/gisketch/ZELDA-math-parser",
    demo: "https://github.com/gisketch/ZELDA-math-parser",
    owner: "gisketch",
    repo: "covid-armageddon",
  },
  {
    name: "ZELDA: Math Parser",
    language: "JavaScript",
    description:
      "Zelda is a natural language mathematical expression parser powered by OpenAI's GPT-3 language model. It is designed to work on a touch screen display used in Raspberry Pi. The application is built in JavaScript and ReactJS.",
    url: "https://github.com/gisketch/ZELDA-math-parser",
    owner: "gisketch",
    repo: "ZELDA-math-parser",
  },
  {
    name: "Complete Uniform Detection",
    language: "Python",
    description:
      "The software employs the YOLOv8 algorithm to analyze video footage captured by a camera, enabling it to determine whether students at the University of Southern Mindanao (USM) are wearing complete or incomplete uniforms.",
    url: "https://github.com/gisketch/complete-uniform-detection-YOLOv8",
    owner: "gisketch",
    repo: "complete-uniform-detection-YOLOv8",
  },
];
