import type { Project, JobExperiences, SocialLinks } from './types';

// Thumbnails
import todolistThumbnail from '../../static/portfolio/thumbnails/todolistThumbnail.png';
import personalWebsiteThumbnail from '../../static/portfolio/thumbnails/personalWebsiteThumbnail.png';
import mintyPlanThumbnail from '../../static/portfolio/thumbnails/mintyPlanThumbnail.png';
import qaTestingPlaywrightThumbnail from '../../static/portfolio/thumbnails/qaTestingPlaywrightThumbnail.png';
import kashyCapstoneThumbnail from '../../static/portfolio/thumbnails/kashyCapstoneProjectThumbnail.png';

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

const kashyCapstoneProjectImages = Object.values(
	import.meta.glob('../../static/portfolio/planning/kashycapstoneproject/*.png', {
		eager: true
	})
).map((module: any) => module.default) as string[];

// Demo
import personalWebsiteDemo from '../../static/portfolio/demo/personalWebsiteDemo.mov';
import todolistDemo from '../../static/portfolio/demo/todolistDemo.mov';
import personalFinanceManagerDemo from '../../static/portfolio/demo/personalFinanceManager.mov';
import qaTestingPlaywrightDemo from '../../static/portfolio/demo/qaTestingPlaywrightDemo.mov';

