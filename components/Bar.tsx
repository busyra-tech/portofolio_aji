import { FunctionComponent } from "react";
import { Skill } from "types";
import { formatLevel } from "lib/utils";

interface BarProps {
	value: Skill;
}

const getProficiency = (lvl: number) => {
	if (lvl >= 90)
		return {
			label: "Expert",
			badgeClass:
				"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
		};
	if (lvl >= 80)
		return {
			label: "Advanced",
			badgeClass:
				"bg-primary-500/10 text-primary-600 dark:text-accent-400 border-primary-500/20",
		};
	if (lvl >= 70)
		return {
			label: "Proficient",
			badgeClass:
				"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
		};
	return {
		label: "Competent",
		badgeClass:
			"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
	};
};

const Bar: FunctionComponent<BarProps> = ({ value }) => {
	const { Icon, level, name } = value;
	const barWidth = formatLevel(level);
	const numLevel = parseInt(level, 10) || 0;
	const { label, badgeClass } = getProficiency(numLevel);

	return (
		<div className="p-4 bg-white dark:bg-dark-800 rounded-xl border border-gray-100 dark:border-dark-700 shadow-sm hover:shadow-md transition-all duration-300">
			<div className="flex justify-between items-center mb-3">
				<div className="flex items-center gap-3">
					<div className="p-2 rounded-lg bg-gray-50 dark:bg-dark-700 text-primary-500">
						<Icon className="w-5 h-5 flex-shrink-0" />
					</div>
					<span className="font-semibold text-gray-900 dark:text-white">
						{name}
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span
						className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${badgeClass}`}
					>
						{label}
					</span>
					<span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
						{barWidth}
					</span>
				</div>
			</div>
			<div className="h-2 w-full bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
				<div
					className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1000 ease-out"
					style={{ width: barWidth }}
					role="progressbar"
					aria-valuenow={numLevel}
					aria-valuemin={0}
					aria-valuemax={100}
					aria-label={`${name} proficiency: ${barWidth}`}
				/>
			</div>
		</div>
	);
};

export default Bar;
