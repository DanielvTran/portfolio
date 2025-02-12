import type { Project, JobExperiences, SocialLinks } from './types';

// Thumbnails
import todolistThumbnail from '../../static/portfolio/thumbnails/todolistThumbnail.png';
import personalWebsiteThumbnail from '../../static/portfolio/thumbnails/personalWebsiteThumbnail.png';
import mintyPlanThumbnail from '../../static/portfolio/thumbnails/mintyPlanThumbnail.png';
import qaTestingPlaywrightThumbnail from '../../static/portfolio/thumbnails/qaTestingPlaywrightThumbnail.png';

// Planning
const personalPortfolioImages = Object.values(
	import.meta.glob('../../static/portfolio/planning/personalwebsite/*.png', {
		eager: true
	})
).map((module: any) => module.default) as string[];

const toDoListImages = Object.values(
	import.meta.glob('../../static/portfolio/planning/todolist/*.png', {
		eager: true
	})
).map((module: any) => module.default) as string[];

const personalFinanceManagerImages = Object.values(
	import.meta.glob('../../static/portfolio/planning/personalfinancemanager/*.png', {
		eager: true
	})
).map((module: any) => module.default) as string[];

// Demo
import personalWebsiteDemo from '../../static/portfolio/demo/personalWebsiteDemo.mov';
import todolistDemo from '../../static/portfolio/demo/todolistDemo.mov';
import qaTestingPlaywrightDemo from '../../static/portfolio/demo/qaTestingPlaywrightDemo.mov';

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
		planningImages: Object.values(personalPortfolioImages),
		demoDescription:
			'This walkthrough demo explores the website, highlighting its responsive design across all pages.',
		demoVideo: personalWebsiteDemo,
		obstacles: [
			'One of the main challenges was making the website fully responsive across all devices. I tackled this by using flexible CSS grids and media queries to ensure a consistent layout on different screen sizes. Another issue was optimizing image loading for a better user experience, which I resolved by using image compression and lazy loading techniques.'
		],
		summary:
			'Building my personal portfolio website was an exciting journey that helped me refine my skills in design and development. I learned a lot about Svelte, Figma, responsive design, and performance optimization. Moving forward, I plan to consistently update and improve the existing project pages with more detailed descriptions.',
		thumbnail: personalWebsiteThumbnail,
		sourceCodeLink: 'https://github.com/DanielvTran/portfolio',
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
		planningImages: Object.values(toDoListImages),
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
		sourceCodeLink: 'https://github.com/DanielvTran/to-do-list',
		slug: 'to-do-list'
	},
	'personal-finance-manager': {
		title: 'Personal Finance Manager',
		description: 'Built with Next.js, MySQL, Tailwind',
		overview:
			'The Personal Finance Manager is a web application designed to help users track their income and expenses, set budgets, and visualize financial data through interactive summaries and charts. With features like transaction management, budget tracking, and customizable categories, it provides a solution for managing personal finances. The application also supports secure user authentication to ensure data privacy and protection.',
		figmaFile: '../../static/portfolio/figma/personalFinanceManagerFigma.fig',
		planningDescriptions: [
			'Unlike many of my other projects, this time I sat down and really highlighted what features of the application I could like to be able to complete. This is so that I will not be stuck in a cycle of trying to make the application perfect, but rather scope out the project and complete that. Therefore, I started out with writing the user stories, which highlights a lot of the CRUD functions for income, expense, budget, categories, etc.',
			"Then, I moved onto doing design research. This process is usually taxing, as there are so many different inspiration online. Eventually, I started designing and coming up designs as I go. There were, many things that worked and didn't work, which is why it takes quite a while to design the structure of the website. But eventually, I came up with the design, as seen in the image carousel.",
			'Lastly, I had to choose which tech stack that I want to develop with. I have noticed, that I am quite unfamiliar with Nextjs and, have not used MySQL in a while. So, I challenged myself to work with this stack.'
		],
		planningImages: Object.values(personalFinanceManagerImages),
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
		sourceCodeLink: 'https://github.com/DanielvTran/personal-finance-manager',
		slug: 'personal-finance-manager'
	},
	'qa-testing-playwright': {
		title: 'QA Testing Playwright',
		description: 'Test Hacker News with Playwright',
		overview:
			'This is a project to try out qa end-to-end testing with Playwright. The goal is to test the Hacker News website to see if the website is working as expected. The tests include checking if the website is displaying the new articles from newest to oldest, if the links of the articles go to the right url and displays the right content, and if the css are displaying correctly.',
		figmaFile: '../../static/portfolio/figma/personalFinanceManagerFigma.fig',
		planningDescriptions: [],
		planningImages: [],
		demoDescription:
			'This demo walks through the test cases that I have created for the Hacker News website. It shows the the use of playwright ui to run the tests and show the results of the tests.',
		demoVideo: qaTestingPlaywrightDemo,
		obstacles: [
			'Although, I have done some unit testing junit for java, I have never done any end-to-end testing. I decided to do end-to-end testing as, I have never really done this before so I wanted to learn something new. It took me a while to understand the syntax of playwright, and its methods for testing, such as using elements and its roles to identify them. However, I was able to get the hang of it after a while, using their documentation and examples.',
			'There, were some issues where I had to make sure that I used a very unique selector for the elements, as the elements on the website were not very unique. This was a bit of a challenge, so I had to look deep into the structure of the website to make sure that I am grabbing the right elements.'
		],
		summary:
			'For my first time doing end-to-end testing, I think I did a pretty good job. I was able to test some of the major sections of the website and see if it was working as expected. I learned a lot about playwright and how to use locators effectively and uniquely. I plan to incorporate more end-to-end testing with my current projects and, I would also like to make use of CI/CD workflows such as github actions to make sure that my repository is robust, as it is a very important part of any development.',
		thumbnail: qaTestingPlaywrightThumbnail,
		sourceCodeLink: 'https://github.com/DanielvTran/playwright-testing',
		slug: 'qa-testing-playwright'
	}
};

