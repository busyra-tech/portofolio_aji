import { FunctionComponent } from "react";
import { Skill } from "types";
import { formatLevel } from "lib/utils";

interface BarProps {
	value: Skill;
}

const Bar: FunctionComponent<BarProps> = ({ value }) => {
	const { Icon, level, name } = value;
	const barWidth = formatLevel(level);

	return (
		<div className="mb-6">
			<div className="flex justify-between items-center mb-2">
				<div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
					<Icon className="w-5 h-5 text-primary-500" />
					<span>{name}</span>
				</div>
				<span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
					{barWidth}
				</span>
			</div>
			<div className="h-3 w-full bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
				<div
					className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1000 ease-out"
					style={{ width: barWidth }}
					role="progressbar"
					aria-valuenow={parseInt(level)}
					aria-valuemin={0}
					aria-valuemax={100}
					aria-label={`${name} proficiency: ${barWidth}`}
				/>
			</div>
		</div>
	);
};

export default Bar;
