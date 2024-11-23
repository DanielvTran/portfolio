import type { Project } from './types';

// Thumbnails
import todolistThumbnail from '../../static/portfolio/thumbnails/todolistThumbnail.png';
import personalWebsiteThumbnail from '../../static/portfolio/thumbnails/personalWebsiteThumbnail.png';
import mintyPlanThumbnail from '../../static/portfolio/thumbnails/mintyPlanThumbnail.png';

// Planning
import personalWebsiteFigma1 from '../../static/portfolio/planning/personalwebsite/personalWebsiteDesign1.png';
import personalWebsiteFigma2 from '../../static/portfolio/planning/personalwebsite/personalWebsiteDesign2.png';
import personalWebsiteFigma3 from '../../static/portfolio/planning/personalwebsite/personalWebsiteDesign3.png';
import personalWebsiteFigma4 from '../../static/portfolio/planning/personalwebsite/personalWebsiteDesign4.png';
import personalWebsiteFigma5 from '../../static/portfolio/planning/personalwebsite/personalWebsiteDesign5.png';
import personalWebsiteFigma6 from '../../static/portfolio/planning/personalwebsite/personalWebsiteDesign6.png';
import personalWebsiteFigma7 from '../../static/portfolio/planning/personalwebsite/personalWebsiteDesign7.png';

import todolistDesignFigma1 from '../../static/portfolio/planning/todolist/todolistDesign1.png';
import todolistDesignFigma2 from '../../static/portfolio/planning/todolist/todolistDesign2.png';
import todolistDesignFigma3 from '../../static/portfolio/planning/todolist/todolistDesign3.png';
import todolistDesignFigma4 from '../../static/portfolio/planning/todolist/todolistDesign4.png';
import todolistDesignFigma5 from '../../static/portfolio/planning/todolist/todolistDesign5.png';

import personalFinanceManagerFigma1 from '../../static/portfolio/planning/personalfinancemanager/design1.png';
import personalFinanceManagerFigma2 from '../../static/portfolio/planning/personalfinancemanager/design2.png';
import personalFinanceManagerFigma3 from '../../static/portfolio/planning/personalfinancemanager/design3.png';
import personalFinanceManagerFigma4 from '../../static/portfolio/planning/personalfinancemanager/design4.png';
import personalFinanceManagerFigma5 from '../../static/portfolio/planning/personalfinancemanager/design5.png';
import personalFinanceManagerFigma6 from '../../static/portfolio/planning/personalfinancemanager/design6.png';
import personalFinanceManagerFigma7 from '../../static/portfolio/planning/personalfinancemanager/design7.png';
import personalFinanceManagerFigma8 from '../../static/portfolio/planning/personalfinancemanager/design8.png';
import personalFinanceManagerFigma9 from '../../static/portfolio/planning/personalfinancemanager/design9.png';
import personalFinanceManagerFigma10 from '../../static/portfolio/planning/personalfinancemanager/design10.png';
import personalFinanceManagerFigma11 from '../../static/portfolio/planning/personalfinancemanager/design11.png';
import personalFinanceManagerFigma12 from '../../static/portfolio/planning/personalfinancemanager/design12.png';
import personalFinanceManagerFigma13 from '../../static/portfolio/planning/personalfinancemanager/design13.png';
import personalFinanceManagerFigma14 from '../../static/portfolio/planning/personalfinancemanager/design14.png';

// Demo
import personalWebsiteDemo from '../../static/portfolio/demo/personalWebsiteDemo.mov';
import todolistDemo from '../../static/portfolio/demo/todolistDemo.mov';

