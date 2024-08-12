<script lang="ts">
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
	export let data: PageData;

	// Create the form using superForm
	const { form, errors, enhance } = superForm(data.form);
</script>

<div class="flex flex-col w-full">
	<Nav />
	<Hero />
	<About />
	<Skills />
	<Projects />
	<Contact {form} {errors} {enhance} />
	<Footer />
</div>
