import { FunctionComponent, useState } from "react";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

const ProjectCard: FunctionComponent<{
	project: IProject;
}> = ({
	project: { name, image_path, category, deployed_url, description, techs },
}) => {
	const [showDetail, setShowDetail] = useState(false);

	return (
		<div>
			<img
				src={image_path}
				alt={name}
				className="cursor-pointer"
				onClick={() => setShowDetail(true)}
				height="150"
				width="300"
			/>
			<p className="my-2 text-center">{name}</p>

			{showDetail && (
				<div className="absolute left-0 z-10 grid w-full h-auto p-10 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
					<img
						className={deployed_url ? "cursor-pointer" : ""}
						src={image_path}
						onClick={() => deployed_url && window.open(deployed_url, "_blank")}
						alt={name}
						height="150"
						width="300"
					/>

					<div>
						<h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
						<h3 className="mb-3 font-medium">{description}</h3>

						<div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
							{techs.map((tech) => (
								<span key={tech.name} className="px-2 py-1 my-1 rounde-sm ">
									<div className="flex justify-center ">
										<tech.Icon className="w-8 h-8 text-gray" />
									</div>
									{tech.name}
								</span>
							))}
						</div>
					</div>

					<button
						onClick={() => setShowDetail(false)}
						className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
					>
						<MdClose size={30} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
