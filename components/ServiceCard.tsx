import { FunctionComponent } from "react";
import { Service } from "types";
import { createMarkup } from "lib/utils";

interface ServiceCardProps {
	service: Service;
}

const ServiceCard: FunctionComponent<ServiceCardProps> = ({ service }) => {
	const { Icon, title, about } = service;

	return (
		<div className="flex flex-col items-start gap-4 p-4 h-full">
			<div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-accent-400 mb-2">
				<Icon className="w-8 h-8 flex-shrink-0" />
			</div>
			<div className="flex-1">
				<h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">
					{title}
				</h3>
				<div
					className="text-gray-600 dark:text-gray-400 leading-relaxed"
					dangerouslySetInnerHTML={createMarkup(about)}
				/>
			</div>
		</div>
	);
};

export default ServiceCard;