export const projects: Record<string, Project> = {
	'personal-website': {
		title: 'Personal Website',
		overview:
			'The goal of this project was to build a clean, aesthetically appealing portfolio website designed to showcase my skills, projects, and professional experiences. I focused on creating a user-friendly and visually engaging platform that highlights my expertise as a web developer, using modern design principles and smooth, responsive layouts.',
		figmaFile: '../../static/portfolio/figma/personalWebsiteFigma.fig',
		planningDescriptions: [
			"When designing my website, I start by prototyping. This involves selecting the color scheme, defining the page structure, and creating initial layouts, which you can see in the image carousel below. Once the design is set, I begin development by focusing on a specific screen size. I create all the pages based on that size, ensuring the design aligns with my vision. If it doesn’t, I revisit Figma for further adjustments—there were quite a few iterations along the way! 😅 Once I'm satisfied with the design, I proceed to make it responsive across major screen sizes: 370px, 450px, 640px, 768px, 1024px, 1280px, 1536px, and 1972px. This approach ensures a consistent and polished experience across all devices."
		],
		planningImages: Object.values(personalPortfolioImages),
		demoDescription:
			'This walkthrough demo explores the website, highlighting its responsive design across all pages.',
		demoVideo: personalWebsiteDemo,
		obstacles: [
			'One of the main challenges was making the website fully responsive across all devices. I tackled this by using flexible CSS grids and media queries to ensure a consistent layout on different screen sizes. Another issue was optimizing image loading for a better user experience, which I resolved by using image compression and lazy loading techniques.'
		],
		summary:
			'Building my portfolio website was an exciting journey that helped me refine my skills in design and development. I learned a lot about Svelte, Figma, responsive design, and performance optimization. Moving forward, I plan to consistently update and improve the existing project pages with more detailed descriptions.',
		thumbnail: personalWebsiteThumbnail,
		sourceCodeLink: 'https://github.com/DanielvTran/portfolio',
		slug: 'personal-website'
	},
	'to-do-list': {
		title: 'To-Do List',
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
	'finance-manager': {
		title: 'Finance Manager',
		overview:
			'The Finance Manager is a web application designed to help users track their income and expenses, set budgets, and visualize financial data through interactive summaries and charts. With features like transaction management, budget tracking, and customizable categories, it provides a solution for managing finances. The application also supports secure user authentication to ensure data privacy and protection.',
		figmaFile: '../../static/portfolio/figma/personalFinanceManagerFigma.fig',
		planningDescriptions: [
			'Unlike many of my other projects, this time I sat down and really highlighted what features of the application I could like to be able to complete. This is so that I will not be stuck in a cycle of trying to make the application perfect, but rather scope out the project and complete that. Therefore, I started out with writing the user stories, which highlights a lot of the CRUD functions for income, expense, budget, categories, etc.',
			"Then, I moved onto doing design research. This process is usually taxing, as there are so many different inspiration online. Eventually, I started designing and coming up designs as I go. There were, many things that worked and didn't work, which is why it takes quite a while to design the structure of the website. But eventually, I came up with the design, as seen in the image carousel.",
			'Lastly, I had to choose which tech stack that I want to develop with. I have noticed, that I am quite unfamiliar with Nextjs and, have not used MySQL in a while. So, I challenged myself to work with this stack.'
		],
		planningImages: Object.values(personalFinanceManagerImages),
		demoDescription:
			'This demo walks through the main features of the Finance Manager app, showing the tracking of income, expenses, budgets and, categories.',
		demoVideo: personalFinanceManagerDemo,
		obstacles: [
			"A big challenge of this application, was the authentication, specifically protecting the routes. Although, I have done this in my To-Do-List app it checked the tokens on every page load causing a little bit of repetitive code. While for this application, I wanted to make use of the middleware, to check the application for valid tokens whenever the user navigates to specified pages. However, I thought the middleware.ts file had to be in the 'root' of a nextjs project, which was incorrect. So, I was stuck in the cycle of trying to make it work at the 'root' of the project, when that is not even possible. I finally realised that it was supposed to go in the root of '/src'.",
			"Another significant hurdle was designing a user-friendly interface for mobile screens. The initial layout didn't adapt well to smaller devices, so I had to rethink my approach using CSS Flexbox and media queries. This involved careful consideration of how elements should reflow on different screen sizes to ensure a seamless experience.",
			"Lastly, the app's initial design didn’t turn out as expected. The original vision didn't align with the functionality and user experience I wanted to achieve, so I made the tough decision to redesign it. This experience taught me the importance of flexibility in design and that sometimes, starting over is necessary to create a product that truly meets user needs."
		],
		summary:
			'This Finance Manager project was a great learning experience that helped me improve my skills in full-stack development, especially with Next.js and MySQL. I learned a lot about user authentication, middleware, CRUD operations, and responsive design. Although the project is still in development, I plan to add more features like data visualization to provide users with a comprehensive financial overview.',
		thumbnail: mintyPlanThumbnail,
		sourceCodeLink: 'https://github.com/DanielvTran/finance-manager',
		slug: 'finance-manager'
	},
	'qa-testing-playwright': {
		title: 'QA Testing Playwright',
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
	},
	'kashy-capstone-project': {
		title: 'Kashy Capstone Project',
		overview:
			'During my final year at QUT, my capstone group was tasked with redesigning and redeveloping Kashy Australia’s website. The existing WordPress site was outdated and no longer aligned with modern design trends. While the client had been maintaining it, they wanted a more visually appealing and user-friendly platform. Our goal was to create a fresh, modern website that enhanced usability and better represented their brand. My main contributions included implementing the new input forms for the quote enquiry process and setting up Nodemailer to handle email notifications efficiently.',
		figmaFile: '',
		planningDescriptions: [
			'For this project, we utilized agile methodologies to plan and execute the redesign of the Kashy Australia website, ensuring alignment with the client’s requirements. We began by conducting a thorough analysis of the existing site to identify areas for improvement based on the client’s goals and feedback. This involved reviewing the site structure, content, and design elements to determine what was working well and what needed to be updated. We then created a detailed project plan outlining key tasks, milestones, and deliverables to ensure the final product met the client’s expectations at every stage of the redesign.',
			'We received the design schema from the client and then prototyped the new design in Figma. This was a crucial step, as it allowed us to visualize the website before development. We then proceeded with development, using the latest technologies, such as React. Additionally, we ensured that the website was fully responsive, providing an optimal viewing experience across all devices.',
			'We had fortnightly sprint meetings with the client to showcase our progress and communicate with the client’s developer on the SWOT analysis and potential website improvements. Additionally, we held weekly meetings with our tutor to present our progress and receive feedback on how to enhance the website. This was a crucial part of the project, as it allowed us to gather valuable insights and ensure we were on the right track.'
		],
		planningImages: Object.values(kashyCapstoneProjectImages),
		demoDescription:
			'This demo shows the redesign of the website, highlighting the different pages that have been redesigned. It also demonstrates the implementation of emails being sent after the quote form has been completed.',
		demoVideo: '',
		obstacles: [
			'One of the biggest challenges I faced was transitioning into web development, as my previous experience was primarily in application development using Python and C#. Learning JavaScript and React.js required me to adapt to a component-based framework and new programming paradigms. Initially, this shift in thinking was difficult, but I overcame this challenge by relying on documentation, online video tutorials, and a trial-and-error approach. By experimenting with different concepts and applying what I learned in small projects, I gradually became more confident in using React effectively and ultimately became more comfortable with web development.',
			'Another obstacle was working with API endpoints, particularly when integrating Nodemailer. Understanding how email services handle authentication and message delivery involved some trial and error. However, through debugging and researching best practices, I was able to implement it successfully.',
			'Effective communication within the team was also a challenge, especially when working with people I had just met. Initially, it was difficult to align our ideas and collaborate efficiently. However, by maintaining open communication and actively considering different perspectives, I was able to build strong working relationships. I made sure to be both supportive and receptive to feedback, adapting my approach when necessary. This helped foster a collaborative and inclusive environment where we could problem-solve together and make well-informed decisions as a team.'
		],
		summary:
			'Through this project, I gained valuable experience in web development, particularly in transitioning from application development to working with JavaScript and React.js. I also developed a deeper understanding of integrating API endpoints, such as setting up Nodemailer for automated emails. Overcoming challenges in team communication strengthened my ability to collaborate effectively, even in new team environments. The project was a success, with the client highly satisfied with the redesign and usability improvements. They appreciated the modernized design and enhanced functionality, ultimately asking me to continue working with them on a freelance basis. This experience not only expanded my technical skills but also provided an opportunity to build professional relationships and gain real-world experience in client collaboration.',
		thumbnail: kashyCapstoneThumbnail,
		sourceCodeLink: '',
		slug: 'kashy-capstone-project'
	}
};

export const jobExperiences: Record<string, JobExperiences> = {
	'grace-simpkins-personal-tutors': {
		startDate: 'April 2025',
		endDate: 'Present',
		position: 'FullStack Web Developer',
		company: 'Grace Simpkins Personal Tutors',
		description:
			'At this role I was responsible for maintaining assessment, and calendar applications. I was also responsible for developing a payment application.',
		responsibilities: [
			'Maintaining legacy applications on vue and angular for 3 proprietary applications.',
			'In the process of updating code bases to the latest versions of vue and angular.',
			'Writing missing documentation that was missing from previous developers',
			'Containerised applications to improve collaboration with other developers.'
		]
	},
	'kashy-australia': {
		startDate: 'January 2024',
		endDate: 'Present',
		position: 'FullStack Web Developer',
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
		position: 'FullStack Web Developer',
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
