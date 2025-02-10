<script lang="ts">
	// Svelte
	import { page } from '$app/stores';
	import { standardReveal } from '$lib';

	// Components
	import Carousel from '../../../components/Carousel.svelte';
	import RevealAnimation from '../../../components/RevealAnimation.svelte';

	// Data
	import { projects } from '$lib';
	import { goto } from '$app/navigation';

	// URL params
	let { title } = $page.params;

	const project = projects[title];

	function goHome() {
		goto('/');
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
				on:click={goHome}
			>
				arrow_circle_left
			</button>
		</div>
	</div>

	<div id="hero" class="hero bg-secondary min-h-screen w-full md:py-10 sm:py-10 xs:py-5">
		<div class="hero-content w-full flex flex-col lg:flex-row">
			<div
				class="w-full flex flex-col items-center 3xl:gap-10 md:justify-center md:items-center sm:justify-center sm:items-center xs:justify-center xs:items-center xxs:justify-center xxs:items-center"
			>
				<RevealAnimation {...standardReveal}>
					<div class="w-fit">
						<h1
							class="text-5xl font-bold text-primary 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
						>
							{project.title}
						</h1>
						<div class="border-2 my-5 border-primary"></div>
					</div>
				</RevealAnimation>

				<RevealAnimation {...standardReveal}>
					<img
						src={project.thumbnail}
						class="border-4 mt-5 border-gray-400 w-[200%] max-w-3xl rounded-lg shadow-2xl 3xl:max-w-4xl 2xl:max-w-3xl xl:max-w-2xl lg:max-w-xl xs:max-w-lg xxs:max-w-[150%]"
						alt={`Thumbnail of ${project.title}`}
					/>
				</RevealAnimation>

				<RevealAnimation {...standardReveal}>
					<h1
						class="font-bold py-6 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
					>
						Overview
					</h1>
				</RevealAnimation>

				<RevealAnimation {...standardReveal}>
					<p
						class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
					>
						{project.overview}
					</p>
				</RevealAnimation>

				{#if project.planningDescriptions.length > 0}
					<RevealAnimation {...standardReveal}>
						<p
							class="font-bold py-6 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
						>
							Planning
						</p>
					</RevealAnimation>

					{#each project.planningDescriptions as planningDescription}
						<RevealAnimation {...standardReveal}>
							<p
								class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
							>
								{planningDescription}
							</p>
						</RevealAnimation>
					{/each}

					<RevealAnimation {...standardReveal}>
						<Carousel images={project.planningImages} />
					</RevealAnimation>

					<RevealAnimation {...standardReveal}>
						<a
							href={project.figmaFile}
							download="figma-file"
							class="btn mb-5 btn-primary border-primary bg-primary text-secondary hover:text-primary hover:bg-gray-300 hover:border-gray-300 font-bold 3xl:text-3xl 2xl:text-2xl xl:text-lg lg:text-0 xs:text-xs xxs:text-xs transition-transform duration-300 hover:scale-110"
						>
							Figma File
						</a>
					</RevealAnimation>
				{/if}

				<RevealAnimation {...standardReveal}>
					<p
						class="font-bold py-6 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
					>
						Demo
					</p>
				</RevealAnimation>

				<RevealAnimation {...standardReveal}>
					<p
						class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center mb-5"
					>
						{project.demoDescription}
					</p>
				</RevealAnimation>

				<RevealAnimation {...standardReveal}>
					<video controls width="600" class="mb-5">
						<track kind="captions" />
						<source src={project.demoVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</RevealAnimation>

				<RevealAnimation {...standardReveal}>
					<p
						class="font-bold py-6 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
					>
						Obstacles
					</p>
				</RevealAnimation>

				{#each project.obstacles as obstacle}
					<RevealAnimation {...standardReveal}>
						<p
							class="pt-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
						>
							{obstacle}
						</p>
					</RevealAnimation>
				{/each}

				<RevealAnimation {...standardReveal}>
					<p
						class="font-bold pt-10 text-2xl text-primary 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-xl xs:text-xl xs:pb-2"
					>
						Summary
					</p>
				</RevealAnimation>

				<RevealAnimation {...standardReveal}>
					<p
						class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
					>
						{project.summary}
					</p>
				</RevealAnimation>
			</div>
		</div>
	</div>
</div>
