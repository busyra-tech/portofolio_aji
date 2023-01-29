import { useState, useEffect, FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavItem: FunctionComponent<{
	active: string;
	setActive: Function;
	name: string;
	route: string;
}> = ({ active, setActive, name, route }) => {
	return active !== name ? (
		<Link href={route}>
			<span
				className="mx-2 cursor-pointer hover:border-b-4 hover:text-gray-400"
				onClick={() => setActive(name)}
			>
				{name}
			</span>
		</Link>
	) : null;
};

const Navbar = () => {
	const { pathname } = useRouter();

	const [active, setActive] = useState("");

	//later
	useEffect(() => {
		if (pathname === "/") setActive("About");
		else if (pathname === "/projects") setActive("Projects");
		else if (pathname === "/skills") setActive("Skills");
		else if (pathname === "/experience") setActive("Experience");
		else if (pathname === "/education") setActive("Education");
	}, []);

	return (
		<div className="flex items-center justify-between px-5 py-3 my-3">
			<span className="text-xl font-bold border-b-4 md:text-2xl border-gray-400">
				{active}
			</span>

			<div className="text-base font-normal md:text-xl">
				<NavItem active={active} setActive={setActive} name="About" route="/" />
				<NavItem
					active={active}
					setActive={setActive}
					name="Experience"
					route="/experience"
				/>
				<NavItem
					active={active}
					setActive={setActive}
					name="Education"
					route="/education"
				/>
				<NavItem
					active={active}
					setActive={setActive}
					name="Skills"
					route="/skills"
				/>
				<NavItem
					active={active}
					setActive={setActive}
					name="Projects"
					route="/projects"
				/>
			</div>
		</div>
	);
};

export default Navbar;
