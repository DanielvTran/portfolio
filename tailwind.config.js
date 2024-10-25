/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			scrollBehavior: ['smooth'],
			colors: {
				primary: {
					DEFAULT: '#003060' // Main primary color
				},
				secondary: {
					DEFAULT: '#FFFFFF' // Main secondary color
				}
			},
			screens: {
				xxs: '370px', // Extra extra small screens (e.g., older smartphones) 208px
				xs: '450px', // Extra small screens 253px
				sm: '640px', // Small screens (e.g., newer smartphones) 360px
				md: '768px', // Medium screens (e.g., tablets) 432px
				lg: '1024px', // Large screens (e.g., small laptops) 576px
				xl: '1280px', // Extra large screens (e.g., larger laptops) 720px
				'2xl': '1536px', // Double extra large screens (e.g., larger desktops) 864px
				'3xl': '1972px' // Triple extra large screens (e.g., very large monitors) 1109px
			}
		}
	},
	plugins: [require('daisyui')]
};
