import { FunctionComponent } from "react";
import { Category } from "types";

const CATEGORIES: Array<Category | "all"> = [
	"all",
	"Laravel",
	"Adonis Js",
	"Express Js",
	"React Js",
	"Next Js",
	"Vue Js",
	"Nuxt Js",
	"Flutter",
];

interface NavItemProps {
	value: Category | "all";
	handlerFilterCategory: (category: Category | "all") => void;
	active: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({
	value,
	handlerFilterCategory,
	active,
}) => {
	const isActive = active === value;
	const className = `capitalize px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 ${
		isActive
			? "bg-primary-500 text-white shadow-md"
			: "bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600"
	}`;

	return (
		<li
			className={className}
			onClick={() => handlerFilterCategory(value)}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					handlerFilterCategory(value);
				}
			}}
			aria-pressed={isActive}
		>
			{value}
		</li>
	);
};

interface ProjectsNavbarProps {
	handlerFilterCategory: (category: Category | "all") => void;
	active: string;
}

const ProjectsNavbar: FunctionComponent<ProjectsNavbarProps> = ({
	handlerFilterCategory,
	active,
}) => {
	return (
		<nav
			className="flex flex-wrap justify-center gap-3 list-none"
			aria-label="Project categories"
		>
			{CATEGORIES.map((category) => (
				<NavItem
					key={category}
					value={category}
					handlerFilterCategory={handlerFilterCategory}
					active={active}
				/>
			))}
		</nav>
	);
};

export default ProjectsNavbar;
