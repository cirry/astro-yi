/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	corePlugins: {
		preflight: false,
	},
	darkmode: "class",
	theme: {
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '960px',
			// => @media (min-width: 1024px) { ... }

			'xl': '960px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1080px',
			// => @media (min-width: 1536px) { ... }
		},
		textColor: {
			skin: {
				base: withOpacity("--color-text"),
				active: withOpacity("--color-text-active")
			},
		},

		backgroundColor: {
			skin: {
				fill: withOpacity("--color-fill"),
				secondary: withOpacity("--color-fill-secondary"),
				card: withOpacity("--color-card"),
			},
		},
		textDecorationColor: {
			skin: {
				base: withOpacity("--color-border"),
			}
		},
		borderColor: {
			skin: {
				normal: withOpacity('--color-text'),
				base: withOpacity('--color-border'),
			},
		},
		extend: {
			colors: {
				custom: {
					title: '#555',
					subtitle: "#999",
					hover: "#e0a419",
					active: "#ff7f50",
					grey: "#f6f6f6",
					nav: "#ded6d8",
					primary: "#edede9",
					second: "#d6ccc2",
					third: "#f5ebe0",
					forth: "#e3d5ca",
					fifth: "#d5bdaf"
				}
			}
		},
	},
	plugins: [],
}

