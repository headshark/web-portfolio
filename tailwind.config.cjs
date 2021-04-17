module.exports = {
	purge: {
		enabled: true,
		content: ['./src/**/*.{html,js,php,svelte}']
	},
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
