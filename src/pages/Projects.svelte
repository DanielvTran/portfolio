<script lang="ts">
	import { projects } from '$lib';
	import ProjectContainer from '../components/ProjectContainer.svelte';

	const projectList = Object.values(projects); // Convert Object into Array
</script>

<div
	id="projects"
	class="projects-container hero bg-primary secondary min-h-screen w-full p-10 xs:p-5 xxs:p-3"
>
	<div class="hero-content w-full flex-col lg:flex-col">
		<div class="w-fit">
			<h1
				class="text-5xl font-bold text-secondary 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl xxs:text-xl"
			>
				Projects
			</h1>
			<div class="border-2 my-4 border-primary"></div>
		</div>

		<div
			class="projects-container-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-primary gap-6 px-4 py-4 w-full xxs:px-2"
		>
			{#each projectList as project}
				{#if project.title}
					<ProjectContainer
						title={project.title}
						slug={project.slug}
						thumbnail={project.thumbnail}
						description={project.description}
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
