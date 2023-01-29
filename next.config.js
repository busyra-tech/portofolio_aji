/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,
	env: {
		NEXT_MODE: process.env.NEXT_MODE,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["ajidwisaputra.com"],
	},
};

module.exports = nextConfig;
