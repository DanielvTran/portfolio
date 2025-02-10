<script lang="ts">
	// Svelte
	import { isNavOpen } from '$lib/stores';
	import { smoothScroll } from '$lib/helper';

	// Components
	import Nav from '../pages/Nav.svelte';
	import Hero from '../pages/Hero.svelte';
	import About from '../pages/About.svelte';
	import Experience from '../pages/Experience.svelte';
	import Skills from '../pages/Skills.svelte';
	import Projects from '../pages/Projects.svelte';
	// import Contact from '../pages/Contact.svelte';
	import Footer from '../pages/Footer.svelte';

	// SuperForm
	// import type { PageData } from './$types';
	// import { superForm } from 'sveltekit-superforms/client';

	// Get the form data from the load function
	// export let data: PageData;

	// Create the form using superForm
	// const { form, message, errors, enhance } = superForm(data.form);
</script>

<Nav />

<div class={`flex flex-col w-full transition-all duration-300 ${$isNavOpen ? 'blur-sm' : ''}`}>
	<Hero />
	<About />
	<Experience />
	<Skills />
	<Projects />
	<!-- <Contact {form} {message} {errors} {enhance} /> -->
	<Footer />

	<a href="#nav" on:click={(e) => smoothScroll(e, '#nav')}>
		<span
			class="material-symbols-outlined fixed right-5 bottom-5 z-50 px-2 py-2 bg-[#004ac2] text-white rounded hover:bg-[#003996] transition-colors duration-200"
		>
			arrow_circle_up
		</span>
	</a>
</div>
