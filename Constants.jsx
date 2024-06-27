export const BACKGROUND_COLOR = "#151925";
export const TEXT_COLOR = "#ffffff";
export const ACCENT_COLOR = "#05c4bc";
export const SECOND_BG_COLOR = "#323846";
export const BOXES_COLOR = "#485373";
export const ICON_BACKGROUND_COLOR = "#5c6a93";
export const ICONS_SIZE = "1.8em";
export const PROJECTS_ICONS_SIZE = "1.2em" 
import { Box } from "@mui/material";
import { center } from "./Helpers";
import "./src/index.css";


export const SKILLS_FIRST_ROW = [
  {
    image: "./HTML.png",
    text: "HTML",
    key: 1,
  },
  {
    image: "./CSS.png",
    text: "CSS",
    key: 2,
  },
  {
    image: "./JAVASCRIPT.png",
    text: "JavaScript",
    key: 3,
  },
  {
    image: "./BOOTSTRAP.png",
    text: "Bootstrap",
    key: 4,
  },
];
export const SKILLS_SECOND_ROW = [
  {
    image: "./REACT.svg",
    text: "React js",
    key: 5,
  },
  {
    image: "./MUI.png",
    text: "Material UI",
    key: 6,
  },
  {
    image: "./TAILWIND.svg",
    text: "Tailwind CSS",
    key: 7,
  },
  {
    image: "./REDUX.svg",
    text: "Redux",
    key: 8,
  },
];
export const SKILLS_THIRD_ROW = [
  {
    image: "./TYPESCRIPT.svg",
    text: "TypeScript",
    key: 9,
  },
  {
    image: "./EXPO.svg",
    text: "Expo go",
    key: 10,
  },
  {
    image: "./NETLIFY.png",
    text: "Netlify",
    key: 11,
  },
  {
    image: "./REACT.svg",
    text: "React Native",
    key: 12,
  },
];
export const SKILLS_FOURTH_ROW = [
  {
    image: "./GIT.png",
    text: "Git",
    key: 13,
  },
  {
    image: "./GITHUB.png",
    text: "Github",
    key: 14,
  },
  {
    image: "./NPM.png",
    text: "Netlify",
    key: 15,
  },
  {
    image: "./REACT.svg",
    text: "JSX",
    key: 16,
  },
];

const SKILLS_ICONS_SIZE = "3em";

export const SKILLS = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SKILLS_ICONS_SIZE}
        height={SKILLS_ICONS_SIZE}
        viewBox="0 0 256 256"
      >
        <path
          fill="white"
          d="M67.84 92.61L25.37 128l42.47 35.39a6 6 0 1 1-7.68 9.22l-48-40a6 6 0 0 1 0-9.22l48-40a6 6 0 0 1 7.68 9.22m176 30.78l-48-40a6 6 0 1 0-7.68 9.22L230.63 128l-42.47 35.39a6 6 0 1 0 7.68 9.22l48-40a6 6 0 0 0 0-9.22m-81.79-89a6 6 0 0 0-7.69 3.61l-64 176a6 6 0 0 0 3.64 7.64a6.2 6.2 0 0 0 2 .36a6 6 0 0 0 5.64-3.95l64-176a6 6 0 0 0-3.59-7.69Z"
        ></path>
      </svg>
    ),
    heading: "Web Development",
    description:
      "I provide web development services using HTML, CSS, JavaScript, and React.js. I create responsive, user-friendly websites, from simple landing pages to complex platforms",
    key: 1,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SKILLS_ICONS_SIZE}
        height={SKILLS_ICONS_SIZE}
        viewBox="0 0 512 512"
      >
        <path
          d="M128 64l39.667 72.102L16 288l197.604 192 163.328-160 58.33-12.307L160 32l-32 32zm197.131 224H104.857L215 177.863 325.131 288z"
          fill="white"
        ></path>
        <path
          d="M435.262 307.693s-60.734 66.179-60.732 99.207c0 33.028 27.192 59.803 60.731 59.801 33.548.002 60.74-26.772 60.739-59.801.001-33.028-60.738-99.207-60.738-99.207z"
          fill="white"
        ></path>
      </svg>
    ),
    heading: "UI/UX Designing",
    description:
      "I design visually appealing interfaces to enhance user satisfaction. By focusing on user behavior and the latest design trends, I ensure your website or app is both functional and enjoyable to use.",
    key: 2,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SKILLS_ICONS_SIZE}
        height={SKILLS_ICONS_SIZE}
        viewBox="0 0 256 256"
      >
        <path
          fill="white"
          d="M207.06 80.67c-.74-.74-1.49-1.46-2.24-2.17l24.84-24.84a8 8 0 0 0-11.32-11.32l-26 26a111.43 111.43 0 0 0-128.55.19L37.66 42.34a8 8 0 0 0-11.32 11.32L51.4 78.72A113.38 113.38 0 0 0 16 161.13V184a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33M92 160a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
        ></path>
      </svg>
    ),
    heading: "App Development",
    description:
      "Specializing in React Native, I develop engaging mobile apps for Android. I deliver high-quality, functional apps that offer a seamless user experience, turning your ideas into reality.",
    key: 3,
  },
];

