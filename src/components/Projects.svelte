<script lang="ts">
	import { projects } from '$lib';

	const projectList = Object.values(projects); // Convert Object into Array
</script>

<div id="projects" class="projects-container hero bg-secondary min-h-screen w-full p-10">
	<div class="hero-content w-full flex-col lg:flex-col">
		<div class="w-fit">
			<h1
				class="text-5xl font-bold text-primary 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
			>
				Projects
			</h1>
			<div class="border-2 my-5 border-primary"></div>
		</div>

		{#each projectList as project}
			{#if project.title}
				<div class="projects-container-grid flex flex-row bg-white gap-6 px-4 py-4 w-full">
					<div class="card bg-[#F2F2F2] w-full border-4 border-primary py-2">
						<div class="card-body flex flex-col gap-4">
							<h2
								class="card-title text-primary font-bold bg-white w-fit px-5 py-2 rounded border-primary border-2"
							>
								{project.title}
							</h2>
							<img src={project.image} alt="Project 1" />
							<p class="text-center text-primary font-bold">{project.description}</p>
							<div class="card-actions justify-center">
								<a
									href={`/project/${project.slug}`}
									class="btn btn-primary border-primary bg-primary text-secondary hover:text-primary hover:bg-gray-300 hover:border-gray-300 font-bold"
									>View</a
								>
							</div>
						</div>
					</div>
				</div>
			{:else}
				<div
					class="notice font-bold text-2xl 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-md sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
				>
					Coming Soon
				</div>
			{/if}
		{/each}
	</div>
</div>
