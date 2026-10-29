/** @type {import('tailwindcss').Config} */
const builtInThemes = require("daisyui/src/theming/themes");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		// Keep these keys so existing saved day/night preferences still work.
		themes: [
			{
				lofi: {
					...builtInThemes.lofi,
					// Wada Vol. II, 051 — wada.ink/palettes/v2-51
					"primary": "#006EB8",
					"primary-content": "#FFFFFF",
					"secondary": "#B7C2A9",
					"secondary-content": "#004F46",
					"accent": "#648F7B",
					"accent-content": "#0D211C",
					"neutral": "#004F46",
					"neutral-content": "#FFFFFF",
					"base-100": "#FFFFFF",
					"base-200": "#EEF2E8",
					"base-300": "#B7C2A9",
					"base-content": "#004F46",
					"info": "#006EB8",
					"info-content": "#FFFFFF",
					"success": "#648F7B",
					"success-content": "#0D211C",
					"warning": "#D9B66F",
					"warning-content": "#352B19",
					"error": "#A3483E",
					"error-content": "#F5F3EB",
				},
				night: {
					...builtInThemes.night,
					"primary": "#84B5B7",
					"primary-content": "#132D30",
					"secondary": "#5F9EA0",
					"secondary-content": "#102426",
					"accent": "#D6A183",
					"accent-content": "#30251F",
					"neutral": "#203C3E",
					"neutral-content": "#E1EEEA",
					"base-100": "#142628",
					"base-200": "#1B3032",
					"base-300": "#2A4345",
					"base-content": "#DCE8E5",
					"info": "#84B5B7",
					"info-content": "#132D30",
					"success": "#93BAA5",
					"success-content": "#182E24",
					"warning": "#D9B66F",
					"warning-content": "#352B19",
					"error": "#D78E82",
					"error-content": "#341E1B",
				},
			},
		],
		darkTheme: "night",
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
