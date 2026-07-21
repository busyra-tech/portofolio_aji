import "@/styles/globals.css";
import TopNavbar from "components/TopNavbar";
import { siteConfig } from "config/site";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Head>
				<title>{siteConfig.name}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={siteConfig.description} />
				<meta name="theme-color" content="#6366f1" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>

				{/* Open Graph Tags */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content={siteConfig.name} />
				<meta property="og:description" content={siteConfig.description} />
				<meta property="og:image" content={siteConfig.ogImage} />
				<meta property="og:url" content={siteConfig.url} />

				{/* Twitter Card Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={siteConfig.name} />
				<meta name="twitter:description" content={siteConfig.description} />
				<meta name="twitter:image" content={siteConfig.ogImage} />

				{/* Favicon */}
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%236366f1'>A</text></svg>"
				/>
			</Head>

			{/* Modern Layout */}
			<TopNavbar />
			<main className="min-h-screen bg-white dark:bg-dark-900">
				<Component {...pageProps} />
			</main>

			{/* Footer */}
			<footer className="border-t border-gray-200 dark:border-dark-700 bg-gray-50 dark:bg-dark-800">
				<div className="container-custom py-12">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
						{/* Brand */}
						<div>
							<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
								{siteConfig.author.name}
							</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								{siteConfig.description}
							</p>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="font-semibold text-gray-900 dark:text-white mb-4">
								Quick Links
							</h4>
							<ul className="space-y-2">
								{siteConfig.navItems.map((item) => (
									<li key={item.href}>
										<a href={item.href} className="text-sm link-hover">
											{item.name}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h4 className="font-semibold text-gray-900 dark:text-white mb-4">
								Get in Touch
							</h4>
							<p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
								{siteConfig.author.email}
							</p>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								{siteConfig.author.location}
							</p>
						</div>
					</div>

					<div className="border-t border-gray-200 dark:border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-600 dark:text-gray-400">
							© {new Date().getFullYear()} {siteConfig.author.name}. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</ThemeProvider>
	);
}
