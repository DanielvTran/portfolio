<script lang="ts">
	// Define state for the carousel
	let currentIndex = 0;

	// Example of project planning images
	export let images: string[] = [];

	// Function to navigate to the next image
	function next() {
		if (currentIndex < images.length - 1) {
			currentIndex += 1;
		} else {
			currentIndex = 0; // Loop back to the first image
		}
	}

	// Function to navigate to the previous image
	function prev() {
		if (currentIndex > 0) {
			currentIndex -= 1;
		} else {
			currentIndex = images.length - 1; // Loop back to the last image
		}
	}
</script>

<div class="carousel-container relative flex flex-col items-center my-10">
	<div
		class="carousel-images flex justify-center items-center overflow-hidden w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg shadow-2xl"
	>
		{#if images.length > 0}
			<img
				src={images[currentIndex]}
				class="p-2 border-4 border-primary bg-white w-full h-auto max-h-[80vh] object-cover transition ease-in-out duration-500"
				alt={`Carousel image ${currentIndex + 1}`}
			/>
		{:else}
			<p class="text-primary">No images available</p>
		{/if}
	</div>

	<!-- Carousel Controls -->
	<div class="carousel-controls flex justify-between mt-4 gap-5">
		<button
			class="btn-prev flex items-center p-2 bg-primary text-white cursor-pointer hover:bg-gray-400 hover:text-primary rounded transition ease-in-out duration-300"
			on:click={prev}
		>
			<span class="material-symbols-outlined"> chevron_left </span>
		</button>
		<button
			class="btn-next flex items-center p-2 bg-primary text-white cursor-pointer hover:bg-gray-400 hover:text-primary rounded transition ease-in-out duration-300"
			on:click={next}
		>
			<span class="material-symbols-outlined"> chevron_right </span>
		</button>
	</div>
</div>
