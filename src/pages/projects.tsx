import { useState } from "react";
import Head from "next/head";
import ProjectCard from "components/ProjectCard";
import ProjectsNavbar from "components/ProjectsNavbar";
import { projects as projectsData } from "data";
import { Category } from "types";
import { siteConfig } from "config/site";

const Projects = () => {
	const [projects, setProjects] = useState(projectsData);
	const [active, setActive] = useState("all");

	const handleFilterCategory = (category: Category | "all") => {
		if (category === "all") {
			setProjects(projectsData);
			setActive(category);
			return;
		}

		const newArray = projectsData.filter((project) =>
			project.category.includes(category),
		);
		setProjects(newArray);
		setActive(category);
	};

	return (
		<>
			<Head>
				<title>
					{siteConfig.pages.projects.title} | {siteConfig.name}
				</title>
				<meta
					name="description"
					content={siteConfig.pages.projects.description}
				/>
			</Head>

			<section className="section-wide pt-40">
				{/* Header */}
				<div className="mb-16">
					<h1 className="heading-section text-center mb-6">
						Featured Projects
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center">
						A collection of projects showcasing my expertise in full-stack
						development, modern frameworks, and cloud technologies.
					</p>
				</div>

				{/* Filter */}
				<div className="mb-12">
					<ProjectsNavbar
						handlerFilterCategory={handleFilterCategory}
						active={active}
					/>
				</div>

				{/* Projects Grid */}
				<div className="grid-auto">
					{projects.length > 0 ? (
						projects.map((project) => (
							<div key={project.name} className="card-elevated">
								<ProjectCard project={project} />
							</div>
						))
					) : (
						<div className="col-span-full text-center py-12">
							<p className="text-gray-600 dark:text-gray-400">
								No projects found in this category. Try selecting another.
							</p>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Projects;
