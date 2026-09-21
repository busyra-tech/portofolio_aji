import { FunctionComponent } from "react";
import Image from "next/image";
import { IProject } from "../types";

interface ProjectCardProps {
	project: IProject;
	onSelect?: (project: IProject) => void;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
	project,
	onSelect,
}) => {
	const { name, image_path, techs } = project;

	return (
		<div
			className="group relative overflow-hidden rounded-xl cursor-pointer"
			onClick={() => onSelect && onSelect(project)}
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
	);
};

export default ProjectCard;
