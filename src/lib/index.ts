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

import todolistDesignFigma1 from '../../static/portfolio/planning/todolistDesign1.png';
import todolistDesignFigma2 from '../../static/portfolio/planning/todolistDesign2.png';
import todolistDesignFigma3 from '../../static/portfolio/planning/todolistDesign3.png';
import todolistDesignFigma4 from '../../static/portfolio/planning/todolistDesign4.png';
import todolistDesignFigma5 from '../../static/portfolio/planning/todolistDesign5.png';

// Demo
import personalWebsiteDemo from '../../static/portfolio/demo/personalWebsiteDemo.mov';
import todolistDemo from '../../static/portfolio/demo/todolistDemo.mov';

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
		obstacles: [
			'One of the main challenges was making the website fully responsive across all devices. I tackled this by using flexible CSS grids and media queries to ensure a consistent layout on different screen sizes. Another issue was optimizing image loading for a better user experience, which I resolved by using image compression and lazy loading techniques.'
		],
		summary:
			'Building my personal portfolio website was an exciting journey that helped me refine my skills in design and development. I learned a lot about Svelte, Figma, responsive design, and performance optimization. Moving forward, I plan to consistently update and improve the existing project pages with more detailed descriptions.',
		image: personalWebsiteThumbnail,
		sourceCodeLink: '',
		slug: 'personal-website'
	},
	'to-do-list': {
		title: 'To-Do List',
		description: 'Built with React, Express, and Mongoose',
		overview:
			'This project aimed to create a simple yet effective To-Do List application to manage tasks. The focus was on building a clean, user-friendly interface that allows users to add, edit, and delete tasks seamlessly. The application demonstrates full CRUD functionality and uses a responsive design to ensure usability across devices.',
		planningDescription:
			'Similar to many of my other web development projects, I usually start with the theme, and structure of the application. This is generated using Figma, which I am still learning how to use. For this project, I had a initial design idea, however, as I was developing and implementing it, it did not look as great. Therefore there is a slight change in design structure in the final design, which can be seen in the demo.',
		planningImages: [
			todolistDesignFigma1,
			todolistDesignFigma2,
			todolistDesignFigma3,
			todolistDesignFigma4,
			todolistDesignFigma5
		],
		demoDescription:
			'This demo walks through the main features of the To-Do List app, showing how tasks can be created, edited, completed, and deleted. It highlights the responsive design and user-friendly interactions for efficient task management.',
		demoVideo: todolistDemo,
		obstacles: [
			'One major challenge I encountered was my limited understanding of the Context API in React. Initially, managing state across components was difficult, as I struggled to grasp the best practices for efficient state management. Through research and experimentation, I was able to implement the Context API, which significantly improved the way state was shared across components.',
			"Another significant hurdle was designing a user-friendly interface for mobile screens. The initial layout didn't adapt well to smaller devices, so I had to rethink my approach using CSS Flexbox and media queries. This involved careful consideration of how elements should reflow on different screen sizes to ensure a seamless experience.",
			"Lastly, the app's initial design didn’t turn out as expected. The original vision didn't align with the functionality and user experience I wanted to achieve, so I made the tough decision to redesign it. This experience taught me the importance of flexibility in design and that sometimes, starting over is necessary to create a product that truly meets user needs."
		],
		summary:
			'Building this to-do list application was a valuable experience that strengthened my skills in full-stack development, especially with React and Express. I learned a lot about efficient state management, context, user authentication, bearer tokens, UI design, and optimizing responsiveness. Although this is a simple to-do list application, I plan to add more categorization options in the future, such as creating collections and organizing tasks within them.',
		image: todolistThumbnail,
		sourceCodeLink: '',
		slug: 'to-do-list'
	}
};
