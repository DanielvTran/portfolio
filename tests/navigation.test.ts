import { expect, test } from '@playwright/test';

test.describe('Navigation Bar Tests', () => {
	// Go to home page after each test
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:5173/');
	});

	// About link goes to about section id
	test('Navigate to about section', async ({ page }) => {
		await page.click('a[href="#about"]'); // Clicks the "About" link in the nav
		await expect(page.locator('#about')).toBeVisible(); // Verifies that the "About" section is in view
	});

	// About link goes to skills section id
	test('Navigate to skills section', async ({ page }) => {
		await page.click('a[href="#skills"]'); // Clicks the "Skills" link in the nav
		await expect(page.locator('#skills')).toBeVisible(); // Verifies that the "Skills" section is in view
	});

	// About link goes to projects section id
	test('Navigate to projects section', async ({ page }) => {
		await page.click('a[href="#projects"]'); // Clicks the "Projects" link in the nav
		await expect(page.locator('#projects')).toBeVisible(); // Verifies that the "Projects" section is in view
	});

	// Navigate to top of page aka 'nav bar'
	test('Navigate to top of page', async ({ page }) => {
		await page.click('a[href="#nav"]'); // Clicks the "Nav" link in the nav
		await expect(page.locator('#nav')).toBeVisible(); // Verifies that the "Nav" section is in view
	});
});
