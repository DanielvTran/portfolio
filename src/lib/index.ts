import type { Project } from './types';

// Thumbnails
import todolistThumbnail from '../../static/portfolio/thumbnails/todolistThumbnail.png';
import personalWebsiteThumbnail from '../../static/portfolio/thumbnails/personalWebsiteThumbnail.png';

// Planning
import personalWebsiteFigma1 from '../../static/portfolio/planning/personalWebsiteDesign1.png';
import personalWebsiteFigma2 from '../../static/portfolio/planning/personalWebsiteDesign2.png';
import personalWebsiteFigma3 from '../../static/portfolio/planning/personalWebsiteDesign3.png';
import personalWebsiteFigma4 from '../../static/portfolio/planning/personalWebsiteDesign4.png';
import personalWebsiteFigma5 from '../../static/portfolio/planning/personalWebsiteDesign5.png';
import personalWebsiteFigma6 from '../../static/portfolio/planning/personalWebsiteDesign6.png';
import personalWebsiteFigma7 from '../../static/portfolio/planning/personalWebsiteDesign7.png';

// Demo
import personalWebsiteDemo from '../../static/portfolio/demo/personalWebsiteDemo.mov';

export const projects: Record<string, Project> = {
	'personal-website': {
		title: 'Personal Website',
		description: 'Created using Svelte',
		overview:
			'The goal of this project was to build a clean, aesthetically appealing personal portfolio website designed to showcase my skills, projects, and professional experiences. I focused on creating a user-friendly and visually engaging platform that highlights my expertise as a web developer, using modern design principles and smooth, responsive layouts.',
		planningDescription:
			"When designing my personal website, I start by prototyping. This involves selecting the color scheme, defining the page structure, and creating initial layouts, which you can see in the image carousel below. Once the design is set, I begin development by focusing on a specific screen size. I create all the pages based on that size, ensuring the design aligns with my vision. If it doesn’t, I revisit Figma for further adjustments—there were quite a few iterations along the way! 😅 Once I'm satisfied with the design, I proceed to make it responsive across major screen sizes: 370px, 450px, 640px, 768px, 1024px, 1280px, 1536px, and 1972px. This approach ensures a consistent and polished experience across all devices.",
		planningImages: [
			personalWebsiteFigma1,
			personalWebsiteFigma2,
			personalWebsiteFigma3,
			personalWebsiteFigma4,
			personalWebsiteFigma5,
			personalWebsiteFigma6,
			personalWebsiteFigma7
		],
		demoDescription:
			'This walkthrough demo explores the website, highlighting its responsive design across all pages.',
		demoVideo: personalWebsiteDemo,
		obstacles:
			'One of the main challenges was making the website fully responsive across all devices. I tackled this by using flexible CSS grids and media queries to ensure a consistent layout on different screen sizes. Another issue was optimizing image loading for a better user experience, which I resolved by using image compression and lazy loading techniques.',
		summary:
			'Building my personal portfolio website was an exciting journey that helped me refine my skills in design and development. I learned a lot about Svelte, Figma, responsive design, and performance optimization. Moving forward, I plan to consistently update and improve the existing project pages with more detailed descriptions.',
		image: personalWebsiteThumbnail,
		sourceCodeLink: '',
		slug: 'personal-website'
	}
};
