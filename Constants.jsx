export const BACKGROUND_COLOR = "#151925";
export const TEXT_COLOR = "#ffffff";
export const ACCENT_COLOR = "#05c4bc";
export const SECOND_BG_COLOR = "#323846";
export const BOXES_COLOR = "#485373";
export const ICON_BACKGROUND_COLOR = "#5c6a93";
export const PROJECTS_SKILL_COLOR = "#50609133";
export const ICONS_SIZE = "1.8em";
export const PROJECTS_ICONS_SIZE = "1.2em" 
import { Box } from "@mui/material";
import { center } from "./Helpers";
import "./src/index.css";
import {Instagram,LinkedIn,GitHub,YouTube} from "@mui/icons-material";

import CALC1 from "/CALCULATOR-IMAGES/CALC-1-IMG.jpeg"
import CALC2 from "/CALCULATOR-IMAGES/CALC-2-IMG.jpeg"
import CALC3 from "/CALCULATOR-IMAGES/CALC-3-IMG.jpeg"
import CALC4 from "/CALCULATOR-IMAGES/CALC-4-IMG.jpeg"
import CALC5 from "/CALCULATOR-IMAGES/CALC-5-IMG.jpeg"
import CALC6 from "/CALCULATOR-IMAGES/CALC-6-IMG.jpeg"


import STUD1 from "/STUDENTS-APP-IMAGES/STUDENT-APP-IMG-1.jpeg"
import STUD2 from "/STUDENTS-APP-IMAGES/STUDENT-APP-IMG-2.jpeg"
import STUD3 from "/STUDENTS-APP-IMAGES/STUDENT-APP-IMG-3.jpeg"
import STUD4 from "/STUDENTS-APP-IMAGES/STUDENT-APP-IMG-4.jpeg"
import STUD5 from "/STUDENTS-APP-IMAGES/STUDENT-APP-IMG-5.jpeg"
import STUD6 from "/STUDENTS-APP-IMAGES/STUDENT-APP-IMG-6.jpeg"
import STUD7 from "/STUDENTS-APP-IMAGES/STUDENT-APP-IMG-7.jpeg"
import STUD8 from "/STUDENTS-APP-IMAGES/STUDENT-APP-IMG-8.jpeg";


import SMALLAPP1 from "/SMALL-APPS-UI/SMALL-APP-UI-1.jpeg";
import SMALLAPP2 from "/SMALL-APPS-UI/SMALL-APP-UI-2.jpeg";
import SMALLAPP3 from "/SMALL-APPS-UI/SMALL-APP-UI-3.jpeg";
import SMALLAPP4 from "/SMALL-APPS-UI/SMALL-APP-UI-4.jpeg";
import SMALLAPP5 from "/SMALL-APPS-UI/SMALL-APP-UI-5.jpeg";
import SMALLAPP6 from "/SMALL-APPS-UI/SMALL-APP-UI-6.jpeg";
import SMALLAPP7 from "/SMALL-APPS-UI/SMALL-APP-UI-7.jpeg";
import SMALLAPP8 from "/SMALL-APPS-UI/SMALL-APP-UI-8.jpeg";
import SMALLAPP9 from "/SMALL-APPS-UI/SMALL-APP-UI-9.jpeg";
import SMALLAPP10 from "/SMALL-APPS-UI/SMALL-APP-UI-10.jpeg";
import SMALLAPP11 from "/SMALL-APPS-UI/SMALL-APP-UI-11.jpeg";

import PORTFOLIO1 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-1.png"
import PORTFOLIO2 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-2.png"
import PORTFOLIO3 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-3.png"
import PORTFOLIO4 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-4.png"
import PORTFOLIO5 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-5.png"
import PORTFOLIO6 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-6.png"
import PORTFOLIO7 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-7.png"
import PORTFOLIO8 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-8.png"
import PORTFOLIO9 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-9.png"
import PORTFOLIO10 from "/PERSONAL_PORTFOLIO_IMAGES/portfolio-img-10.png";


