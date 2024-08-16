<script lang="ts">
	// Svelte
	import { onMount } from 'svelte';

	// Components
	import Nav from '../components/Nav.svelte';
	import Hero from '../components/Hero.svelte';
	import About from '../components/About.svelte';
	import Skills from '../components/Skills.svelte';
	import Projects from '../components/Projects.svelte';
	import Contact from '../components/Contact.svelte';
	import Footer from '../components/Footer.svelte';

	// SuperForm
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	// Get the form data from the load function
	// export let data: PageData;

	// Create the form using superForm
	// const { form, message, errors, enhance } = superForm(data.form);
</script>

<div class="flex flex-col w-full">
	<Nav />
	<Hero />
	<About />
	<Skills />
	<Projects />
	<!-- <Contact {form} {message} {errors} {enhance} /> -->
	<Footer />

	<a href="#nav">
		<span
			class="material-symbols-outlined fixed right-5 bottom-5 z-50 px-2 py-2 bg-[#004ac2] text-white rounded hover:bg-[#003996] transition-colors duration-200"
			>arrow_circle_up</span
		>
	</a>
</div>
