module.exports = {
	env: {
		NEXT_MODE: process.env.NEXT_MODE,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ajidwisaputra.com",
			},
		],
	},
};
