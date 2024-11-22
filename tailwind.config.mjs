/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'gradient': 'linear-gradient(to top, #1D1F1E 0%, rgba(29, 31, 30, 0) 100%)',
			  },
			  backgroundImage: {
				'twitch': "url('/twitch.jpg')",
				'linkedin': "url('/contratame.jpg')",
				'github': "url('/github.png')",
				'youtube': "url('/yt.png')",
				'instagram': "url('/instagram.png')",
			  },
			colors: {
				gris: "#1d1f1e",
				esmeralda200: "#193d33",
				esmeralda150: "#0C9774",
				esmeralda100: "#1CECB8",
				esmeralda50: "#DAEAE4"
			},
		},
	},
	plugins: [],
};
