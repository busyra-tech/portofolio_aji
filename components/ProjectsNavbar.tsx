import { FunctionComponent } from "react";
import { Category } from "types";

export const NavItem: FunctionComponent<{
	value: Category | "all";
	handlerFilterCategory: Function;
	active: string;
}> = ({ value, handlerFilterCategory, active }) => {
	let className = "capitalize cursor-pointer hover:text-gray-400";
	if (active === value) className += " text-gray-400";

	return (
		<li className={className} onClick={() => handlerFilterCategory(value)}>
			{value}
		</li>
	);
};

const ProjectsNavbar: FunctionComponent<{
	handlerFilterCategory: Function;
	active: string;
}> = (props) => {
	return (
		<div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
			<NavItem value="all" {...props} />
			<NavItem value="web" {...props} />
			<NavItem value="mobile" {...props} />
		</div>
	);
};

export default ProjectsNavbar;