export const projects: Record<string, Project> = {
	'personal-website': {
		title: 'Personal Website',
		description: 'Created using Svelte',
		overview:
			'The goal of this project was to build a clean, aesthetically appealing personal portfolio website designed to showcase my skills, projects, and professional experiences. I focused on creating a user-friendly and visually engaging platform that highlights my expertise as a web developer, using modern design principles and smooth, responsive layouts.',
		figmaFile: '../../static/portfolio/figma/personalWebsiteFigma.fig',
		planningDescriptions: [
			"When designing my personal website, I start by prototyping. This involves selecting the color scheme, defining the page structure, and creating initial layouts, which you can see in the image carousel below. Once the design is set, I begin development by focusing on a specific screen size. I create all the pages based on that size, ensuring the design aligns with my vision. If it doesn’t, I revisit Figma for further adjustments—there were quite a few iterations along the way! 😅 Once I'm satisfied with the design, I proceed to make it responsive across major screen sizes: 370px, 450px, 640px, 768px, 1024px, 1280px, 1536px, and 1972px. This approach ensures a consistent and polished experience across all devices."
		],
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
		thumbnail: personalWebsiteThumbnail,
		sourceCodeLink: '',
		slug: 'personal-website'
	},
	'to-do-list': {
		title: 'To-Do List',
		description: 'Built using React, Express, and MongoDB',
		overview:
			'This project aimed to create a simple yet effective To-Do List application to manage tasks. The focus was on building a clean, user-friendly interface that allows users to add, edit, and delete tasks seamlessly. The application demonstrates full CRUD functionality and uses a responsive design to ensure usability across devices.',
		figmaFile: '../../static/portfolio/figma/toDoListFigma.fig',
		planningDescriptions: [
			'Similar to many of my other web development projects, I usually start with the theme, and structure of the application. This is generated using Figma, which I am still learning how to use. For this project, I had a initial design idea, however, as I was developing and implementing it, it did not look as great. Therefore there is a slight change in design structure in the final design, which can be seen in the demo.'
		],
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
		thumbnail: todolistThumbnail,
		sourceCodeLink: '',
		slug: 'to-do-list'
	},
	'personal-finance-manager': {
		title: 'Personal Finance Manager',
		description: 'Built with Next.js, Prisma for MySQL, Tailwind, DaisyUI',
		overview:
			'The Personal Finance Manager is a web application designed to help users track their income and expenses, set budgets, and visualize financial data through interactive summaries and charts. With features like transaction management, budget tracking, and customizable categories, it provides a solution for managing personal finances. The application also supports secure user authentication to ensure data privacy and protection.',
		figmaFile: '../../static/portfolio/figma/personalFinanceManagerFigma.fig',
		planningDescriptions: [
			'Unlike many of my other projects, this time I sat down and really highlighted what features of the application I could like to be able to complete. This is so that I will not be stuck in a cycle of trying to make the application perfect, but rather scope out the project and complete that. Therefore, I started out with writing the user stories, which highlights a lot of the CRUD functions for income, expense, budget, categories, etc.',
			"Then, I moved onto doing design research. This process is usually taxing, as there are so many different inspiration online. Eventually, I started designing and coming up designs as I go. There were, many things that worked and didn't work, which is why it takes quite a while to design the structure of the website. But eventually, I came up with the design, as seen in the image carousel.",
			'Lastly, I had to choose which tech stack that I want to develop with. I have noticed, that I am quite unfamiliar with Nextjs and, have not used MySQL in a while. So, I challenged myself to work with this stack.'
		],
		planningImages: [
			personalFinanceManagerFigma1,
			personalFinanceManagerFigma2,
			personalFinanceManagerFigma3,
			personalFinanceManagerFigma4,
			personalFinanceManagerFigma5,
			personalFinanceManagerFigma6,
			personalFinanceManagerFigma7,
			personalFinanceManagerFigma8,
			personalFinanceManagerFigma9,
			personalFinanceManagerFigma10,
			personalFinanceManagerFigma11,
			personalFinanceManagerFigma12,
			personalFinanceManagerFigma13,
			personalFinanceManagerFigma14
		],
		demoDescription:
			'This demo walks through the main features of the Personal Finance Manager app, showing the tracking of income, expenses, budgets, categories, and reports visualisation.',
		demoVideo: todolistDemo,
		obstacles: [
			"A big challenge of this application, was the authentication, specifically protecting the routes. Although, I have done this in my To-Do-List app it checked the tokens on every page load causing a little bit of repetitive code. While for this application, I wanted to make use of the middleware, to check the application for valid tokens whenever the user navigates to specified pages. However, I thought the middleware.ts file had to be in the 'root' of a nextjs project, which was incorrect. So, I was stuck in the cycle of trying to make it work at the 'root' of the project, when that is not even possible. I finally realised that it was supposed to go in the root of '/src'.",
			"Another significant hurdle was designing a user-friendly interface for mobile screens. The initial layout didn't adapt well to smaller devices, so I had to rethink my approach using CSS Flexbox and media queries. This involved careful consideration of how elements should reflow on different screen sizes to ensure a seamless experience.",
			"Lastly, the app's initial design didn’t turn out as expected. The original vision didn't align with the functionality and user experience I wanted to achieve, so I made the tough decision to redesign it. This experience taught me the importance of flexibility in design and that sometimes, starting over is necessary to create a product that truly meets user needs."
		],
		summary:
			'Building this to-do list application was a valuable experience that strengthened my skills in full-stack development, especially with React and Express. I learned a lot about efficient state management, context, user authentication, bearer tokens, UI design, and optimizing responsiveness. Although this is a simple to-do list application, I plan to add more categorization options in the future, such as creating collections and organizing tasks within them.',
		thumbnail: mintyPlanThumbnail,
		sourceCodeLink: '',
		slug: 'personal-finance-manager'
	}
};
