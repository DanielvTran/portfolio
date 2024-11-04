<script lang="ts">
	// Svelte
	import { page } from '$app/stores';

	// Components
	import Carousel from '../../../components/Carousel.svelte';

	// Data
	import { projects } from '$lib';

	// URL params
	let { title } = $page.params;

	const project = projects[title];

	function goBack() {
		history.back();
	}
</script>

<div class="flex flex-col w-full">
	<div
		id="nav"
		class="navbar w-full bg-primary px-[10%] 3xl:py-[30px] 2xl:py-[30px] md:py-[0px] xxs:px-[6%]"
	>
		<div class="flex-1">
			<button
				class="material-symbols-outlined p-1 text-white cursor-pointer hover:text-primary hover:bg-secondary rounded transition ease-in-out duration-200"
				on:click={goBack}
			>
				arrow_circle_left
			</button>
		</div>
	</div>

	<div id="hero" class="hero bg-secondary min-h-screen w-full md:py-10 sm:py-10 xs:py-5">
		<div class="hero-content w-full flex flex-col lg:flex-row">
			<div
				class="w-full flex flex-col 3xl:gap-10 md:justify-center md:items-center sm:justify-center sm:items-center xs:justify-center xs:items-center xxs:justify-center xxs:items-center"
			>
				<div class="w-fit">
					<h1
						class="text-5xl font-bold text-primary 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
					>
						{project.title}
					</h1>
					<div class="border-2 my-5 border-primary"></div>
				</div>

				<img
					src={project.image}
					class="border-4 border-gray-400 max-w-sm rounded-lg shadow-2xl 3xl:max-w-[100%] 2xl:max-w-[100%] xl:max-w-[80%] lg:max-w-[80%] md:max-w-[80%] md:mt-6 sm:max-w-[80%] sm:mt-6 xs:max-w-[80%] xs:mt-4 xxs:max-w-[80%] xxs:mt-8"
					alt={`Thumbnail of ${project.title}`}
				/>

				<h1
					class="font-bold py-6 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
				>
					Overview
				</h1>
				<p
					class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
				>
					{project.overview}
				</p>

				<p
					class="font-bold py-6 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
				>
					Planning
				</p>
				<p
					class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
				>
					{project.planningDescription}
				</p>

				<Carousel images={project.planningImages} />

				<a
					href={project.figmaFile}
					download="figma-file"
					class="btn btn-primary border-primary bg-primary text-secondary hover:text-primary hover:bg-gray-300 hover:border-gray-300 font-bold 3xl:text-3xl 2xl:text-2xl xl:text-lg lg:text-0 xs:text-xs xxs:text-xs"
					>Figma File</a
				>

				<p
					class="font-bold py-6 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
				>
					Demo
				</p>
				<p
					class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
				>
					{project.demoDescription}
				</p>

				<video controls width="600">
					<track kind="captions" />
					<source src={project.demoVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				<p
					class="font-bold py-6 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
				>
					Obstacles
				</p>

				{#each project.obstacles as obstacle}
					<p
						class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
					>
						{obstacle}
					</p>
				{/each}

				<p
					class="font-bold py-6 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
				>
					Summary
				</p>
				<p
					class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
				>
					{project.summary}
				</p>
			</div>
		</div>
	</div>
</div>