import CLOTHWEBSITE1 from "/CLOTHING-WEBSITE-IMAGES/Clothing1.png"
import CLOTHWEBSITE2 from "/CLOTHING-WEBSITE-IMAGES/Clothing2.png"
import CLOTHWEBSITE3 from "/CLOTHING-WEBSITE-IMAGES/Clothing3.png"
import CLOTHWEBSITE4 from "/CLOTHING-WEBSITE-IMAGES/Clothing4.png"
import CLOTHWEBSITE5 from "/CLOTHING-WEBSITE-IMAGES/Clothing5.png"
import CLOTHWEBSITE6 from "/CLOTHING-WEBSITE-IMAGES/Clothing6.png"
import CLOTHWEBSITE7 from "/CLOTHING-WEBSITE-IMAGES/Clothing7.png"
import CLOTHWEBSITE8 from "/CLOTHING-WEBSITE-IMAGES/Clothing8.png"


import NOTESAPP1 from "/NOTES-APP-IMAGES/NOTES-APP-1.png"
import NOTESAPP2 from "/NOTES-APP-IMAGES/NOTES-APP-2.png"
import NOTESAPP3 from "/NOTES-APP-IMAGES/NOTES-APP-3.png"
import NOTESAPP4 from "/NOTES-APP-IMAGES/NOTES-APP-4.png"
import NOTESAPP5 from "/NOTES-APP-IMAGES/NOTES-APP-5.png"
import NOTESAPP6 from "/NOTES-APP-IMAGES/NOTES-APP-6.png"
import NOTESAPP7 from "/NOTES-APP-IMAGES/NOTES-APP-7.png"
import NOTESAPP8 from "/NOTES-APP-IMAGES/NOTES-APP-8.png"
import NOTESAPP9 from "/NOTES-APP-IMAGES/NOTES-APP-9.png";



import QUIZZAPP1 from "/QUIZZ-APP-IMAGES/QUIZZ-APP-1.png";
import QUIZZAPP2 from "/QUIZZ-APP-IMAGES/QUIZZ-APP-2.png";
import QUIZZAPP3 from "/QUIZZ-APP-IMAGES/QUIZZ-APP-3.png";
import QUIZZAPP4 from "/QUIZZ-APP-IMAGES/QUIZZ-APP-4.png";
import QUIZZAPP5 from "/QUIZZ-APP-IMAGES/QUIZZ-APP-5.png";
import QUIZZAPP6 from "/QUIZZ-APP-IMAGES/QUIZZ-APP-6.png";

import TYPING1 from "./public/TYPING-IMAGES/Typing-image-1.png"
import TYPING2 from "./public/TYPING-IMAGES/Typing-image-2.png";

import WORD1 from "/WORDPROCESSOR-IMAGES/WordProcessor1.png"
import WORD2 from "/WORDPROCESSOR-IMAGES/WordProcessor2.png"
import WORD3 from "/WORDPROCESSOR-IMAGES/WordProcessor3.png"
import WORD4 from "/WORDPROCESSOR-IMAGES/WordProcessor4.png"
import WORD5 from "/WORDPROCESSOR-IMAGES/WordProcessor5.png"


