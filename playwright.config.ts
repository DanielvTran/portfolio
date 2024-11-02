import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	projects: [
		{ name: 'Desktop', use: { viewport: { width: 1920, height: 1080 } } },
		{ name: 'Tablet Portrait', use: { viewport: { width: 768, height: 1024 } } },
		{ name: 'Tablet Landscape', use: { viewport: { width: 1024, height: 768 } } },
		{ name: 'Mobile iPhone', use: { viewport: { width: 390, height: 844 } } },
		{ name: 'Mobile Android', use: { viewport: { width: 360, height: 800 } } }
	]
};

export default config;
