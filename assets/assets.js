import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import instagram_icon from './instagram_icon.svg'
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
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

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    facebook_icon,
  twitter_icon,
  instagram_icon,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
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
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
  { 
    icon: assets.web_icon, 
    title: 'Web Design', 
    description: 'Web design is the process of building visually appealing and functional websites...', 
    moreContent: 'I create responsive, SEO-friendly, and scalable websites using modern frameworks like Next.js, React, and Tailwind CSS. My focus is on performance, accessibility, and clean UI/UX to ensure that websites not only look great but also perform flawlessly across devices.'
  },
 {
  icon: assets.mobile_icon, // make sure you have a python_icon in assets
  title: "Python Development",
  description: "Python development covers building powerful backend systems, automation scripts, and data-driven applications...",
  moreContent: "I specialize in developing scalable APIs, automation tools, and data-centric applications using Python. With frameworks like Django and Flask, I build secure backend systems, while also leveraging Python for scripting, web scraping, and data analysis. My workflow ensures clean, maintainable, and efficient code tailored to project needs."
}
,

  { 
    icon: assets.ui_icon, 
    title: 'UI/UX Design', 
    description: 'UI/UX design focuses on building user-friendly and engaging digital experiences...', 
    moreContent: 'Using tools like Figma, Adobe XD, and Tailwind CSS, I design intuitive interfaces backed by user research and usability testing. My goal is to improve conversions, reduce bounce rates, and provide a delightful experience by following best practices in human-centered design.'
  },
 {
  icon: assets.graphics_icon, // make sure you have a cpp_icon in assets
  title: "Problem Solving ",
  description: "Efficient problem solving using C++ with strong focus on Data Structures and Algorithms...",
  moreContent: "I excel at solving complex problems using C++ by applying efficient algorithms and optimized data structures. My expertise includes competitive programming, algorithm design, and optimization techniques. With hands-on experience in solving problems on platforms like LeetCode, Codeforces, and HackerRank, I build logical thinking and write high-performance code that scales."
}

]


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Skills', description: ' JavaScript, MERN , Next JS , Python , C++  ' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];