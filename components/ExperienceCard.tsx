import { FunctionComponent } from "react";
import Image from "next/image";
import { Experience } from "types";
import { createMarkup } from "lib/utils";

interface ExperienceCardProps {
	experience: Experience;
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
	experience,
}) => {
	const {
		title,
		company,
		company_url,
		duration,
		location,
		logo_path,
		description,
	} = experience;

	return (
		<div className="flex flex-col md:flex-row gap-6 p-2">
			<div className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-dark-800 rounded-xl p-2 shadow-sm border border-gray-100 dark:border-dark-600 flex items-center justify-center overflow-hidden">
				<Image
					src={logo_path}
					alt={`${company} logo`}
					fill
					className="object-contain p-2"
				/>
			</div>
			<div className="flex-1">
				<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
					<div>
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
							{title}
						</h3>
						<a
							href={company_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary-600 dark:text-accent-400 hover:underline font-medium text-lg"
						>
							{company}
						</a>
					</div>
					<div className="mt-2 md:mt-0 text-left md:text-right">
						<span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-1">
							{duration}
						</span>
						<p className="text-sm text-gray-500 dark:text-gray-400 flex items-center md:justify-end gap-1 mt-1">
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							{location}
						</p>
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

export default ExperienceCard;
