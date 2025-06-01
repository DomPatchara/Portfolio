import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import react from "./react.svg";
import git from "./git.png";
import tailwindcss from "./tailwindcss.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import nextjs from "./nextjs.svg";
import github_for_darkmode from "./github_for_darkmode.png";
import nextjs_white_icon from "./nextjs-white-icon.svg";
import typescript from "./typescript.svg";
import framer from "./framer.svg";
import dark_framer from "./dark-framer.svg";
import redux from "./redux.svg";

import prisma from "./prisma.png";
import primsa_white from "./prisma_white.png";
import mongoDB from "./mongodb.svg";
import favicon from "./favicon.png";

import work1 from "./public/work-1.png";
import work2 from "./public/work-2.png";
import work3 from "./public/work-3.png";
import work4 from "./public/work-4.png";
import work5 from "./public/work-5.png";
import resume from "./public/Resume_Patchara_Yakiaw.pdf";

import footer from "./public/footer-bg-color.png";
import uxui from "./uxui.webp";
import zustand from "./zustand.svg";
import shadcn from "./shadcn.svg";
import shadcn_white from "./shadcn_white.svg";

import stripe from "./stripe.svg";
import clerk from "./clerk.svg";
import clerk_white from "./clerk_white.svg";

import nodejs from "./node-js.svg"
import express from "./express.svg"
import express_white from "./express_white.svg"
import postgresql from "./postgresql.svg"
import postman from "./postman.svg"

export const assets = {
  postman,
  nodejs,
  express,
  express_white,
  postgresql,
  zustand,
  uxui,
  favicon,
  primsa_white,
  prisma,
  mongoDB,
  footer,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  git,
  github_for_darkmode,
  tailwindcss,
  nextjs,
  nextjs_white_icon,
  react,
  typescript,
  framer,
  right_arrow_white,
  logo,
  logo_dark,
  dark_framer,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  work1,
  work2,
  work3,
  work4,
  resume,
};

export const workData = [
  {
    title: "Admin Dashboard",
    description:
      "A full-stack eCommerce platform with an admin dashboard for managing products, categories, orders, and users. Built with Next.js, Tailwind CSS, and Shadcn UI for a sleek UI. Integrated with Prisma and MongoDB for robust data handling, Stripe for secure payments, and Clerk for authentication.",
    bgImage: work5,
    link: "https://admin-dashboard-dome-patcharas-projects.vercel.app/",
    git: "https://github.com/DomPatchara/Admin-Dashboard",
    techs: [
      { title: "Next.js", icon: nextjs, icon_dark: nextjs_white_icon },
      { title: "Tailwind CSS", icon: tailwindcss, icon_dark: tailwindcss },
      { title: "Typescript", icon: typescript, icon_dark: typescript },
      { title: "Prisma", icon: prisma, icon_dark: primsa_white },
      { title: "MongoDB", icon: mongoDB, icon_dark: mongoDB },
      { title: "Clerk", icon: clerk, icon_dark: clerk_white },
      { title: "Stripe", icon: stripe, icon_dark: stripe },
    ],
  },
  {
    title: "Movie Explorer",
    description:
      "Learning create UI pages with interactive features and API integration using The Movie Database (TMDB).\n\n This project allows users to easily search and explore their favorite movies, helping me practice real-world frontend development skills like fetching data, handling state, and creating responsive layouts.",
    bgImage: work1,
    link: "https://dome-project-movie.netlify.app",
    git: "https://github.com/DomPatchara/React-Movie-Explorer",
    techs: [
      { title: "React", icon: react, icon_dark: react },
      { title: "Tailwind CSS", icon: tailwindcss, icon_dark: tailwindcss },
    ],
  },
  {
    title: "Pizza Restaurant",
    description:
      "This is my simple Pizza Restaurant UI Website with Responsive created by Next.JS and I'm Focus on basic that learned about Dynamic Routes, Catch-all Routes and implemented Redux Toolkit for global state management.",
    bgImage: work2,
    link: "https://dome-project-pizza.netlify.app/",
    git: "https://github.com/DomPatchara/Pizza_Restaurant",
    techs: [
      { title: "Next.js", icon: nextjs, icon_dark: nextjs_white_icon },
      ,
      { title: "React", icon: react, icon_dark: react },
      { title: "Tailwind CSS", icon: tailwindcss, icon_dark: tailwindcss },
      { title: "Typescript", icon: typescript, icon_dark: typescript },
      { title: "Redux", icon: redux, icon_dark: redux },
    ],
  },
  {
    title: "Ecommerce Website",
    description:
      "This is a simple ecommerce web application built with React. It allows users to browse products, add them to the cart, and proceed with checkout. This project serves as a learning base for React and frontend development.",
    bgImage: work3,
    link: "https://dome-project-eccomerce.netlify.app",
    git: "https://github.com/DomPatchara/Eccomerce-Web",
    techs: [
      { title: "React", icon: react, icon_dark: react },
      { title: "Tailwind CSS", icon: tailwindcss, icon_dark: tailwindcss },
    ],
  },
  {
    title: "SaaS Designing",
    description:
      "A basic SaaS landing page built with Next.js, TailwindCSS, and Framer Motion. Great for learning how to build and design a SaaS from scratch.",
    bgImage: work4,
    link: "https://dome-project-saas.netlify.app",
    git: "https://github.com/DomPatchara/SaaS-",
    techs: [
      { title: "Next.js", icon: nextjs, icon_dark: nextjs_white_icon },
      ,
      { title: "React", icon: react, icon_dark: react },
      { title: "Tailwind CSS", icon: tailwindcss, icon_dark: tailwindcss },
      { title: "Typescript", icon: typescript, icon_dark: typescript },
      { title: "Framer Motion", icon: framer, icon_dark: framer },
    ],
  },
];

