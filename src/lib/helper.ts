import { isNavOpen } from './stores';

// Smooth Scroll on navigation
export function smoothScroll(event: Event, targetId: string) {
	event.preventDefault();

	const targetElement = document.querySelector(targetId) as HTMLElement | null;
	if (targetElement) {
		window.scrollTo({
			top: targetElement.offsetTop,
			behavior: 'smooth'
		});
	}

	isNavOpen.set(false);
}
