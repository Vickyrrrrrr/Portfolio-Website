import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  vlsiWorkspace,
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

export const services = [
  { title: "Verilog", icon: cpp },
  { title: "MATLAB", icon: python },
  { title: "Video Editing", icon: java },
  { title: "Music Production", icon: c },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Electronics & Communication Student",
    company_name: "First Year EC Engineering",
    icon: eduskill,
    iconBg: "#161329",
    date: "2025 - Present",
    points: [
      "Building foundational skills in Verilog for digital circuit design and hardware description.",
      "Learning MATLAB for signal processing, data analysis, and engineering computations.",
      "Exploring VLSI design principles with a goal to contribute high-impact solutions in the field.",
      "Developing creative skills in video editing and music production alongside core engineering studies.",
    ],
  },
];

export const projects = [
  {
    name: "VLSI Projects Coming Soon",
    description:
      "Currently building foundational skills in Verilog and MATLAB. Exciting VLSI design projects are in development and will be showcased here soon.",
    tags: [
      { name: "Verilog", color: "blue-text-gradient" },
      { name: "MATLAB", color: "green-text-gradient" },
      { name: "VLSI Design", color: "pink-text-gradient" },
    ],
    image: vlsiWorkspace,
    source_code_link: "https://github.com/Vickyrrrrrr",
  },
];
