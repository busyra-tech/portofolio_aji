import Head from "next/head";
import HeroSection from "components/HeroSection";
import { services } from "data";
import { siteConfig } from "config/site";
import { createMarkup } from "lib/utils";

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
				<div className="mb-12">
					<h2 className="heading-section text-center mb-8">About Me</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto text-center leading-relaxed">
						I&apos;m a software engineer with expertise in building
						scalable, maintainable web and mobile applications. Currently
						driving software solutions at{" "}
						<span className="font-semibold text-gray-900 dark:text-white">
							IBS Group
						</span>{" "}
						and operating{" "}
						<a
							href="https://busyratech.web.id"
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold text-primary-600 dark:text-accent-400 hover:underline"
						>
							Busyra Tech
						</a>
						. With a strong foundation in full-stack development, I combine
						technical rigor with product craftsmanship to deliver systems that make
						a real business impact.
					</p>
				</div>

				{/* Key Highlights Stats */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
					<div className="p-6 bg-gray-50/70 dark:bg-dark-800/50 rounded-2xl border border-gray-100 dark:border-dark-700 text-center hover:shadow-md transition-all">
						<div className="text-3xl font-extrabold text-primary-600 dark:text-accent-400 mb-1">
							5+ Years
						</div>
						<div className="font-semibold text-gray-900 dark:text-white mb-1">
							Experience
						</div>
						<div className="text-xs text-gray-500 dark:text-gray-400">
							Enterprise & Production Systems
						</div>
					</div>

					<div className="p-6 bg-gray-50/70 dark:bg-dark-800/50 rounded-2xl border border-gray-100 dark:border-dark-700 text-center hover:shadow-md transition-all">
						<div className="text-3xl font-extrabold text-primary-600 dark:text-accent-400 mb-1">
							15+
						</div>
						<div className="font-semibold text-gray-900 dark:text-white mb-1">
							Shipped Projects
						</div>
						<div className="text-xs text-gray-500 dark:text-gray-400">
							Web, Mobile & Cloud Solutions
						</div>
					</div>

					<div className="p-6 bg-gray-50/70 dark:bg-dark-800/50 rounded-2xl border border-gray-100 dark:border-dark-700 text-center hover:shadow-md transition-all">
						<div className="text-3xl font-extrabold text-primary-600 dark:text-accent-400 mb-1">
							Dual Track
						</div>
						<div className="font-semibold text-gray-900 dark:text-white mb-1">
							Enterprise & Agency
						</div>
						<div className="text-xs text-gray-500 dark:text-gray-400">
							IBS Group & Busyra Tech
						</div>
					</div>
				</div>

				{/* Services */}
				<div>
					<h3 className="heading-subsection text-center mb-12">What I Do</h3>
					<div className="grid-auto">
						{services.map((service) => (
							<div key={service.title} className="card-elevated group">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 group-hover:shadow-lg transition-shadow">
										<service.Icon className="w-6 h-6 text-primary-600 dark:text-accent-400 flex-shrink-0" />
									</div>
									<div className="flex-1">
										<h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
											{service.title}
										</h4>
										<div
											className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
											dangerouslySetInnerHTML={createMarkup(service.about)}
										/>
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
