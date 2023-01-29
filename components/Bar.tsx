import { FunctionComponent } from "react";

import { Skill } from "types";

const Bar: FunctionComponent<{ value: Skill }> = ({
	value: { Icon, level, name },
}) => {
	const bar_width = `${level}%`;
	return (
		<div className="my-2 text-dark-300 bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
			<div
				className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-gray-200 to-gray-400 dark:from-white-500 dark:to-white-700"
				style={{
					width: bar_width,
				}}
			>
				<Icon className="mr-3" /> {name}
			</div>
		</div>
	);
};
export default Bar;
