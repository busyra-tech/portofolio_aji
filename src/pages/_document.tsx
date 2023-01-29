import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
					rel="stylesheet"
				/>
				<title>Aji Dwi Saputra</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<body className="bg-fixed bg-gradient-to-r from-white to-white-700 dark:from-dark-500 dark:to-dark-700 dark:text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
