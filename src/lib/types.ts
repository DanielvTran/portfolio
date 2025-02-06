export type Project = {
	title: string;
	description: string;
	overview: string;
	figmaFile: string;
	planningDescriptions: string[];
	planningImages: string[];
	demoDescription: string;
	demoVideo: string;
	obstacles: string[];
	summary: string;
	thumbnail: string;
	sourceCodeLink: string;
	slug: string;
};

export type JobExperiences = {
	startDate: string;
	endDate: string;
	position: string;
	company: string;
	description: string;
	responsibilities: string[];
};

export type SocialLinks = {
	icon: string;
	social: string;
	link: string;
};
