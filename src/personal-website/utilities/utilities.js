import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiPostgresql,
  DiReact,
} from "react-icons/di";
import { SiRedux, SiMaterialui, SiExpress } from "react-icons/si";

export const contactList = {
  contacts: [{ id: "phone", contact: "0714661268", icon: LocalPhoneIcon }],
  emails: [{ id: "email", contact: "rmawina@gmail.com", icon: EmailIcon }],
  links: [
    {
      id: "github",
      link: "https://github.com/Raymond-Mawina",
      icon: GitHubIcon,
    },
    {
      id: "linkedIn",
      link: "https://linkedin/in/raymond-mawina/",
      icon: LinkedInIcon,
    },
  ],
  downloads: [
    { id: "resume", download: "raymondmawina-cv.pdf", icon: WorkIcon },
  ],
};

export const skillsDetails = [
  { index: 0, name: "HTML", icon: DiHtml5 },
  { index: 1, name: "CSS", icon: DiCss3 },
  { index: 2, name: "JAVASCRIPT", icon: DiJsBadge },
  { index: 3, name: "EXPRESS", icon: SiExpress },
  { index: 4, name: "POSTGRESS", icon: DiPostgresql },
  { index: 5, name: "MATERIAL UI", icon: SiMaterialui },
  { index: 6, name: "REACT", icon: DiReact },
  { index: 7, name: "REDUX", icon: SiRedux },
];

export const projectDetails = {
  projects: [
    {
      index: 0,
      name: "Memory image guesssing Game",
      imageName: "memory",
      repoLink: "https://github.com/Raymond-Mawina/GUI-MEMORY-GAME.github.io",
      demoLink: "https://raymond-mawina.github.io/GUI-MEMORY-GAME.github.io/",
    },
    {
      index: 1,
      name: "Semitone Different Music Assist",
      imageName: "semitone",
      repoLink: "https://github.com/Raymond-Mawina/GUI-SEMITONE.github.io",
      demoLink: "https://raymond-mawina.github.io/GUI-SEMITONE.github.io/",
    },
  ],
};

export const infoAboutMe = {
  name: "Raymond Mawina",
  header: "INFO ABOUT ME",
  footer: "Created by Raymond Mawina in 2022",
  subHeader: "I am Raymond Mawina",
  aboutContent:
    "I am a coding newbie, aspiring to become a Software Engineer. I am learning the ins and out's of programming and the tricks of the trade when it comes to designing and developing websites and web applications. My short-term goal is to become a Junior Web developer. My long-term goal is to become a Senior Software Engineer. I am currently seeking learning opportunities, preferably learnership opportunities in the ICT Sector. I learn every day, usually by reading documentation about programming languages or frameworks. I code every day to make sure my skills become practical and applicable. My highest level of education is Grade 12, which I obtained in 2016.",
};

export const listOfLinks = ["About", "Projects", "Skills", "Contacts"];
