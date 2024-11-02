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
    // expressjs: {
    //   name: "Express.js",
    //   icon: ExpressOriginal,
    //   shortname: "Express",
    //   yearStarted: 2021,
    // },
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
    // vscode: {
    //   name: "Visual Studio Code",
    //   icon: VscodeOriginal,
    //   shortname: "VS Code",
    //   yearStarted: 2023,
    // },
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
    img: "/projects/aottgweb.webp", //TODO: new shots
    subheading: "Open Source Game Development",
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
    github: "https://github.com/gisketch/pokemon-guess",
    liveDemo: "https://pokemon-guess.gisketch.com",
    yearStarted: 2022,
  },
  //   {
  //     name: "Zelda: GPT-3 Math Parser",
  //     type: "web",
  //     subheading: "Natural Language Mathematical Expression Parser",
  //     description:
  //       "An AI-powered application that parses natural language into mathematical expressions using GPT-3. Won best research paper at the university.",
  //     technologies: ["JavaScript", "React", "GPT-3 API"],
  //     github: "https://github.com/gisketch/zelda-gpt3-math",
  //     liveDemo: "https://zelda-math.gisketch.com",
  //     yearStarted: 2022,
  //   },
  {
    name: "COVID: Armageddon",
    type: "game",
    img: "/projects/covid.webp",
    subheading: "Award-winning 2D Platformer Game",
    description:
      "A Unity-based 2D platformer game set in a post-apocalyptic future, where a boy travels back in time to stop COVID. Won the 2021 MCM Youth E-nnovation Summit.",
    technologies: [technologies.languages.csharp, technologies.tools.unity],
    github: "https://github.com/gisketch/covid-armageddon",
    liveDemo: "https://gisketch.itch.io/covid-armageddon",
    yearStarted: 2021,
  },
];

function getLearningsText() {
  const learning = ["NextJS", "TODO"];

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

export const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 80 },
  { name: "Game Development", level: 80 },
  { name: "UI/UX Design", level: 90 },
  { name: "Digital Art", level: 95 },
  { name: "Open Source Contribution", level: 75 },
];

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

export const resumeData = { achievements, experiences, education };

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
    url: "https://www.linkedin.com/in/glennjimenez/",
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
    url: "https://www.youtube.com/gisketch",
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
    name: "John Doe",
    position: "Project Manager at AoTTG 2",
    content:
      "Glenn's contributions to AoTTG 2 have been invaluable. His skills in both game development and art have significantly improved our project.",
  },
  {
    name: "Jane Smith",
    position: "Professor at University",
    content:
      "Glenn's research on GPT-3 application in mathematical parsing was innovative and well-executed. It's no surprise it won the best paper award.",
  },
];

export const blogPosts = [
  {
    title: "Optimizing React Performance",
    summary:
      "Learn techniques to improve your React application's performance.",
    date: "2024-03-15",
    url: "/blog/optimizing-react-performance",
  },
  {
    title: "The Art of Game UI Design",
    summary: "Insights from my experience designing UI for AoTTG 2.",
    date: "2024-02-28",
    url: "/blog/game-ui-design",
  },
];

export const currentFocus = () => {
  return {
    learning: ["GraphQL", "AWS", "Machine Learning"],
    improving: ["System Design", "Algorithm Optimization"],
    exploring: ["Web3 Technologies", "AR/VR Development"],
  };
};

export const getRecentActivity = async () => {
  // This function could fetch recent GitHub activity, latest blog posts, or recent art uploads
  // You would implement the actual API calls here
  return {
    githubActivity: [
      { type: "commit", repo: "AoTTG-2", date: "2024-03-20" },
      { type: "pull request", repo: "personal-portfolio", date: "2024-03-18" },
    ],
    latestArtwork: {
      title: "Cyberpunk City",
      date: "2024-03-15",
      url: "https://instagram.com/p/artwork123",
    },
    latestBlogPost: blogPosts[0],
  };
};

export const getRandomFunFact = (funFact) => {
  let funFacts = [
    "I can play the Zelda theme on both guitar and keyboard!",
    "My first game was made in MS Paint and PowerPoint when I was 10.",
    "I once stayed up for 48 hours straight to finish a game jam project.",
    "I've contributed to open-source projects in 5 different programming languages.",
    "My GitHub contribution graph once spelled out 'HELLO' over a month of commits.",
  ];

  funFacts = funFacts.filter((fact) => fact !== funFact);

  return funFacts[Math.floor(Math.random() * funFacts.length)];
};
