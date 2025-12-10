import user_image from './user-image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import jira from './jira.png';
import powerBi from './PowerBi.png';
import msp from './msp.png';
import ganttproject from './ganttproject.png';
import excel from './excel.png';
import microOffice from './mo.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpeg';
import Sopra_Steria from './sopra-steria.png';
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
import AliDanTek from './alidantek.png';
import Tamtam from './tamtam.jpeg';
import vr_detail from './vr-detail.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    jira,
    powerBi,
    msp,
    ganttproject,
    excel,
    microOffice,
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
    right_arrow_bold_dark,
    Sopra_Steria,
    AliDanTek,
    Tamtam,
    vr_detail
};
export const workData = [
  {
    title: 'Groupe Crédit Agricole - Chef de Projet MOA (2024)',
    description: ' Migration du système Orion vers Artémis au sein d\'un grand groupe bancaire.',
    bgImage: '/work-1.jpg',
  },
  {
    title: 'DINO Projets de Construction - Gestionnaire des Risques Projets (2023)',
    description: 'Pilotage de projets de construction et optimisation des processus internes.',
    bgImage: '/work-2.jpg',
  },
  {
    title: 'DIGIUP - Community Manager (2022)',
    description: 'Développement de la visibilité en ligne d\'une start-up digitale.',
    bgImage: '/work-3.jpg',
  },
  {
    title: 'Ministère du Tourisme, de l\'Artisanat et de l\'Économie Sociale et Solidaire - Chef de Projet MOA (2021)',
    description: 'Contribution à la "Vision 2030" du secteur touristique.',
    bgImage: '/work-4.jpg',
  },
]
export const serviceData = [
  { 
    icon: assets.web_icon, 
    title: 'Gestion de Projet', 
    description: [
      'Coordination transverse et pilotage stratégique',
      'Planification et suivi des livrables',
      'Suivi des KPI et reporting',
      'Gestion des risques et plans de mitigation',
      'Définition de roadmaps stratégiques'
    ],
    link: '' 
  },
  { 
    icon: assets.mobile_icon, 
    title: 'Maîtrise d\'Ouvrage (MOA)', 
    description: [
      'Recueil et consolidation des besoins métiers',
      'Conception de cahiers des charges',
      'Pilotage de la recette fonctionnelle',
      'Suivi des tests et anomalies',
      'Coordination MOA/MOE'
    ],
    link: '' 
  },
  { 
    icon: assets.ui_icon, 
    title: 'Conduite du Changement', 
    description: [
      'Accompagnement terrain des équipes',
      'Formation et coaching des utilisateurs',
      'Communication interne et gestion du changement',
      'Documentation et support opérationnel',
      'Animation d\'ateliers métiers'
    ],
    link: '' 
  },
  { 
    icon: assets.graphics_icon, 
    title: 'Analyse & Data', 
    description: [
      'Reporting et tableaux de bord',
      'Veille concurrentielle',
      'Analyse de marché',
      'Indicateurs de performance (KPI)',
      'Analyse des coûts et suivi budgétaire'
    ],
    link: '' 
  },
];


export const infoList = [
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Mon Parcours Académique', 
        description: [
            'Master 2 - Management Stratégique & Conduite du Changement (IAE Paris-Saclay)',
            'Master - Management des Entreprises & Gestion de Projets (Université Mohammed V)',
            'Licence Pro - Management des Organisations (ENCG Maroc)',
            'DUT - Techniques de Management (EST Maroc)'
        ]
    },
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Services Proposés', 
        description: [
            'Formations & Coaching - Office, Agile, Jira/MS Project',
            'Gestion de projet - Planification et coordination',
            'MOA - Recueil des besoins et cahiers des charges',
            'Conduite du changement - Accompagnement et formation'
        ]
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Mes Missions', 
        description: [
            'Transformation digitale et organisationnelle',
            'Expertise technique et humaine',
            'Solutions adaptées à vos besoins et budgets',
            'Accompagnement de A à Z'
        ]
    }
];

export const toolsData = [
  { img: assets.msp, name: "MS Project" },
  { img: assets.powerBi, name: "Power BI" },
  { img: assets.ganttproject, name: "Gantt Project" },
  { img: assets.excel, name: "Excel avancé" },
  { img: assets.microOffice, name: "Microsoft Office" },
  { img: assets.jira, name: "Jira" },
];

export const experiences = [
    {
    title: "Sopra Steria — Brest, France",
    role: "Software Engineer Intern",
    url: 'https://www.soprasteria.com/fr',
    image: assets.Sopra_Steria,
    description: `Contributed to the maintenance of Arkéa’s life insurance information system. 
    Analyzed and resolved incident tickets, performed debugging, implemented code fixes, and wrote technical documentation.`,
    techs: ["Java/JEE", "COBOL", "DB2", "UNIX", "SQL"]
  },
  {
    title: "Tamtam International — Brussels, Belgium",
    role: "Software Engineer Intern",
    url: 'https://media.tamtam.pro/',
    image: assets.Tamtam,
    description: `Developed a budget management tool for accountants and fiduciaries. 
    Designed secure role-based access, implemented core features, and wrote unit tests for all key functionalities.`,
    techs: ["React", "Symfony", "Redux", "NGINX", "PHPUnit", "MySQL"]
  },
    {
    title: "AliDanTek — Montreal, Canada",
    role: "Full-Stack Developer Intern",
    url: 'https://www.alidantek.ca/',
    image: assets.AliDanTek,
    description: `Created a medical geolocation platform allowing users to locate healthcare centers in real-time. 
    Responsible for data scraping, cleaning, backend and frontend development, and deployment on Cyclic.`,
    techs: ["ReactJS", "NodeJS", "Express", "MongoDB", "Cyclic", "Swagger", "Selenium"]
  },
  {
    title: "Université Cadi Ayyad — Marrakech, Morocco",
    role: "Academic Project — Virtual Reality Developer",
    url: 'https://www.uca.ma/fr',
    image: assets.vr_detail,
    description: `Built an immersive virtual reality platform for exploring historical monuments, integrating a personalized 
    recommendation system based on user interactions.`,
    techs: ["NodeJS", "NextJS", "MongoDB", "Unity", "Blender", "C#", "VR/AR"]
  },
];