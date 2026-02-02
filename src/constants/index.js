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
  nanosecondArbiter,
  edunews,
  swasthq,
  buildstack,
  dawakhana,
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
  { name: "Python", icon: python },
  { name: "C++", icon: cpp },
  { name: "Java", icon: java },
  { name: "C", icon: c },
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
    name: "The Nanosecond Arbiter",
    description:
      "Ultra-low latency lock-free HFT matching engine built with Rust. Achieves 19ns latency and 51M+ ops/sec throughput using atomic operations and zero-copy architecture. Production-grade high-frequency trading system with lock-free SPSC ring buffer.",
    tags: [
      { name: "Rust", color: "blue-text-gradient" },
      { name: "VLSI", color: "green-text-gradient" },
      { name: "HFT", color: "pink-text-gradient" },
      { name: "Lock-Free", color: "orange-text-gradient" },
    ],
    image: nanosecondArbiter,
    source_code_link: "https://github.com/Vickyrrrrrr/nanosecond-arbiter",
    live_demo_link: null,
  },
  {
    name: "EduNews",
    description:
      "Modern educational news platform with real-time article streaming, smart notifications, and Firebase authentication. Built with Next.js 14, TypeScript, PostgreSQL, and TailwindCSS. Features infinite scroll, category filtering, bookmarks, and glassmorphism UI.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
    ],
    image: edunews,
    source_code_link: "https://github.com/laxmiv101085-web/Edu-News",
    live_demo_link: "https://educational-app-theta.vercel.app/",
  },
  {
    name: "SwasthQ",
    description:
      "AI-powered healthcare queue management system built with Gemini API. Features smart patient registration, real-time queue tracking, hospital kiosk integration, and doctor's dashboard. Streamlines OPD workflows with intelligent data management.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Gemini AI", color: "green-text-gradient" },
      { name: "Healthcare", color: "pink-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
    ],
    image: swasthq,
    source_code_link: "https://github.com/Vickyrrrrrr/SwasthQ",
    live_demo_link: "https://swasthqueue.vercel.app/",
  },
  {
    name: "Buildstack",
    description:
      "A comprehensive development platform built with Next.js 16 and Firebase. Features secure authentication via NextAuth and modern UI components using Lucide React.",
    tags: [
      { name: "Next.js 16", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "NextAuth", color: "pink-text-gradient" },
      { name: "TailwindCSS", color: "orange-text-gradient" },
    ],
    image: buildstack,
    source_code_link: "https://github.com/Vickyrrrrrr/buildstack",
    live_demo_link: null,
  },
  {
    name: "Dawakhana",
    description:
      "An online pharmacy and healthcare platform built with Next.js 16. Integrates Razorpay for secure payments and Firebase for backend services, featuring smooth animations with Framer Motion.",
    tags: [
      { name: "Next.js 16", color: "blue-text-gradient" },
      { name: "Razorpay", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "Framer Motion", color: "orange-text-gradient" },
    ],
    image: dawakhana,
    source_code_link: "https://github.com/Vickyrrrrrr/dawakhana",
    live_demo_link: null,
  },
];
