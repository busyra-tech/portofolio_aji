/**
 * Site Configuration
 * Centralized configuration for the portfolio website
 */

export const siteConfig = {
	name: process.env.NEXT_PUBLIC_SITE_NAME || "Aji Dwi Saputra",
	description:
		process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Software Engineer Portfolio",
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://ajidwisaputra.com",
	ogImage:
		process.env.NEXT_PUBLIC_OG_IMAGE ||
		"https://ajidwisaputra.com/images/og-image.png",

	author: {
		name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Aji Dwi Saputra",
		email: process.env.NEXT_PUBLIC_AUTHOR_EMAIL || "ajidwisaputra27@gmail.com",
		phone: process.env.NEXT_PUBLIC_AUTHOR_PHONE || "+62 89681353660",
		location: process.env.NEXT_PUBLIC_AUTHOR_LOCATION || "Jakarta, Indonesia",
	},

	socials: {
		github:
			process.env.NEXT_PUBLIC_GITHUB_URL ||
			"https://github.com/ajidwisaputra27",
		gitlab:
			process.env.NEXT_PUBLIC_GITLAB_URL ||
			"https://gitlab.com/ajidwisaputra27",
		linkedin:
			process.env.NEXT_PUBLIC_LINKEDIN_URL ||
			"https://www.linkedin.com/in/aji-dwi-saputra-b62318189",
		facebook:
			process.env.NEXT_PUBLIC_FACEBOOK_URL ||
			"https://www.facebook.com/ajidwisaputra27",
		instagram:
			process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
			"https://www.instagram.com/ajidwisaputra27",
	},

	resume: {
		url: process.env.NEXT_PUBLIC_CV_URL || "/assets/cv_ajidwisaputra.pdf",
		filename: process.env.NEXT_PUBLIC_CV_FILENAME || "cv_ajidwisaputra.pdf",
	},

	// Navigation items
	navItems: [
		{ name: "About", href: "/" },
		{ name: "Experience", href: "/experience" },
		{ name: "Education", href: "/education" },
		{ name: "Skills", href: "/skills" },
		{ name: "Projects", href: "/projects" },
	] as const,

	// Page metadata
	pages: {
		home: {
			title: "About",
			description:
				"Learn about my passion for software engineering and development",
		},
		projects: {
			title: "Projects",
			description: "Explore my latest projects and case studies",
		},
		skills: {
			title: "Skills",
			description: "Technical skills and expertise",
		},
		experience: {
			title: "Experience",
			description: "My professional work experience",
		},
		education: {
			title: "Education",
			description: "Educational background and certifications",
		},
	},
};

export type SiteConfig = typeof siteConfig;
