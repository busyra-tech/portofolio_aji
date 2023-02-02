import { IconType } from "react-icons";

export interface Experience {
  title: string;
  company: string;
  company_url: string;
  logo_path: string;
  duration: string;
  location: string;
  description: string;
}

export interface Certification {
  title: string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
}

export interface Education {
  universitas: string;
  universitas_url: string;
  jurusan: string;
  tahun: string;
  logo_path: string;
  description: string;
}

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string|null;
  category: Category[];
  techs: Tech[];
}

export interface Tech {
  Icon: IconType;
  name: string;
}

export type Category = "Laravel"|"Adonis Js"|"Express Js"|"Nuxt Js"|"Next Js"|"Vue Js"|"React Js"|"Flutter" ;
