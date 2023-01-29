/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["ajidwisaputra.com"],
	},
};

module.exports = nextConfig;
