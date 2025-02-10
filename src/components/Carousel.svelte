<script lang="ts">
	import RevealAnimation from './RevealAnimation.svelte';
	import { standardReveal } from '$lib';

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
	class="relative w-full max-w-2xl h-[400px] mx-auto mb-10 flex items-center justify-center overflow-visible"
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
			style="transform: translateY(var(--reveal-offset, 0px));"
		>
			<img
				src={image}
				alt="Slide {index + 1}"
				class="w-full h-full object-cover rounded-lg shadow-md"
			/>
		</div>
	{/each}

	<!-- Navigation Buttons -->
	<div class="absolute inset-0 flex justify-between items-center px-4">
		<button
			on:click={prevSlide}
			class="bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition duration-200"
			aria-label="Previous slide"
		>
			❮
		</button>
		<button
			on:click={nextSlide}
			class="bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition duration-200"
			aria-label="Next slide"
		>
			❯
		</button>
	</div>

	<!-- Slide Indicators -->
	<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
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
