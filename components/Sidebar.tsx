import {
	AiFillFacebook,
	AiFillGithub,
	AiFillGitlab,
	AiFillInstagram,
	AiFillLinkedin,
} from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "next/image";

const Sidebar = () => {
	const { theme, setTheme } = useTheme();

	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<>
			<Image
				src="/images/aji_nobg.png"
				alt="avatar"
				className=" mx-auto rounded-full "
				height={196}
				width={148}
			/>
			<h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
				Aji Dwi Saputra
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
				Software Engineer
			</p>
			{/* Resume */}
			<a
				href="/assets/cv_ajidwisaputra.pdf"
				download="cv_ajidwisaputra.pdf"
				className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
			>
				<GiTie className="w-6 h-6" />
				<span>Download Resume</span>
			</a>

			{/* Socials */}
			<div className="flex justify-around w-9/12 mx-auto my-5 text-black dark:text-white md:w-full ">
				<a href="https://gitlab.com/ajidwisaputra27">
					<AiFillGitlab className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="https://github.com/ajidwisaputra27">
					<AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
				</a>
				<a href="https://www.linkedin.com/in/aji-dwi-saputra-b62318189">
					<AiFillLinkedin className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="https://www.facebook.com/ajidwisaputra27">
					<AiFillFacebook className="w-8 h-8 cursor-pointer" />{" "}
				</a>
				<a href="https://www.instagram.com/ajidwisaputra27">
					<AiFillInstagram className="w-8 h-8 cursor-pointer" />{" "}
				</a>
			</div>

			{/* Contacts */}
			<div
				className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
				style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
			>
				<div className="flex items-center justify-center">
					<GoLocation className="mr-2" /> <span>Jakarta,Indonesia</span>
				</div>
				<p className="my-2 "> ajidwisaputra067@gmail.com</p>
				<p className="my-2"> +62 89681353660</p>
			</div>

			{/* Email Button */}

			<button
				className="w-8/12 px-5 py-2 text-dark-100 bg-black rounded-full cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400 dark:from-white-500 dark:to-white-700 hover:scale-105 focus:outline-none"
				onClick={() => window.open("mailto:ajidwisaputra067@gmail.com")}
			>
				<div className="flex items-center justify-center">
					<MdMail className="mr-2" /> <span> Email me</span>
				</div>
			</button>
			<button
				onClick={changeTheme}
				className="w-8/12 px-5 py-2 my-4 text-dark-100 bg-black rounded-full cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400 dark:from-white-500 dark:to-white-700 focus:outline-none hover:scale-105 "
			>
				{/* //TODO remove bg black */}
				<div className="flex items-center justify-center">
					{theme == "dark" ? (
						<FaSun className="mr-2" />
					) : (
						<FaMoon className="mr-2" />
					)}
					<span>{theme == "dark" ? "Light Mode" : "Dark Mode"}</span>
				</div>
			</button>
		</>
	);
};

export default Sidebar;