export const ICONS_ARRAY = [
  {
    icon:<Instagram style={{color:ACCENT_COLOR}} />,
    key: 1,
    href: "https://www.instagram.com/codepalace144/",
  },
  {
    icon: <LinkedIn style={{color:ACCENT_COLOR}}/>,
    key: 2,
    href: "https://www.linkedin.com/in/talha-shiekh-a99b4b313/",
  },
  {
    icon: <GitHub style={{color:ACCENT_COLOR}}/>,
    key: 3,
    href: "https://github.com/Talha12Shiekh",
  },
  {
    icon: <YouTube style={{color:ACCENT_COLOR}}/>,
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

export const MOBILE_PROJECTS = [
  {
    key: 1,
    image:"WhatsappCloneTitleImage.png",
    viewImages:[],
    title:"Whatsapp Clone",
    description:"Developed a comprehensive WhatsApp clone in frontend using React Native, replicating key functionalities to enhance user experience. The app includes robust chat management features, allowing users to add, delete, search, pin,filter and archive chats with ease. The messaging UI closely mirrors that of WhatsApp, providing a familiar and intuitive interface for users. Additionally, I implemented message reactions, enabling users to react to messages with emojis, and included features to star and pin important messages for quick access The app also features a call UI, designed to resemble the WhatsApp calling experience and much more This project demonstrates my proficiency in mobile app development using React Native",
    codeLink:"https://github.com/Talha12Shiekh/WhatsappClone",
    live:"",
    liveDisabled:true,
    skills:["React Js","React Native","JSX","NPM","JavaScript","Expo"],
  },
  {
    key: 2,
    image:CALC1,
    viewImages:[CALC1,CALC2,CALC3,CALC4,CALC5,CALC6],
    title:"Mobile Calculator",
    description:"Developed a feature-rich calculator app using React Native, designed to perform complex arithmetic calculations with ease. The app offers a user-friendly interface similar to an Android calculator, including a sidebar for viewing calculation history. Users can save and restore calculations from history, delete history, and highlight important symbols during calculations. This project highlights my skills in mobile app development, focusing on creating intuitive and functional user interfaces.",
    codeLink:"https://github.com/Talha12Shiekh/CALCULATOR",
    live:"",
    liveDisabled:true,
    skills:["React Js","React Native","JSX","NPM","JavaScript","Expo"],
  },
  {
    key: 3,
    image:STUD1,
    viewImages:[STUD1,STUD2,STUD3,STUD4,STUD5,STUD6,STUD7,STUD8],
    title:"Students App",
    description:"Students App, developed in React Native, offers a user-friendly interface for students and educators. The app features a landing page that provides easy navigation to sections such as Courses, Contacts, Students Information, and About Me. The Courses section displays various courses as cards, allowing users to apply easily. The Students Information section includes a carousel showcasing enrolled students. The About Me section features useful links with icons, while the Contacts section has a sign-in form for course registration.",
    codeLink:"https://github.com/Talha12Shiekh/STUDENTS-APP",
    live:"",
    liveDisabled:true,
    skills:["React Js","React Native","JSX","NPM","JavaScript","Expo"],
  },
  {
    key: 4,
    image:SMALLAPP1,
    viewImages:[SMALLAPP1,SMALLAPP2,SMALLAPP3,SMALLAPP4,SMALLAPP5,SMALLAPP6,SMALLAPP7,SMALLAPP8,SMALLAPP9,SMALLAPP10,SMALLAPP11],
    title:"Small Applications UI",
    description:"In addition to my major projects, I have developed several small application UIs using React Native, for example Gym App, Travel App, and Food App. These apps feature smooth and intuitive user interfaces, showcasing my expertise in React Native. Each app is designed to provide an excellent user experience, with the Gym App focusing on fitness routines, the Travel App offering travel planning and exploration features, and the Food App presenting a seamless food ordering and recipe browsing experience. These projects highlight my ability to create polished and functional mobile app interfaces.",
    codeLink:"https://github.com/Talha12Shiekh/Small-Applications-UI-",
    live:"",
    liveDisabled:true,
    status:"Completed",
    skills:["React Js","React Native","JSX","NPM","JavaScript","Expo"],
  },
]

export const WEB_PROJECTS = [
  {
    key: 5,
    image:PORTFOLIO1,
    viewImages:[PORTFOLIO1,PORTFOLIO2,PORTFOLIO3,PORTFOLIO4,PORTFOLIO5,PORTFOLIO6,PORTFOLIO7,PORTFOLIO8,PORTFOLIO9,PORTFOLIO10],
    title:"Personal Portflio",
    description:"I developed a comprehensive portfolio website using HTML, CSS, and JavaScript, featuring multiple pages: Home, About, Services, Portfolio, Pricing, and Contact. The site supports both light and dark modes, enhancing user experience. It includes a reaction modal for user interactions and dynamic animations throughout the site. The client feedback section is displayed as a carousel, showcasing testimonials and frequently asked questions. The Services page presents various offerings in card format, while the Contact page features a sign-in form for easy communication.",
    codeLink:"https://github.com/Talha12Shiekh/Portfolio",
    live:"https://talhawebsite.netlify.app/",
    liveDisabled:false,
    skills:["HTML","CSS","NPM","JavaScript","Netlify"],
  },
  {
    key: 6,
    image:CLOTHWEBSITE1,
    viewImages:[CLOTHWEBSITE1,CLOTHWEBSITE2,CLOTHWEBSITE3,CLOTHWEBSITE4,CLOTHWEBSITE5,CLOTHWEBSITE6,CLOTHWEBSITE7,CLOTHWEBSITE8],
    title:"Clothing Website",
    description:"I developed a dynamic clothing website using React.js and Bootstrap. It features multiple pages: Home, Products, Trends, and Contact. The discount section includes a countdown timer, and the Products page allows easy filtering. The Trends page showcases trending designs in a grid layout with prices. The Contact section includes a login form, and the site supports seamless navigation without reloading.",
    codeLink:"https://github.com/Talha12Shiekh/ClothingWebsite",
    live:"https://khurramclothing.netlify.app/",
    liveDisabled:false,
    skills:["React Js","JSX","NPM","JavaScript","Bootstrap","Netlify"],
  },
  {
    key: 7,
    image:NOTESAPP7,
    viewImages:[NOTESAPP1,NOTESAPP2,NOTESAPP3,NOTESAPP4,NOTESAPP5,NOTESAPP6,NOTESAPP7,NOTESAPP8,NOTESAPP9],
    title:"Notes App",
    description:"I created a feature-rich notes app using React and Redux, it consists of responsive design. Users can manage notes seamlessly with functions for adding, deleting, updating, and recovering notes. The app supports marking notes as important, pinning them for quick access, and includes a filtering feature for organization. Additionally, there's a convenient option to delete notes, enhancing user experience.",
    codeLink:"https://github.com/Talha12Shiekh/REACT_NOTES_APP",
    live:"https://tknotesapp.netlify.app/",
    liveDisabled:false,
    skills:["React Js","JSX","NPM","JavaScript","Redux","Netlify","CSS"],
  },
  {
    key: 8,
    image:WORD2,
    viewImages:[WORD1,WORD2,WORD3,WORD4,WORD5],
    title:"Text Processor",
    description:"My first React.js application, a word processor developed with Bootstrap, offers both light and dark modes for user preference. The home page features a textarea for text input, accompanied by buttons for various operations such as converting text to uppercase, lowercase, clearing text, copying text, and removing extra spaces. Below these buttons, the app displays real-time information about the text, including word and character counts. Additionally, it calculates the estimated reading time for the entered text, providing a comprehensive writing and editing experience.",
    codeLink:"https://github.com/Talha12Shiekh/TextUtils-React-",
    live:"",
    liveDisabled:true,
    status:"Completed",
    skills:["React Js","JSX","NPM","JavaScript","Bootstrap","CSS"],
  },
  {
    key: 9,
    image:QUIZZAPP2,
    viewImages:[QUIZZAPP1,QUIZZAPP2,QUIZZAPP3,QUIZZAPP4,QUIZZAPP5,QUIZZAPP6],
    title:"Quizz App",
    description:"I created a quiz app using React.js with CSS styling. The app features a start button that initiates the quizzes, each comprising four options and a limited response time. If the user selects the wrong option or time expires, the correct answer is automatically highlighted. The app displays the current quiz number and the total number of quizzes. A settings page allows users to add, edit, delete quizzes, and customize the time for each quiz. Upon completion, the app shows the results, indicating how many answers were correct.",
    codeLink:"https://github.com/Talha12Shiekh/REACT_QUIZZ_APP",
    live:"https://tkquizzapp.netlify.app/",
    liveDisabled:false,
    status:"Completed",
    skills:["React Js","JSX","CSS","NPM","JavaScript","Netlify"],
  },
  {
    key: 10,
    image:TYPING1,
    viewImages:[TYPING1,TYPING2],
    title:"Typing Machine",
    description:"I developed a typing machine using HTML, CSS, and JavaScript, featuring a smooth UI. It presents words for the user to type and includes a \"Try Again\" button that generates a new paragraph. A countdown timer tracks the typing duration, and when the time is up, further typing is disabled. The app also displays the number of mistakes made, as well as the user's words per minute (WPM) and characters per minute (CPM) typed by the user.",
    codeLink:"https://github.com/Talha12Shiekh/Javascript-projects/tree/master/Typing%20machine",
    live:"",
    liveDisabled:true,
    skills:["HTML","CSS","JavaScript"],
  },
]
