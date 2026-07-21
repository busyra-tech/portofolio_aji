import Head from "next/head";
import HeroSection from "components/HeroSection";
import ServiceCard from "components/ServiceCard";
import { services } from "data";
import { siteConfig } from "config/site";

const Home = () => {
	return (
		<>
			<Head>
				<title>
					{siteConfig.pages.home.title} | {siteConfig.name}
				</title>
				<meta name="description" content={siteConfig.pages.home.description} />
			</Head>

			{/* Hero Section */}
			<HeroSection />

			{/* About Section */}
			<section className="section-wide bg-white dark:bg-dark-900">
				<div className="mb-16">
					<h2 className="heading-section text-center mb-8">About Me</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto text-center leading-relaxed">
						I&apos;m a passionate software engineer with expertise in building
						scalable, maintainable web and mobile applications. With a strong
						foundation in full-stack development, I combine technical skills
						with creative problem-solving to deliver solutions that make a real
						impact.
					</p>
				</div>

				{/* Services */}
				<div>
					<h3 className="heading-subsection text-center mb-12">What I Do</h3>
					<div className="grid-auto">
						{services.map((service) => (
							<div key={service.title} className="card-elevated group">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 group-hover:shadow-lg transition-shadow">
										<service.Icon className="w-6 h-6 text-primary-600 dark:text-accent-400" />
									</div>
									<div className="flex-1">
										<h4 className="font-semibold text-gray-900 dark:text-white mb-2">
											{service.title}
										</h4>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											{service.about}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-wide bg-gradient-to-br from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700 text-white text-center">
				<h2 className="heading-section text-white mb-6">
					Ready to Work Together?
				</h2>
				<p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
					Let&apos;s collaborate to bring your ideas to life. Whether you have a
					project idea or just want to chat, I&apos;d love to hear from you.
				</p>
				<a
					href={`mailto:${siteConfig.author.email}`}
					className="inline-flex btn-base bg-white text-primary-600 hover:shadow-xl hover:-translate-y-1"
				>
					Get in Touch
				</a>
			</section>
		</>
	);
};

export default Home;
