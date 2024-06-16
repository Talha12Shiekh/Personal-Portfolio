export const BACKGROUND_COLOR = "#151925";
export const TEXT_COLOR = "#ffffff";
export const ACCENT_COLOR = "#05c4bc";
export const SECOND_BG_COLOR = "#323846";
export const BOXES_COLOR = "#485373";
export const ICON_BACKGROUND_COLOR = "#5c6a93";

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
    key: 1,
  },
  {
    image: "./MUI.png",
    text: "Material UI",
    key: 2,
  },
  {
    image: "./TAILWIND.svg",
    text: "Tailwind CSS",
    key: 3,
  },
  {
    image: "./REDUX.svg",
    text: "Redux",
    key: 4,
  },
];
export const SKILLS_THIRD_ROW = [
  {
    image: "./TYPESCRIPT.svg",
    text: "TypeScript",
    key: 1,
  },
  {
    image: "./EXPO.svg",
    text: "Expo go",
    key: 2,
  },
  {
    image: "./NETLIFY.png",
    text: "Netlify",
    key: 3,
  },
  {
    image: "./REACT.svg",
    text: "React Native",
    key: 4,
  },
];
export const SKILLS_FOURTH_ROW = [
  {
    image: "./GIT.png",
    text: "Git",
    key: 1,
  },
  {
    image: "./GITHUB.png",
    text: "Github",
    key: 2,
  },
  {
    image: "./NPM.png",
    text: "Netlify",
    key: 3,
  },
  {
    image: "./REACT.svg",
    text: "JSX",
    key: 4,
  },
];

const SKILLS_ICONS_SIZE = "3em";

export const SKILLS = [
  {
    icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SKILLS_ICONS_SIZE}
        height={SKILLS_ICONS_SIZE}
        viewBox="0 0 256 256"
      >
        <path
          fill="white"
          d="M67.84 92.61L25.37 128l42.47 35.39a6 6 0 1 1-7.68 9.22l-48-40a6 6 0 0 1 0-9.22l48-40a6 6 0 0 1 7.68 9.22m176 30.78l-48-40a6 6 0 1 0-7.68 9.22L230.63 128l-42.47 35.39a6 6 0 1 0 7.68 9.22l48-40a6 6 0 0 0 0-9.22m-81.79-89a6 6 0 0 0-7.69 3.61l-64 176a6 6 0 0 0 3.64 7.64a6.2 6.2 0 0 0 2 .36a6 6 0 0 0 5.64-3.95l64-176a6 6 0 0 0-3.59-7.69Z"
        ></path>
      </svg>,
    heading: "Web Development",
    description:"I provide web development services using HTML, CSS, JavaScript, and React.js. I create responsive, user-friendly websites, from simple landing pages to complex platforms",
    key: 1,
  },
  {
  icon:<svg
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
      </svg>,
    heading: "UI/UX Designing",
    description: "I design visually appealing interfaces to enhance user satisfaction. By focusing on user behavior and the latest design trends, I ensure your website or app is both functional and enjoyable to use.",
    key: 2,
  },
  {
    icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SKILLS_ICONS_SIZE}
        height={SKILLS_ICONS_SIZE}
        viewBox="0 0 256 256"
      >
        <path
          fill="white"
          d="M207.06 80.67c-.74-.74-1.49-1.46-2.24-2.17l24.84-24.84a8 8 0 0 0-11.32-11.32l-26 26a111.43 111.43 0 0 0-128.55.19L37.66 42.34a8 8 0 0 0-11.32 11.32L51.4 78.72A113.38 113.38 0 0 0 16 161.13V184a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33M92 160a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
        ></path>
      </svg> ,
    heading: "App Development",
    description:"Specializing in React Native, I develop engaging mobile apps for Android. I deliver high-quality, functional apps that offer a seamless user experience, turning your ideas into reality.",
    key: 3,
  },
];
