<script lang="ts">
	import { projects } from '$lib';
</script>

<div id="projects" class="projects-container hero bg-secondary min-h-screen w-full">
	<div class="hero-content w-full flex-col lg:flex-col">
		<div class="w-fit">
			<h1 class="text-5xl font-bold text-primary">Projects</h1>
			<div class="border-2 my-5 border-primary"></div>
		</div>

		{#each projects as project}
			{#if project.title}
				<div
					class="projects-container-grid grid grid-cols-3 justify-between bg-white gap-6 px-4 py-4 w-full"
				>
					<div class="card bg-[#F2F2F2] w-full border-4 border-primary py-2">
						<div class="card-body flex flex-col gap-4">
							<h2 class="card-title">{project.title}</h2>
							<img src={project.image} alt="Project 1" />
							<p>{project.description}</p>
							<div class="card-actions justify-center">
								<button
									class="btn btn-primary border-primary bg-primary text-secondary hover:text-primary hover:bg-gray-300 hover:border-gray-300 font-bold"
									>View</button
								>
							</div>
						</div>
					</div>
				</div>
			{:else}
				<div class="notice font-bold">Coming Soon</div>
			{/if}
		{/each}
	</div>
</div>
