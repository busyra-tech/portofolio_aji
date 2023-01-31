import Image from "next/image";
import { FunctionComponent } from "react";
import { Experience } from "types";

const ExperienceCard: FunctionComponent<{ experience: Experience }> = ({
	experience: {
		title,
		company,
		company_url,
		duration,
		location,
		logo_path,
		description,
	},
}) => {
	function createMarkup() {
		return {
			__html: description,
		};
	}

	return (
		<div className="flex flex-col md:flex-row items-center p-2 space-x-4 ">
			<img src={logo_path} alt={title} height="150" width="150" />
			<div className="">
				<div className="md:flex md:justify-between mb-2">
					<div>
						<h5 className="font-bold">{title}</h5>
						<a href={company_url} target="_blank" rel="noreferrer">
							<h6 className="">{company}</h6>
						</a>
					</div>
					<div>
						<p className="text-sm text-gray-500 dark:text-gray-100">
							{duration}
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-100">
							{location}
						</p>
					</div>
				</div>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	);
};

export default ExperienceCard;
