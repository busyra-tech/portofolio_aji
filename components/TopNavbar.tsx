import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { siteConfig } from "config/site";

const TopNavbar = () => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path: string) => router.pathname === path;

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/80 dark:bg-dark-900/80 backdrop-blur-md shadow-md dark:shadow-dark-700/50"
					: "bg-white/40 dark:bg-dark-900/40 backdrop-blur-sm"
			}`}
		>
			<nav className="container-custom flex items-center justify-between py-4 md:py-6">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 group">
					<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
						<span className="text-white font-bold text-lg">A</span>
					</div>
					<span className="hidden md:block font-bold text-lg bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
						{siteConfig.author.name}
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					{siteConfig.navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`text-sm font-medium transition-colors duration-200 relative group ${
								isActive(item.href)
									? "text-primary-600 dark:text-accent-400"
									: "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400"
							}`}
						>
							{item.name}
							<span
								className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
									isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
								}`}
							/>
						</Link>
					))}
				</nav>

				{/* Right Side Actions */}
				<div className="flex items-center gap-4">
					{/* Theme Toggle */}
					<button
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
						className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
						title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
						aria-label="Toggle theme"
					>
						{theme === "light" ? (
							<FaMoon className="w-4 h-4" />
						) : (
							<FaSun className="w-4 h-4" />
						)}
					</button>

					{/* Contact Button */}
					<a
						href={`mailto:${siteConfig.author.email}`}
						className="hidden md:inline-flex btn-primary btn-sm"
					>
						Get in Touch
					</a>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
						aria-label="Toggle menu"
					>
						{isOpen ? (
							<FaTimes className="w-5 h-5" />
						) : (
							<FaBars className="w-5 h-5" />
						)}
					</button>
				</div>
			</nav>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="md:hidden bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700 animate-slide-down">
					<div className="container-custom py-4 space-y-2">
						{siteConfig.navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setIsOpen(false)}
								className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
									isActive(item.href)
										? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-accent-400"
										: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
								}`}
							>
								{item.name}
							</Link>
						))}
						<a
							href={`mailto:${siteConfig.author.email}`}
							className="block btn-primary btn-sm justify-center mt-4"
							onClick={() => setIsOpen(false)}
						>
							Get in Touch
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

export default TopNavbar;
