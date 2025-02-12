<script lang="ts">
	export let images: string[] = [];

	let currentIndex = 0;
	let interval: ReturnType<typeof setInterval> | undefined;

	// Function to navigate to the next image
	function nextSlide() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	// Function to navigate to the previous image
	function prevSlide() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	// Auto-slide functionality (change slide every 3 seconds)
	function startAutoSlide() {
		interval = setInterval(nextSlide, 3000);
	}

	function stopAutoSlide() {
		clearInterval(interval);
	}

	// Start auto-slide when component mounts
	startAutoSlide();
</script>

<div
	class="flex flex-col gap-5 w-full max-w-2xl h-full mx-auto items-center justify-center my-5"
	role="region"
	aria-label="Image Carousel"
	on:mouseover={stopAutoSlide}
	on:mouseleave={startAutoSlide}
	on:focus={stopAutoSlide}
	on:blur={startAutoSlide}
>
	{#each images as image, index}
		<div
			class="w-full h-full transition-opacity duration-500 ease-in-out flex items-center justify-center"
			class:hidden={index !== currentIndex}
		>
			<img
				src={image}
				alt="Slide {index + 1}"
				class="border-4 border-gray-400 w-[100%] max-w-3xl rounded-lg shadow-2xl 3xl:max-w-4xl 2xl:max-w-3xl xl:max-w-2xl lg:max-w-xl xs:max-w-lg xxs:max-w-[150%]"
			/>
		</div>
	{/each}

	<!-- Slide Indicators -->
	<div class="flex gap-2">
		{#each images as _, index}
			<button
				class="w-3 h-3 rounded-full transition-colors duration-300"
				class:bg-blue-500={index === currentIndex}
				class:bg-gray-400={index !== currentIndex}
				on:click={() => (currentIndex = index)}
				aria-label={`Go to slide ${index + 1}`}
			></button>
		{/each}
	</div>
</div>
