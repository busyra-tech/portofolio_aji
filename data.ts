import { RiComputerLine } from "react-icons/ri";
import { FaCloud, FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { SiAdonisjs, SiAmazonaws, SiCodeigniter, SiDigitalocean, SiDjango, SiDocker, SiFirebase, SiFlutter, SiJenkins, SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiNuxtdotjs, SiPostgresql, SiPython, SiReact, SiVuedotjs } from "react-icons/si";
import { Certification, Education, Experience, IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and responsive website frontend using <b>React-NEXT</b> or <b>Vue-NUXT</b>",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b><b>Laravel </b> & other popular frameworks",
  },
  {
    Icon: MdDeveloperMode,
    title: "Mobile Development",
    about: "Developing mobile hybrid platfrom using <b>Flutter</b> or <b>React Native</b>",
  },
  {
    Icon: FaCloud,
    title: "Cloud Infra-Architecture",
    about:
      "maintaining websites on virtual machine instances and setting up CI/CD with <b>Jenkins</b>",
  },
];

export const educations: Education[] = [
  {
    universitas: "University of Technology Yogyakarta",
    universitas_url: "https://uty.ac.id",
    jurusan: "System Information",
    logo_path: "/images/edu/uty.png",
    tahun: "2014 - 2018",
    description:
      "I have studied basic software engineering subjects like Data Science, Algorithms, DBMS, OS, AI, apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
  },
]

export const certifications: Certification[] = [
  {
    title:
      "Membuat Statistik dengan Grafik Pada Aplikasi (Studi Kasus App Covid19)",
    subtitle: "eudeka.id",
    logo_path: "/images/cert/eudeka.png",
    certificate_link:
      "https://drive.google.com/file/d/1lQEmfOGG0Z6oQjx-_H6AxmJZC8VIzK9M/view"
  },
  {
    title: "Studi Kasus Web Geolocation dengan Laravel dan HERE Maps",
    subtitle: "codepolitan.com",
    logo_path: "/images/cert/codepolitan.png",
    certificate_link:
      "https://drive.google.com/file/d/1J96S49LMV0CZ8meLOWmR3Z0uXYm4cCG2/view"
  },
  {
    title: "Fullstack Javascript",
    subtitle: "udemy.com",
    logo_path: "/images/cert/udemy.png",
    certificate_link:
      "https://drive.google.com/file/d/1tRuaxxinRSzxARdJqnhPcnO5LuXwxBzb/view"
  },
  {
    title: "Crash Course Laravel and Vue JS 2021 Bootcamp",
    subtitle: "udemy.com",
    logo_path: "/images/cert/udemy.png",
    certificate_link:
      "https://drive.google.com/file/d/1P6YD-9RnMnvrEsI3rLhq7J5vwxtFnskU/view"
  },
  {
    title: "Fullstack Laravel & Flutter",
    subtitle: "buildwithangga.com",
    logo_path: "/images/cert/bwa.png",
    certificate_link:
      "https://drive.google.com/file/d/1vaflVYba0YZ9d3BvY3DAHY_JpvOg0RQx/view"
  },
  {
    title: "Fullstack Javascript Developer",
    subtitle: "buildwithangga.com",
    logo_path: "/images/cert/bwa.png",
    certificate_link:
      "https://drive.google.com/file/d/1eb-Bz3vOgB93lpmReUREgdcVvaBgJiwC/view"
  },
  {
    title: "UX Design",
    subtitle: "babastudio.com",
    logo_path: "/images/cert/babastudio.png",
    certificate_link:
      "https://drive.google.com/file/d/1SX0QmO0wmJmsphglHw0g-O4kGoXWFU8s/view"
  },
  {
    title: "Belajar Membangun Aplikasi Android untuk Pemula",
    subtitle: "Dicoding",
    logo_path: "/images/cert/dicoding.png",
    certificate_link: "https://www.dicoding.com/certificates/MEPJ55GO6P3V"
  },
  {
    title: "Belajar Membangun Aplikasi Android dengan IBM Bluemix",
    subtitle: "Dicoding",
    logo_path: "/images/cert/dicoding.png",
    certificate_link: "https://www.dicoding.com/certificates/L4PQMMJ9OZO1"
  },
]

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "PT. Cipta Integra Duta (IBS Group)",
    company_url: "https://www.ibsrisk.com/",
    logo_path: "/images/exp/integra.png",
    duration: "June 2020 - Present",
    location: "Jakarta, Indonesia",
    description:
      "Architecting, developing, and maintaining enterprise insurance applications and digital ecosystems (FITS, Doctrack, IBX, BRIX, LISA). Handling full-stack engineering with Laravel, Next.js, Express.js, Flutter, and AdonisJS, along with CI/CD automation and containerized deployments.",
  },
  {
    title: "Fullstack Developer",
    company: "PT. Gria Inovasi Teknologi",
    company_url: "https://grit.id/",
    logo_path: "/images/exp/grit.png",
    duration: "July 2019 - May 2020",
    location: "South Tanggerang, Indonesia",
    description:
      "Full Stack Developers are computer programmers who are proficient in both front and back end coding. Their primary responsibilities include designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms.",
  },
  {
    title: "IT Support",
    company: "PT. Surya Lintas Nusantara",
    company_url:
      "https://www.linkedin.com/company/pt.-surya-lintas-nusantara/",
    logo_path: "/images/exp/sln.png",
    duration: "Sept 2018 - June 2019",
    location: "Cirebon, Indonesia",
    description:
      "IT technical support officers monitor and maintain the computer systems and networks of an organisation. You will be installing and configuring computer systems, diagnosing hardware and software faults and solving technical and applications problems, either over the phone or in person.",
  },
  {
    title: "Software Developer",
    company: "PT. Zap Stampsindo Sejahtera",
    company_url: "http://www.zaplaundry.com",
    logo_path: "/images/exp/zap.png",
    duration: "May 2018 - Aug 2018",
    location: "Jakarta, Indonesia",
    description:
      "Researching, designing, implementing and managing software programs. Testing and evaluating new programs. Identifying areas for modification in existing programs and subsequently developing these modifications. Writing and implementing efficient code.",
  },
]

