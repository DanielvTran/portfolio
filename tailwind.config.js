/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#003060' // Main primary color
				},
				secondary: {
					DEFAULT: '#FFFFFF' // Main secondary color
				}
			},
			screens: {
				xxs: '370px', // Extra extra small screens (e.g., older smartphones)
				xs: '450px', // Extra small screens
				sm: '640px', // Small screens (e.g., newer smartphones)
				md: '768px', // Medium screens (e.g., tablets)
				lg: '1024px', // Large screens (e.g., small laptops)
				xl: '1280px', // Extra large screens (e.g., larger laptops)
				'2xl': '1536px', // Double extra large screens (e.g., larger desktops)
				'3xl': '1972px' // Triple extra large screens (e.g., very large monitors)
			}
		}
	},
	plugins: [require('daisyui')]
};