export const EXPERIENCE = [
  {
    key: 1,
    icon:  <Box
    width={60}
    height={60}
    data-aos="zoom-in"
    data-aos-duration="500"
    borderRadius={100}
    bgcolor={BOXES_COLOR}
    style={{ boxShadow: "3px 3px 20px rgb(5, 196, 188)" }}
    {...center}
  >
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        d="M21 17v-6.9L12 15L1 9l11-6l11 6v8zm-9 4l-7-3.8v-5l7 3.8l7-3.8v5z"
      ></path>
    </svg>
  </Box>,
    date: "2019 - 2024",
    title: "Self Experience",
    subtitle: "Not Employed",
    description: `Driven Frontend and Mobile Applications Developer with a proven track
          record of creating responsive, visually appealing web pages and mobile
          apps using HTML5, CSS, and JavaScript, and react native Expertized in
          React.js and Bootstrap framework, I excel in translating UX/UI designs
          into functional applications.Over the past 2-3 years, I have
          independently developed numerous projects, honing my skills and
          gaining valuable self-experience. Although I haven't worked in a
          company yet, I am eager to contribute, grow, and earn through
          professional opportunities.`,
  },
];
export const EDUCATION = [
  {
    key: 1,
    icon: (
      <img 
       data-aos="zoom-in"
        className="skulImage" src="dareArqam.png" loading="lazy" alt="Loading..."/>
    ),
    date: "2011 - 2022",
    title: "Dar e Arqam School, Lahore, Pakistan",
    subtitle: "Matriculation (X), Computer Science",
    description: `I studied at Dar-e-Arqam School in Lahore for 10 years, excelling in both Computer Science and various science subjects. I achieved top grades (1036/1100 (81%)  in Matric and 484/495 (95%) in 9th Grade) and frequently held the top position in my class. As a member of the school cricket team, I won several awards. This period marked the beginning of my journey as a web developer.`,
  },
  {
    key: 2,
    icon: (
      <img  
      data-aos="zoom-in"
       className="skulImage" src="college1.png" loading="lazy" alt="Loading..."/>
    ),
    date: "2022 - 2024",
    title: "Punjab Group of Colleges, Lahore",
    subtitle: "Fsc (XII), ICS with Computer, Physics, and Mathematics",
    description: `I studied at Punjab Group of Colleges in Lahore, Pakistan, from 2022 to 2024, completing my Intermediate degree in Fsc (XII), ICS with a combination of Computer, Physics, and Maths. I achieved 458/560 (82%) marks in the first year and often held the top position in my class. It was during this time that I began studying computer languages practically, further advancing my skills as a web developer.`,
  }
];

export const TABS = [
  {
    key:1,
    title: "All",
    value:"All"
  },
  {
    key:2,
    title: "Web App's",
    value:"Web"
  },
  {
    key:3,
    title: "Mobile App's",
    value:"Mobile"
  },
]