export const languages: Skill[] = [
  {
    Icon: SiReact,
    name: "React Js",
    level: "85",
  },
  {
    Icon: SiNextdotjs,
    name: "Next Js",
    level: "90",
  },
  {
    Icon: SiVuedotjs,
    name: "Vue Js",
    level: "80",
  },
  {
    Icon: SiNuxtdotjs,
    name: "Nuxt Js",
    level: "85",
  },
  {
    Icon: SiLaravel,
    name: "Laravel",
    level: "95",
  },
  {
    Icon: SiCodeigniter,
    name: "Codeigniter",
    level: "75",
  },
  {
    Icon: SiNodedotjs,
    name: "Express Js",
    level: "85",
  },
  {
    Icon: SiAdonisjs,
    name: "Adonis Js",
    level: "75",
  },
  {
    Icon: SiFlutter,
    name: "Flutter",
    level: "90",
  },
  {
    Icon: SiPython,
    name: "Python",
    level: "60",
  },
  {
    Icon: SiDjango,
    name: "Django",
    level: "65",
  },
];

export const infra: Skill[] = [
  {
    Icon: SiAmazonaws,
    name: "Amazon Aws",
    level: "65",
  },
  {
    Icon: SiJenkins,
    name: "Jenkins",
    level: "90",
  },
  {
    Icon: SiDigitalocean,
    name: "Digital Ocean",
    level: "85",
  },
  {
    Icon: SiFirebase,
    name: "Firebase",
    level: "80",
  },
  {
    Icon: SiMysql,
    name: "Mysql",
    level: "90",
  },
  {
    Icon: SiPostgresql,
    name: "Postgresql",
    level: "85",
  },
  {
    Icon: SiMongodb,
    name: "Mongo Db",
    level: "80",
  },
  {
    Icon: SiDocker,
    name: "Docker",
    level: "75",
  },
];

