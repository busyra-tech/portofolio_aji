module.exports = {
	reactStrictMode: true,
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
