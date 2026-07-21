import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IProject } from "../types";

interface ProjectCardProps {
	project: IProject;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
	const { name, image_path, category, deployed_url, description, techs } =
		project;
	const [showDetail, setShowDetail] = useState(false);

	return (
		<>
			<div
				className="group relative overflow-hidden rounded-xl cursor-pointer"
				onClick={() => setShowDetail(true)}
			>
				<div className="relative aspect-video w-full overflow-hidden">
					<Image
						src={image_path}
						alt={name}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-110"
					/>
				</div>

				{/* Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
					<h3 className="text-white font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
						{name}
					</h3>
					<div className="flex flex-wrap gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
						{techs.slice(0, 3).map((tech) => (
							<span
								key={tech.name}
								className="text-xs font-medium px-2 py-1 bg-white/20 text-white rounded-full backdrop-blur-sm"
							>
								{tech.name}
							</span>
						))}
						{techs.length > 3 && (
							<span className="text-xs font-medium px-2 py-1 bg-white/20 text-white rounded-full backdrop-blur-sm">
								+{techs.length - 3}
							</span>
						)}
					</div>
				</div>
			</div>

			{/* Modal */}
			{showDetail && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
					<div
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						onClick={() => setShowDetail(false)}
					/>
					<div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row bg-white dark:bg-dark-800 rounded-2xl shadow-2xl animate-slide-up overflow-hidden">
						{/* Image Section */}
						<div className="relative w-full md:w-1/2 aspect-video md:aspect-auto bg-gray-100 dark:bg-dark-900 flex-shrink-0">
							<Image
								src={image_path}
								alt={name}
								fill
								className="object-cover"
							/>
						</div>

						{/* Content Section */}
						<div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
							<div className="flex justify-between items-start mb-4">
								<h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
									{name}
								</h2>
								<button
									onClick={() => setShowDetail(false)}
									className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
									aria-label="Close project details"
								>
									<MdClose className="w-5 h-5 text-gray-600 dark:text-gray-300" />
								</button>
							</div>

							<div className="flex flex-wrap gap-2 mb-6">
								{category.map((cat) => (
									<span key={cat} className="badge-primary">
										{cat}
									</span>
								))}
							</div>

							<p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow">
								{description}
							</p>

							<div className="mb-8">
								<h4 className="font-semibold text-gray-900 dark:text-white mb-4">
									Technologies Used
								</h4>
								<div className="flex flex-wrap gap-3">
									{techs.map((tech) => (
										<div
											key={tech.name}
											className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-dark-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-600"
											title={tech.name}
										>
											<tech.Icon className="w-4 h-4 text-primary-500" />
											{tech.name}
										</div>
									))}
								</div>
							</div>

							{deployed_url && (
								<a
									href={deployed_url}
									target="_blank"
									rel="noopener noreferrer"
									className="btn-primary w-full justify-center gap-2 mt-auto"
								>
									<span>View Live Project</span>
									<FaExternalLinkAlt className="w-4 h-4" />
								</a>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProjectCard;
