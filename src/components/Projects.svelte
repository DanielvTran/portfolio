<script lang="ts">
	const projects = [1, 2, 3, 4, 5, 6];
</script>

<div id="projects" class="projects-container hero bg-secondary min-h-screen w-full">
	<div class="hero-content w-full flex-col lg:flex-col">
		<div class="w-fit">
			<h1 class="text-5xl font-bold text-primary">Projects</h1>
			<div class="border-2 my-5 border-primary"></div>
		</div>

		<div
			class="projects-container-grid grid grid-cols-3 justify-between bg-white gap-6 px-4 py-4 w-full"
		>
			{#each projects as project}
				<div class="card bg-[#F2F2F2] w-full border-4 border-primary py-2">
					<figure>
						<img
							src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
							alt="Shoes"
						/>
					</figure>
					<div class="card-body flex flex-col gap-4">
						<h2 class="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-center">
							<button class="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
