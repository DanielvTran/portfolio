/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#003060'
				},
				secondary: {
					DEFAULT: '#FFFFFF'
				}
			}
		}
	},
	plugins: [require('daisyui')]
};
