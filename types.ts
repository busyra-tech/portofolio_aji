import { IconType } from "react-icons";

/**
 * Experience Interface
 * Represents a work experience entry
 */
export interface Experience {
	title: string;
	company: string;
	company_url: string;
	logo_path: string;
	duration: string;
	location: string;
	description: string;
}

/**
 * Certification Interface
 * Represents a professional certification
 */
export interface Certification {
	title: string;
	subtitle: string;
	logo_path: string;
	certificate_link: string;
}

/**
 * Education Interface
 * Represents an educational background
 */
export interface Education {
	universitas: string;
	universitas_url: string;
	jurusan: string;
	tahun: string;
	logo_path: string;
	description: string;
}

/**
 * Service Interface
 * Represents a service offering
 */
export interface Service {
	Icon: IconType;
	title: string;
	about: string;
}

/**
 * Skill Interface
 * Represents a technical skill with proficiency level
 */
export interface Skill {
	Icon: IconType;
	name: string;
	level: string;
}

/**
 * Technology Interface
 * Represents a technology used in a project
 */
export interface Tech {
	Icon: IconType;
	name: string;
}

/**
 * Project Interface
 * Represents a project showcase
 */
export interface IProject {
	name: string;
	description: string;
	image_path: string;
	deployed_url: string | null;
	category: Category[];
	techs: Tech[];
}

/**
 * Project Categories
 */
export type Category =
	| "Laravel"
	| "Adonis Js"
	| "Express Js"
	| "Nuxt Js"
	| "Next Js"
	| "Vue Js"
	| "React Js"
	| "Flutter";

/**
 * Navigation Item Interface
 */
export interface NavItem {
	name: string;
	href: string;
}
