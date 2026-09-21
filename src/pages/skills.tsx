import Head from "next/head";
import Bar from "components/Bar";
import {
	frontendSkills,
	backendSkills,
	databaseSkills,
	devopsSkills,
} from "data";
import { siteConfig } from "config/site";

const skillSections = [
	{
		title: "Frontend & Mobile",
		subtitle: "Client-side architectures, reactive UI, and mobile hybrid apps",
		skills: frontendSkills,
	},
	{
		title: "Backend & APIs",
		subtitle: "Enterprise business logic, REST microservices, and server frameworks",
		skills: backendSkills,
	},
	{
		title: "Database & Storage",
		subtitle: "Relational modeling, NoSQL document stores, and cache layers",
		skills: databaseSkills,
	},
	{
		title: "DevOps & Cloud",
		subtitle: "Automated CI/CD pipelines, containerization, and VPS infrastructure",
		skills: devopsSkills,
	},
];

const Skills = () => {
	return (
		<>
			<Head>
				<title>
					{siteConfig.pages.skills.title} | {siteConfig.name}
				</title>
				<meta
					name="description"
					content={siteConfig.pages.skills.description}
				/>
			</Head>

			<section className="section-wide pt-40 pb-20">
				<h1 className="heading-section text-center mb-6">Skills & Expertise</h1>
				<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center mb-16">
					A comprehensive overview of my technical stack across full-stack
					development, system architecture, database design, and cloud DevOps.
				</p>

				<div className="grid gap-8 lg:gap-10 md:grid-cols-2">
					{skillSections.map((sec) => (
						<div
							key={sec.title}
							className="p-6 md:p-8 bg-gray-50/60 dark:bg-dark-800/40 rounded-2xl border border-gray-100 dark:border-dark-700 flex flex-col justify-between"
						>
							<div className="mb-6">
								<h2 className="heading-subsection !text-2xl mb-1.5 text-gray-900 dark:text-white">
									{sec.title}
								</h2>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{sec.subtitle}
								</p>
							</div>
							<div className="space-y-3">
								{sec.skills.map((skill) => (
									<Bar value={skill} key={skill.name} />
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Skills;
