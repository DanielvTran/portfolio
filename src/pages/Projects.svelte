<script lang="ts">
	import RevealAnimation from '../components/RevealAnimation.svelte';
	import { standardReveal } from '$lib';

	import { projects } from '$lib';
	import ProjectContainer from '../components/ProjectContainer.svelte';

	const projectList = Object.values(projects); // Convert Object into Array
</script>

<div
	id="projects"
	class="projects-container hero bg-primary secondary min-h-screen w-full py-10 px-5 md:px-10 lg:px-20"
>
	<div class="hero-content w-full flex-col lg:flex-col my-28">
		<RevealAnimation {...standardReveal}>
			<div class="w-fit">
				<h1
					class="text-5xl font-bold text-secondary xl:text-7xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-5xl"
				>
					Projects
				</h1>
				<div class="border-2 my-5 border-secondary"></div>
			</div>
		</RevealAnimation>

		<div
			class="projects-container-grid grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 bg-primary gap-6 px-4 py-4 w-full xxs:px-2"
		>
			{#each projectList as project}
				{#if project.title}
					<ProjectContainer
						title={project.title}
						slug={project.slug}
						thumbnail={project.thumbnail}
						sourceCodeLink={project.sourceCodeLink}
					/>
				{:else}
					<div
						class="notice font-bold text-2xl 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm xxs:text-xs text-center"
					>
						Coming Soon
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
