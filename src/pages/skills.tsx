import Head from "next/head";
import Bar from "components/Bar";
import { languages, infra } from "data";
import { siteConfig } from "config/site";

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

			<section className="section-wide pt-40">
				<h1 className="heading-section text-center mb-6">Skills & Expertise</h1>
				<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center mb-16">
					A comprehensive overview of my technical skills and proficiency levels
					across various technologies.
				</p>

				<div className="grid gap-12 md:grid-cols-2">
					<div>
						<h2 className="heading-subsection mb-8">Languages & Frameworks</h2>
						<div className="space-y-4">
							{languages.map((language, i) => (
								<Bar value={language} key={i} />
							))}
						</div>
					</div>

					<div>
						<h2 className="heading-subsection mb-8">Cloud & Infrastructure</h2>
						<div className="space-y-4">
							{infra.map((tool, i) => (
								<Bar value={tool} key={i} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Skills;
