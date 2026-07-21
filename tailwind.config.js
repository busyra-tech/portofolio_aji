/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: [
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
			],
			mono: ["ui-monospace", "SFMono-Regular", "Menlo"],
			display: ["Kaushan Script"],
		},
		boxShadow: {
			"custom-light": " 0 0 10px #313131",
			"custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
			card: "0 10px 30px rgba(0, 0, 0, 0.1)",
			"card-dark": "0 10px 30px rgba(0, 0, 0, 0.3)",
			sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
			md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
			lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
			xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
		},

		extend: {
			colors: {
				primary: {
					50: "#eef2ff",
					100: "#e0e7ff",
					200: "#c7d2fe",
					300: "#a5b4fc",
					400: "#818cf8",
					500: "#6366f1",
					600: "#4f46e5",
					700: "#4338ca",
					800: "#3730a3",
					900: "#312e81",
				},
				secondary: {
					50: "#fdf2f8",
					100: "#fce7f3",
					200: "#fbcfe8",
					300: "#f9a8d4",
					400: "#f472b6",
					500: "#ec4899",
					600: "#db2777",
					700: "#be185d",
					800: "#9d174d",
					900: "#831843",
				},
				accent: {
					50: "#ecf8ff",
					100: "#cffafe",
					200: "#a5f3fc",
					300: "#67e8f9",
					400: "#22d3ee",
					500: "#06b6d4",
					600: "#0891b2",
					700: "#0e7490",
					800: "#155e75",
					900: "#164e63",
				},
				success: {
					500: "#10b981",
					600: "#059669",
				},
				warning: {
					500: "#f59e0b",
					600: "#d97706",
				},
				error: {
					500: "#ef4444",
					600: "#dc2626",
				},
				green: {
					DEFAULT: "#10b981",
				},
				dark: {
					DEFAULT: "#010101",
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					500: "#0f1115",
					600: "#1a1b1e",
					700: "#202125",
					800: "#141518",
					900: "#0a0c0e",
				},
			},
			spacing: {
				128: "32rem",
				144: "36rem",
				160: "40rem",
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				"slide-up": "slideUp 0.5s ease-out",
				"slide-down": "slideDown 0.5s ease-out",
				"bounce-slow": "bounce 3s infinite",
				"pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"gradient-shift": "gradientShift 3s ease infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(30px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				slideDown: {
					"0%": { transform: "translateY(-30px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				gradientShift: {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	variants: {
		extend: {
			boxShadow: ["dark"],
		},
	},
	plugins: [],
};
