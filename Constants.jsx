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

export const INSTAGRAM = () =>  <svg
xmlns="http://www.w3.org/2000/svg"
width={ICONS_SIZE}
height={ICONS_SIZE}
viewBox="0 0 24 24"
>
<path
  fill={ACCENT_COLOR}
  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
></path>
</svg>;

export const LINKEDIN = () => <svg
xmlns="http://www.w3.org/2000/svg"
width={ICONS_SIZE}
height={ICONS_SIZE}
viewBox="0 0 24 24"
>
<path
  fill={ACCENT_COLOR}
  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
></path>
</svg>
export const GITHUB = () => <svg
xmlns="http://www.w3.org/2000/svg"
width={ICONS_SIZE}
height={ICONS_SIZE}
viewBox="0 0 24 24"
>
<path
  fill={ACCENT_COLOR}
  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
></path>
</svg>;

export const YOUTUBE = () => <svg
xmlns="http://www.w3.org/2000/svg"
width={ICONS_SIZE}
height={ICONS_SIZE}
viewBox="0 0 24 24"
>
<path
  fill={ACCENT_COLOR}
  d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
></path>
</svg>;

export const ViewIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width={PROJECTS_ICONS_SIZE} height={PROJECTS_ICONS_SIZE} viewBox="0 0 24 24"><path fill={ACCENT_COLOR} d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.35 0-6.113-1.8t-4.362-4.75q-.125-.225-.187-.462t-.063-.488t.063-.488t.187-.462q1.6-2.95 4.363-4.75T12 4t6.113 1.8t4.362 4.75q.125.225.188.463t.062.487t-.062.488t-.188.462q-1.6 2.95-4.362 4.75T12 19m0-2q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6T6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17"></path></svg>

export const DesktopIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width={PROJECTS_ICONS_SIZE} height={PROJECTS_ICONS_SIZE} viewBox="0 0 24 24"><path fill={ACCENT_COLOR} d="M10 19v-2H4q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.587 1.413T20 17h-6v2h1q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19zm-6-4h16V5H4zm0 0V5z"></path></svg>;

export const ICONS_ARRAY = [
  {
    icon: <INSTAGRAM/>,
    key: 1,
    href: "https://www.instagram.com/codepalace144/",
  },
  {
    icon: <LINKEDIN/>,
    key: 2,
    href: "https://www.linkedin.com/in/talha-shiekh-a99b4b313/",
  },
  {
    icon: <GITHUB/>,
    key: 3,
    href: "https://github.com/Talha12Shiekh",
  },
  {
    icon: <YOUTUBE/>,
    key: 4,
    href: "https://www.youtube.com/@codepalace-or3vq",
  },
];

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

const MOBILE_PROJECTS = [
  {
    key: 1,
    image:"WhatsappCloneTitleImage.png",
    viewImages:[],
    title:"Whatsapp Clone",
    description:"Developed a comprehensive WhatsApp clone in frontend using React Native, replicating key functionalities to enhance user experience. The app includes robust chat management features, allowing users to add, delete, search, pin,filter and archive chats with ease. The messaging UI closely mirrors that of WhatsApp, providing a familiar and intuitive interface for users. Additionally, I implemented message reactions, enabling users to react to messages with emojis, and included features to star and pin important messages for quick access The app also features a call UI, designed to resemble the WhatsApp calling experience and much more This project demonstrates my proficiency in mobile app development using React Native",
    codeLink:"https://github.com/Talha12Shiekh/WhatsappClone",
    live:"",
    liveDisabled:true,
    status:"Working",
    skills:["React Js","React Native","JSX","NPM","JavaScript","Expo"],
  },
  {
    key: 2,
    image:"",
    viewImages:[],
    title:"Mobile Calculator",
    description:"Developed a feature-rich calculator app using React Native, designed to perform complex arithmetic calculations with ease. The app offers a user-friendly interface similar to an Android calculator, including a sidebar for viewing calculation history. Users can save and restore calculations from history, delete history, and highlight important symbols during calculations. This project highlights my skills in mobile app development, focusing on creating intuitive and functional user interfaces.",
    codeLink:"https://github.com/Talha12Shiekh/CALCULATOR",
    live:"",
    liveDisabled:true,
    status:"Completed",
    skills:["React Js","React Native","JSX","NPM","JavaScript","Expo"],
  },
  {
    key: 3,
    image:"",
    viewImages:[],
    title:"Students App",
    description:"_____",
    codeLink:"https://github.com/Talha12Shiekh/STUDENTS-APP",
    live:"",
    liveDisabled:true,
    status:"Completed",
    skills:["React Js","React Native","JSX","NPM","JavaScript","Expo"],
  },
  {
    key: 4,
    image:"",
    viewImages:[],
    title:"Small Applications UI",
    description:"In addition to my major projects, I have developed several small application UIs using React Native, for example Gym App, Travel App, and Food App. These apps feature smooth and intuitive user interfaces, showcasing my expertise in React Native. Each app is designed to provide an excellent user experience, with the Gym App focusing on fitness routines, the Travel App offering travel planning and exploration features, and the Food App presenting a seamless food ordering and recipe browsing experience. These projects highlight my ability to create polished and functional mobile app interfaces.",
    codeLink:"https://github.com/Talha12Shiekh/Small-Applications-UI-",
    live:"",
    liveDisabled:true,
    status:"Completed",
    skills:["React Js","React Native","JSX","NPM","JavaScript","Expo"],
  },
]

const WEB_PROJECTS = [
  {
    key: 5,
    image:"",
    viewImages:[],
    title:"Personal Portflio",
    description:"___",
    codeLink:"https://github.com/Talha12Shiekh/Portfolio",
    live:"https://talhawebsite.netlify.app/",
    liveDisabled:false,
    status:"Completed",
    skills:["HTML","CSS","NPM","JavaScript","Netlify"],
  },
  {
    key: 6,
    image:"",
    viewImages:[],
    title:"Clothing Website",
    description:"___",
    codeLink:"https://github.com/Talha12Shiekh/ClothingWebsite",
    live:"https://khurramclothing.netlify.app/",
    liveDisabled:false,
    status:"Completed",
    skills:["React Js","JSX","NPM","JavaScript","Bootstrap","Netlify"],
  },
  {
    key: 7,
    image:"",
    viewImages:[],
    title:"Notes App",
    description:"___",
    codeLink:"https://github.com/Talha12Shiekh/REACT_NOTES_APP",
    live:"https://tknotesapp.netlify.app/",
    liveDisabled:false,
    status:"Completed",
    skills:["React Js","JSX","NPM","JavaScript","Redux","Netlify","CSS"],
  },
  {
    key: 8,
    image:"",
    viewImages:[],
    title:"Text Processor",
    description:"___",
    codeLink:"https://github.com/Talha12Shiekh/TextUtils-React-",
    live:"",
    liveDisabled:true,
    status:"Completed",
    skills:["React Js","JSX","NPM","JavaScript","Bootstrap","Netlify"],
  },
  {
    key: 9,
    image:"",
    viewImages:[],
    title:"Quizz App",
    description:"___",
    codeLink:"https://github.com/Talha12Shiekh/REACT_QUIZZ_APP",
    live:"https://tkquizzapp.netlify.app/",
    liveDisabled:false,
    status:"Completed",
    skills:["React Js","JSX","CSS","NPM","JavaScript","Netlify"],
  },
]
