import
{
  mobile,
  backend,
  creator,
  web,
  unity,
  unreal,
  csharp,
  threejs,
  cocos,
  cloud,
  typescript,
  python,
  nodejs,
  git,
  figma,
  baazi,
  tooliqa,
  byjus,
  holosuit,
  holoprojector,
  create,
  xplore
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Unity Developer",
    icon: web,
  },
  {
    title: "Unreal Engine Developer",
    icon: mobile,
  },
  {
    title: "Cocos / Typescript Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Cocos Creator",
    icon: cocos,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "cloud",
    icon: cloud,
  },


];

const experiences = [
  {
    title: "Software Engineer II",
    company_name: "Baazi Games (Pokerbaazi)",
    icon: baazi,
    iconBg: "#FFFFFF",
    date: "Mar 2024 - Present",
    points: [
      "currently working on Pokerbaazi Global Mobile app (React + Unity)",
      "built and deployed Pokerbaazi Upgrade 2025 for desktop(Electron + Unity)",
      "worked on the native side of the app, C++ and swift"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tooliqa Innovations LLP",
    icon: tooliqa,
    iconBg: "#FFFFFF",
    date: "Dec 2022 - Feb 2024",
    points: [
      "currently working on Twinn Create app, an end to end solution for Architects, from Floor Plan Creation to photorealistic rendering stage to presentation and visualization in real-time 3D",
      "implementing half-edge data structure from scratch, which drives the core of the app, solved many complex problems along with various optimizations, fixes and improvements",
      "worked on real-time computational geometry and libraries, Procedural Toolkit, UI Toolkit, C# Libraries, Extensions and Plugins",
      "calculation of parametric models, and made the core features of the application which involve manipulation on mesh level like extrude, flip etc. during runtime",
      "also worked on shader graph, and UI Toolkit, parsing and serializing data, and many more interesting features of the application"
    ],
  },
  {
    title: "Game Developer",
    company_name: "Think & Learn Pvt. Ltd. | BYJUS",
    icon: byjus,
    iconBg: "#FFFFFF",
    date: "Jun 2021 - Nov 2022",
    points: [
      "Developed and deployed 40+ educational games and interactive learning experiences using the framework, using Cocos Creator and Typescript",
      "2D - developed learning games for the Explore journey in the BYJU's app. Worked on 2D animation and UI/UX interactions as well as handled user, edge cases",
      "3D - developed Interactive Learning Experiences ( ILE's) with features like isolate, select, rotate, label.",
      "worked on particle effects and shaders in both 2D and 3D environments as well as game optimization"
    ],
  },
  {
    title: "Software Developer Engineer",
    company_name: "Holoworld | Holosuit PTE",
    icon: holosuit,
    iconBg: "#FFFFFF",
    date: "Aug 2021 - Jun 2021",
    points: [
      "shipped Interactive motion controlled 3D games. These were entirely controlled by Microsoft Kinect, used by Sharda Vilas University and other institutions in Mysuru for classroom teaching",
      "created automation tool to add interactions which took a week to create, simplified the process to a couple of days",
      "developed stepwise automation for conducting different kinds of experiments like titration, separation etc. with a 3D Avatar",
      "worked on Realtime 3D Extended Reality Applications with sensors",
      "Pose Estimation and Motion Tracking with Kinect V2 for creating applications and games, worked on Augmented Reality, created various modules using AR Core and AR Foundation for WebGL",
      "worked on Inverse Kinematics and Rigging of 3D Avatars, also developed editor scripts and tools for Unity3D using C#"
      
    ],
  },

  {
    title: "Student Ambassador",
    company_name: "Unity Technologies",
    icon: unity,
    iconBg: "#FFFFFF",
    date: "2018 - May 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Twinn Create",
    description: "The end to end solution for Architects, from Floor Plan Creation to photorealistic rendering stage in real-time 3D",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "csharp",
        color: "green-text-gradient",
      },
      {
        name: "hlsl",
        color: "pink-text-gradient",
      },
    ],
    image: create,
    source_code_link: "https://twinn.pro/",
  },
  {
    name: "XPLORE Journey Byjus",
    description:
      "Xplore - part of BYJU’S App, was introduced to make the learning concepts fun, engaging and personalised for everyone",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "cocos-creator",
        color: "pink-text-gradient",
      },
    ],
    image: xplore,
    source_code_link: "https://www.youtube.com/watch?v=LtVm4Hsrp2E",
  },
  {
    name: "Holoprojector Apps",
    description:
      "HoloProjector not only provides you with a holographic display but also lets the user interact with the content in 3D space.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "kinect",
        color: "green-text-gradient",
      },
      {
        name: "ik",
        color: "pink-text-gradient",
      },
    ],
    image: holoprojector,
    source_code_link: "https://www.holoworld.one/holoprojector",
  },
];

export { services, technologies, experiences, testimonials, projects };
