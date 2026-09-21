import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from "react-icons/fa";
import { siteConfig } from "config/site";
import Image from "next/image";

const HeroSection = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		// Animated background using canvas
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;

		const particles: Array<{
			x: number;
			y: number;
			vx: number;
			vy: number;
			size: number;
			opacity: number;
		}> = [];

		// Create particles
		for (let i = 0; i < 50; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
				size: Math.random() * 3,
				opacity: Math.random() * 0.5 + 0.3,
			});
		}

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw and update particles
			particles.forEach((p) => {
				p.x += p.vx;
				p.y += p.vy;

				// Wrap around
				if (p.x < 0) p.x = canvas.width;
				if (p.x > canvas.width) p.x = 0;
				if (p.y < 0) p.y = canvas.height;
				if (p.y > canvas.height) p.y = 0;

				ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
				ctx.fillRect(p.x, p.y, p.size, p.size);
			});

			requestAnimationFrame(animate);
		};

		animate();

		// Handle resize
		const handleResize = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const scrollDown = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: "smooth",
		});
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
			{/* Animated Background Canvas */}
			<canvas
				ref={canvasRef}
				className="absolute inset-0 opacity-20 dark:opacity-10"
			/>

			{/* Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-900 dark:to-dark-800" />

			{/* Animated shapes */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:opacity-10" />
				<div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:opacity-10" />
				<div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:opacity-10" />
			</div>

			{/* Content */}
			<div className="container-custom relative z-10 text-center px-4">
				{/* Profile Image */}
				<div className="mb-8 flex justify-center">
					<div className="relative w-32 h-32 md:w-48 md:h-48">
						<div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-75 blur-xl animate-pulse" />
						<Image
							src="/images/aji_nobg.png"
							alt={siteConfig.author.name}
							fill
							className="relative rounded-full border-4 border-white dark:border-dark-700 shadow-2xl object-cover"
						/>
					</div>
				</div>

				{/* Title and Description */}
				<h1 className="heading-section text-5xl md:text-7xl mb-6">
					<span className="text-gradient">{siteConfig.author.name}</span>
					<br />
					<span className="text-gray-900 dark:text-white">
						Software Engineer
					</span>
				</h1>

				<p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
					Building scalable web and mobile applications with modern
					technologies. Full-stack developer passionate about creating impactful
					digital solutions.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					<a
						href={`mailto:${siteConfig.author.email}`}
						className="btn-primary btn-lg"
					>
						Start a Project
					</a>
					<a
						href={siteConfig.resume.url}
						download={siteConfig.resume.filename}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-secondary btn-lg flex items-center justify-center gap-2 border border-primary-500/30 text-primary-600 dark:text-primary-400 hover:border-primary-500"
					>
						<FaDownload className="w-4 h-4" />
						<span>Download CV</span>
					</a>
					<a
						href={siteConfig.socials.github}
						target="_blank"
						rel="noreferrer"
						className="btn-secondary btn-lg"
					>
						View GitHub
					</a>
				</div>

				{/* Social Links */}
				<div className="flex gap-4 justify-center mb-12">
					<a
						href={siteConfig.socials.github}
						target="_blank"
						rel="noreferrer"
						className="group p-3 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
						title="GitHub"
					>
						<FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
					</a>
					<a
						href={siteConfig.socials.linkedin}
						target="_blank"
						rel="noreferrer"
						className="group p-3 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-accent-500 dark:hover:bg-accent-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
						title="LinkedIn"
					>
						<FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
					</a>
				</div>

				{/* Scroll Down Indicator */}
				<button
					onClick={scrollDown}
					className="animate-bounce mx-auto text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
					aria-label="Scroll down"
				>
					<FaArrowDown className="w-6 h-6" />
				</button>
			</div>
		</section>
	);
};

export default HeroSection;