export const serviceData = [
  {
    title: "Web Development",
    description:
      "I build fast, modern full-stack websites using Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.",
  },
  {
    title: "Responsive Design",
    description:
      "I create scalable SaaS and web apps that look great on all devices.",
  },
  {
    title: "UX/UI Web Design",
    description:
      "I design intuitive and visually appealing websites, focusing on user experience and accessibility.",
  },
];

export const serviceIcon = [
  { icon: nextjs, darkMode: nextjs_white_icon },
  { icon: typescript, darkMode: typescript },
  { icon: tailwindcss, darkMode: tailwindcss },
  { icon: framer, darkMode: framer },
];

export const infoList = [
  {
    icon: code_icon,
    iconDark: code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript, and TypeScript",
  },
  {
    icon: edu_icon,
    iconDark: edu_icon_dark,
    title: "Education",
    description: "Chulalongkorn University MIS",
  },
  {
    icon: project_icon,
    iconDark: project_icon_dark,
    title: "Projects",
    description: "Built more than 3 projects",
  },
];

export const toolsData = [
  { lightMode: react, darkMode: react, title: "React", category: "Frontend" },
  { lightMode: nextjs, darkMode: nextjs_white_icon, title: "Next.js", category: "Frontend" },
  { lightMode: typescript, darkMode: typescript, title: "Typescript", category: "Frontend" },
  { lightMode: tailwindcss, darkMode: tailwindcss, title: "Tailwind CSS", category: "Frontend" },
  { lightMode: shadcn, darkMode: shadcn_white, title: "Shadcn", category: "Frontend" },
  { lightMode: dark_framer, darkMode: framer, title: "Framer Motion", category: "Frontend" },
  { lightMode: git, darkMode: github_for_darkmode, title: "Github", category: "Dev Tools" },
  { lightMode: vscode, darkMode: vscode, title: "VS Code", category: "Dev Tools" },
  { lightMode: zustand, darkMode: zustand, title: "Zustand", category: "Frontend" },
  { lightMode: redux, darkMode: redux, title: "Redux", category: "Frontend" },
  { lightMode: nodejs, darkMode: nodejs, title: "Node.js", category: "Backend" },
  { lightMode: express, darkMode: express_white, title: "Express.js", category: "Backend" },
  { lightMode: prisma, darkMode: primsa_white, title: "Prisma", category: "Backend" },
  { lightMode: mongoDB, darkMode: mongoDB, title: "MongoDB", category: "Backend" },
  { lightMode: clerk, darkMode: clerk_white, title: "Clerk", category: "Dev Tools" },
  { lightMode: stripe, darkMode: stripe, title: "Stripe", category: "Dev Tools" },
  { lightMode: postgresql, darkMode: postgresql, title: "PostgreSQL", category: "Backend" },
  { lightMode: postman, darkMode: postman, title: "Postman", category: "Dev Tools" },
];
