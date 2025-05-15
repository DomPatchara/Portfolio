import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import react from './react.svg';
import git from './git.png';
import tailwindcss from './tailwindcss.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import nextjs from './nextjs.svg';
import github_for_darkmode from './github_for_darkmode.png';
import nextjs_white_icon from './nextjs-white-icon.svg';
import typescript from './typescript.svg'
import framer from './framer.svg'
import dark_framer from './dark-framer.svg'
import Uxui from './UI-Element.jpg'
import UXui_2 from './UI-Element2.svg'

import work1 from './public/work-1.png'
import work2 from './public/work-2.png'
import work3 from './public/work-3.png'
import work4 from './public/work-4.png'
import resume from './public/Resume-Patchara.pdf'

import footer from './public/footer-bg-color.png'




export const assets = {
    Uxui,
    UXui_2,
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
    resume
};

export const workData = [
    {
        title: 'Movie Explorer',
        description: 'Find your favorite movies',
        bgImage: work1,
        link: "https://dome-project-movie.netlify.app",
        git: "https://github.com/DomPatchara/React-Movie-Explorer",
        color: "#433D8B"
    },
    {
        title: 'Pizza Resterant',
        description: 'Restaurant UI demo',
        bgImage: work2,
        link: "https://dome-project-pizza.netlify.app/",
        git: "https://github.com/DomPatchara/Pizza_Restaurant",
        color: "#3b3396"
    },
    {
        title: 'Ecommerce Website',
        description: 'Modern shopping experience',
        bgImage: work3,
        link: "https://dome-project-eccomerce.netlify.app",
        git: "https://github.com/DomPatchara/Eccomerce-Web",
        color: "#2E236C"
    },
    {
        title: 'SaaS Designing',
        description: 'Responsive SaaS website template',
        bgImage: work4,
        link: "https://dome-project-saas.netlify.app",
        git: "https://github.com/DomPatchara/SaaS-",
        color: "#17153B"
    },
]

export const serviceData = [
    { title: 'Web Development', description: 'I build fast, modern websites using Next.js, TypeScript, Tailwind CSS, and Framer Motion for animations.'},
    { title: 'Responsive Design', description: 'I create scalable SaaS and web apps that look great on all devices.'},
    { title: 'UX/UI Web Design', description: 'I design intuitive and visually appealing websites, focusing on user experience and accessibility.'},
]

export const serviceIcon = [
    {icon: nextjs, darkMode: nextjs_white_icon},
    {icon: typescript, darkMode: typescript},
    {icon: tailwindcss, darkMode: tailwindcss},
    {icon: framer, darkMode:framer}
];

export const infoList = [
    { icon: code_icon, iconDark: code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, and TypeScript' },
    { icon: edu_icon, iconDark: edu_icon_dark, title: 'Education', description: 'Chulalongkorn University MIS' },
    { icon: project_icon, iconDark: project_icon_dark, title: 'Projects', description: 'Built more than 3 projects' }
];

export const toolsData = [
    { lightMode: vscode,        darkMode: vscode, title: "VS Code" },
    { lightMode: git,           darkMode: github_for_darkmode, title: "Github" },
    { lightMode: tailwindcss,   darkMode: tailwindcss, title: "Tailwind CSS" },
    { lightMode: react,         darkMode: react, title: "React" },
    { lightMode: nextjs,        darkMode: nextjs_white_icon, title: "Next.js" },
    { lightMode: dark_framer,        darkMode: framer, title:"Framer Motion"}   
];