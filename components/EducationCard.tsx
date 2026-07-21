import { FunctionComponent } from "react";
import Image from "next/image";
import { Education } from "types";
import { createMarkup } from "lib/utils";

interface EducationCardProps {
	education: Education;
}

const EducationCard: FunctionComponent<EducationCardProps> = ({
	education,
}) => {
	const {
		universitas,
		logo_path,
		universitas_url,
		jurusan,
		tahun,
		description,
	} = education;

	return (
		<div className="flex flex-col md:flex-row gap-6 p-2">
			<div
				className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-dark-800 rounded-xl p-2 shadow-sm border border-gray-100 dark:border-dark-600 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 overflow-hidden"
				onClick={() => window.open(universitas_url, "_blank")}
				title="Visit University Website"
			>
				<Image
					src={logo_path}
					alt={`${universitas} logo`}
					fill
					className="object-contain p-2"
				/>
			</div>
			<div className="flex-1">
				<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
					<div>
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
							{universitas}
						</h3>
						<h4 className="text-primary-600 dark:text-accent-400 font-medium">
							{jurusan}
						</h4>
					</div>
					<div className="mt-2 md:mt-0">
						<span className="inline-block px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
							{tahun}
						</span>
					</div>
				</div>
				<div
					className="text-gray-600 dark:text-gray-400 prose dark:prose-invert max-w-none text-sm md:text-base leading-relaxed"
					dangerouslySetInnerHTML={createMarkup(description)}
				/>
			</div>
		</div>
	);
};

export default EducationCard;
