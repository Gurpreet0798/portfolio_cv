import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Gurpreet Kaur",
  initials: "GK",
  location: "Sadhaura, Haryana, India",
  locationLink: "https://www.google.com/maps/place/Sadhaura",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, JavaScript, React, Node.js, and React-Native. Currently I am working on all these Tech-Stacks and building very nice and interactive products.",
  avatarUrl: "https://avatars.githubusercontent.com/u/118358763?s=400&u=52bb670ac203ac25c482f6ca52c105e9a5186b4f&v=4",
  // personalWebsiteUrl: "https://jarocki.me",

  contact: {
    email: "gurpreetkaur07988@gmail.com",
    tel: "+91 7988201983",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Gurpreet0798",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gurpreet-kaur-a9bb45253/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/gurpreet07988",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Chitkara University Institute of Engineering and Technology.",
      degree: "Bachelor's Degree in Computer SCience and Engineering.",
      start: "2022",
      end: "2026",
    },
    // {
    //   school: "St. Francis Academy, Kala-Amb, Haryana.",
    //   // degree: "Bachelor's Degree in Computer SCience and Engineering.",
    //   start: "2007",
    //   end: "2022",
    // },
  ],
  work: [
    {
      company: "The Xiting Way",
      link: "https://www.thexitingway.com/",
      badges: ["Intern"],
      title: "DevRel",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Leading to manage the relationship between development and client side. Technologies: React, TypeScript, Node.js, React-Native, Javascript.",
    },
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Led the Android team and developed apps for major Polish companies like LOT, Polskie Radio, Agora, and PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Developed and tested software for LTE base stations",
    // },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "React-Native",
    "Bash",
    "Linux",
  ],
  projects: [
    {
      title: "WhatsApp Dev Meme Bot",
      techStack: [
        "Next JS",
        "TypeScript",
        "React",
        "Node.js",
        "Twilio",
        "Reddit API",
      ],
      description:
        "This project is a WhatsApp bot built using Twilio and the Reddit API, designed to send development memes using linuxmemes directly to your WhatsApp account. With just a simple message, you can receive a fresh dose of humor and developement fun facts right in your chats.",
      // logo: ParabolLogo,
      link: {
        label: "https://github.com/The-Xiting-Way/whatsappDevBot",
        // href: "https://parabol.co/",
      },
    },
    {
      title: "DevXClub",
      techStack: [
        "Next JS",
        "TypeScript",
        "React JS",
        "Node.js",
        "JavaScript",
        "TailwindCSS",
      ],
      description:
        "DevXClub is where you can learn and grow. We have a wide range of resources and tutorials to help you get started with your journey. We have a wide range of projects and hackathons to help you get started with your journey. We have a wide range of resources and tutorials to help you get started with your journey.",
      // logo: EvercastLogo,
      link: {
        label: "https://github.com/Gurpreet0798/DevX",
        href: "https://devxclub.vercel.app/",
      },
    },
    {
      title: "Real Estate",
      techStack: [
        "Side Project",
        "JavaScript",
        // "Next.js",
        "Vite",
        "React",
        "Node.js",
        "TailwindCSS",
        // "GraphQL",
        // "WebRTC",
      ],
      description: "This project is a comprehensive real estate website built using React for the front end and Firebase for authentication. It offers a wide range of features to facilitate the buying, selling, and renting of properties. This platform aims to provide an intuitive and user-friendly experience for users, including homebuyers, renters, real estate agents, and property owners.",
      // logo: ConsultlyLogo,
      link: {
        label: "https://github.com/Gurpreet0798/Real-Estate",
        // href: "https://consultly.com/",
      },
    },
    {
      title: "Pizza Ordering App",
      techStack: ["Side Project", "TypeScript", "Next.js", "SupaBase", "Node JS"],
      description:
        "A online pizza ordering food app with many functionalities in frontend and data storage in backend and delivery options also.",
      // logo: MonitoLogo,
      // link: {
      //   label: "monito.dev",
      //   href: "https://monito.dev/",
      // },
    },
    {
      title: "Personal Profile",
      techStack: ["Side Project", "Next.js"],
      description:
        "Personal website and Portfolio.",
      // logo: JarockiMeLogo,
      link: {
        label: "https://github.com/Gurpreet0798/Gurpreet0798",
        // href: "https://jarocki.me/",
      },
    },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers, and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description: "Howdy is a place for joining communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