export const jobExperiences: Record<string, JobExperiences> = {
	'kashy-australia': {
		startDate: 'January 2024',
		endDate: 'Present',
		position: 'Frontend Web Developer',
		company: 'Kashy Australia',
		description:
			'At this role I was responsible for designing the webpage using figma, and also creating the frontend of the internal operations side of the website.',
		responsibilities: [
			'Created mock ups with figma for a website that handles internal operations of the company.',
			'Implemented the mockup with regular reviews from clients for improvement.',
			'Added functionality to manage and organise data, enabling streamlined processes for 8000+ customer records and inventory management of car parts and services.',
			'Connected the internal operations website to Xero SDK allowing users to perform internal operations. These operations include customer contact creation and invoice creation.'
		]
	},
	'creator-camp': {
		startDate: 'January 2024',
		endDate: 'August 2024',
		position: 'Frontend Web Developer',
		company: 'Creator Camp',
		description:
			'I was responsible for developing and maintaining the internal operations of the frontend application, ensuring seamless functionality, and an intuitive user interface.',
		responsibilities: [
			'Transformed Figma designs into responsive web pages using Tailwind CSS, ensuring a seamless user experience.',
			'Developed a video uploader with Bunny.net CDN that streamlined daily uploads of 100+ videos, reducing transfer time by 90%. Automated video organization by camp location, type, and date, boosting staff productivity.',
			'Created a QR code-based check-in/check-out system, streamlining attendance tracking and reducing check-in/check-out time, improving recording accuracy.',
			"Developed a photo uploader designed in Figma, using Svelte and Tailwind for the UI, and implemented functionality with Firebase's byte upload functions.",
			'Built an automated email endpoint with SendGrid and Day.js, scheduling communications from Firebase data, reducing manual handling, and ensuring timely updates for parents and staff.'
		]
	}
};

export const socialLinks: Record<string, SocialLinks> = {
	github: {
		icon: 'fa-brands fa-github',
		social: 'github',
		link: 'https://github.com/DanielvTran'
	},
	email: {
		icon: 'fa-solid fa-envelope',
		social: 'email',
		link: 'danieltran.softwaredev@gmail.com'
	},
	linkedin: {
		icon: 'fa-brands fa-linkedin',
		social: 'linkedin',
		link: 'https://www.linkedin.com/in/daniel-tran-19a9b4225/'
	}
};

export const skills = {
	Languages: [
		'HTML',
		'CSS',
		'JavaScript',
		'TypeScript',
		'Svelte',
		'C#',
		'Python',
		'Java',
		'GraphQL'
	],
	'Libraries & Frameworks': [
		'React',
		'Next.js',
		'Node.js',
		'Express.js',
		'Playwright',
		'Jest',
		'Prisma',
		'REST API'
	],
	Database: ['MySQL', 'MongoDB', 'Firebase'],
	Tools: [
		'Git',
		'GitHub Actions',
		'Visual Studio Code',
		'Visual Studio',
		'Jira',
		'Postman',
		'Vercel'
	]
} as const;

export const standardReveal = {
	preset: 'slide' as const,
	y: 100,
	delay: 100,
	duration: 1000,
	easing: 'easeInOutCubic' as const
};
