/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'gradient': 'linear-gradient(to top, #1D1F1E 0%, rgba(29, 31, 30, 0) 100%)',
			  },
			  backgroundImage: {
				'twitch': "url('/twitch.webp')",
				'linkedin': "url('/contratame.webp')",
				'github': "url('/github.webp')",
				'youtube': "url('/yt.webp')",
				'instagram': "url('/instagram.webp')",
				'pepino': "url('/pepino.webp')",
				'guitarra': "url('/guitarra.webp')",
				'programador': "url('/programador.webp')",
				'gatito': "url('/gatito.webp')",
				'dager': "url('/fotodibujo.png')",
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