export const projects: IProject[] = [
  { 
    name: "Busyra Tech",
    description:
      "Software house and digital agency platform offering custom web applications, mobile development, and enterprise digital transformation services.",
    image_path: "/images/project/project_busyratech.png",
    deployed_url: "https://busyratech.web.id",
    category: ["Next Js", "React Js", "Laravel"],
    techs: [
      {
        Icon: SiNextdotjs,
        name: "Next JS",
      },
      {
        Icon: SiReact,
        name: "React JS",
      },
      {
        Icon: SiLaravel,
        name: "Laravel",
      },
    ],
  },
  { 
    name: "SIDAS",
    description:
      "Sidas is a monitoring application for office performance control services, employees, ATMs, etc.",
    image_path: "/images/project/project_bankbtn.png",
    deployed_url: null,
    category: ["Flutter","Adonis Js"],
    techs: [
      {
        Icon: SiFlutter,
        name: "Flutter",
      },
      {
        Icon: SiAdonisjs,
        name: "Adonis JS",
      },
    ],
  },
  { 
    name: "SIMKARI",
    description:
      "application for management employee on Prosecutor of the Republic of Indonesia.",
    image_path: "/images/project/project_kejagungri.png",
    deployed_url: null,
    category: ["Laravel","React Js"],
    techs: [
      {
        Icon: SiLaravel,
        name: "Laravel",
      },
      {
        Icon: SiReact,
        name: "React JS",
      },
    ],
  },
  { 
    name: "LexGo",
    description:
      "Web app or platfrom flexible benefit for employee",
    image_path: "/images/project/project_lexgo.png",
    deployed_url: null,
    category: ["Laravel","Vue Js"],
    techs: [
      {
        Icon: SiLaravel,
        name: "Laravel",
      },
      {
        Icon: SiVuedotjs,
        name: "Vue JS",
      },
    ],
  },
  { 
    name: "BRIX",
    description:
      "Web & Mobile app or application for business process company insurance brokers.",
    image_path: "/images/project/project_brix.png",
    deployed_url: "https://brix.integra.co.id",
    category: ["Laravel","React Js","Flutter"],
    techs: [
      {
        Icon: SiLaravel,
        name: "Laravel",
      },
      {
        Icon: SiReact,
        name: "React JS",
      },
      {
        Icon: SiFlutter,
        name: "Flutter",
      },
      {
        Icon: SiJenkins,
        name: "Jenkins",
      },
    ],
  },
  { 
    name: "iDea",
    description:
      "Web & Mobile app or application for manage HR operations, from the employee database system.",
    image_path: "/images/project/project_idea.png",
    deployed_url: null,
    category: ["Laravel","Next Js","Flutter"],
    techs: [
      {
        Icon: SiLaravel,
        name: "Laravel",
      },
      {
        Icon: SiNextdotjs,
        name: "Next JS",
      },
      {
        Icon: SiFlutter,
        name: "Flutter",
      },
      {
        Icon: SiJenkins,
        name: "Jenkins",
      },
    ],
  },
  { 
    name: "e-commerce Fits ID",
    description:
      "Fits ID is e-commerce digital platform wellness",
    image_path: "/images/project/project_fits.png",
    deployed_url: "https://fits.id",
    category: ["Laravel","Next Js"],
    techs: [
      {
        Icon: SiLaravel,
        name: "Laravel",
      },
      {
        Icon: SiNextdotjs,
        name: "Next JS",
      },
    ],
  },
  { 
    name: "e-commerce Ohmura",
    description:
      "Ohmura is e-commerce digital platform where every product has a promo",
    image_path: "/images/project/project_ohmura.png",
    deployed_url: "https://www.ohmura.id",
    category: ["Laravel","Nuxt Js"],
    techs: [
      {
        Icon: SiLaravel,
        name: "Laravel",
      },
      {
        Icon: SiNuxtdotjs,
        name: "Nuxt JS",
      },
    ],
  },
  { 
    name: "e-commerce SandBeach",
    description:
      "Mobile App is an online shopping for sandbeach products through a mobile app.",
    image_path: "/images/project/project_sandbeach.png",
    deployed_url: null,
    category: ["Flutter"],
    techs: [
      {
        Icon: SiFlutter,
        name: "FLutter",
      },
      {
        Icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
  { 
    name: "Heylawedu",
    description:
      "Heylawedu is a digital platform for studying law.",
    image_path: "/images/project/project_heylawedu.png",
    deployed_url: "https://heylawedu.id",
    category: ["Express Js","Nuxt Js"],
    techs: [
      {
        Icon: SiNodedotjs,
        name: "Express Js",
      },
      {
        Icon: SiNuxtdotjs,
        name: "Nuxt JS",
      },
    ],
  },
  { 
    name: "Heylaw Mobile",
    description:
      "Heylaw mobile is a digital platform for studying law and mitra heylaw and etc",
    image_path: "/images/project/project_heylaw_mobile.png",
    deployed_url: "https://heylaw.id",
    category: ["Flutter"],
    techs: [
      {
        Icon: SiFlutter,
        name: "Flutter",
      },
      {
        Icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
  { 
    name: "My Ads Telkomsel",
    description:
      "web app or portal for creating advertisements",
    image_path: "/images/project/project_myads_telkomsel.png",
    deployed_url: "https://myads.telkomsel.com",
    category: ["Next Js"],
    techs: [
      {
        Icon: SiNextdotjs,
        name: "Next JS",
      },
    ],
  },
  { 
    name: "My MBSA",
    description:
      "web app or portal for creating payment transaction in government in Malaysia",
    image_path: "/images/project/project_mymbsa.png",
    deployed_url: "https://www.mymbsa.gov.my",
    category: ["Laravel","React Js"],
    techs: [
      {
        Icon: SiLaravel,
        name: "Laravel",
      },
      {
        Icon: SiReact,
        name: "React JS",
      },
    ],
  },
  { 
    name: "SIAKIB",
    description:
      "Web app or application for business process company insurance brokers.",
    image_path: "/images/project/project_astakanti.png",
    deployed_url: "https://siakib.astakanti.co.id",
    category: ["Laravel","Next Js"],
    techs: [
      {
        Icon: SiLaravel,
        name: "Laravel",
      },
      {
        Icon: SiNextdotjs,
        name: "Next JS",
      },
    ],
  },
];
