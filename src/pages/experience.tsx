import Head from "next/head";
import ExperienceCard from "components/ExperienceCard";
import { experiences } from "data";
import { siteConfig } from "config/site";

const Experience = () => {
	return (
		<>
			<Head>
				<title>
					{siteConfig.pages.experience.title} | {siteConfig.name}
				</title>
				<meta
					name="description"
					content={siteConfig.pages.experience.description}
				/>
			</Head>

			<section className="section-wide pt-40">
				<h1 className="heading-section text-center mb-6">
					Professional Experience
				</h1>
				<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center mb-16">
					5+ years building scalable web and mobile applications using modern
					technologies.
				</p>

				<div className="space-y-6">
					{experiences.map((experience) => (
						<div key={experience.title} className="card-elevated">
							<ExperienceCard experience={experience} />
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Experience;
