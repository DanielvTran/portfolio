<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { slide, scale, fade } from 'svelte/transition';
	import { onMount, tick } from 'svelte';
	// Images
	import bodyshot from '../../static/bodyshot.jpeg';

	let showAnimation = false;

	// Wait for the page to fully load, then enable animations
	onMount(async () => {
		await tick();
		showAnimation = true;
	});
</script>

<div
	id="hero"
	class="hero bg-primary min-h-screen w-full py-10 xs:py-5 flex justify-center items-center"
>
	{#if showAnimation}
		<div
			class="hero-content w-full flex flex-col lg:flex-row items-center justify-center lg:gap-10 px-4 xs:px-2"
		>
			<div class="text-center lg:text-left w-full flex flex-col items-center lg:items-start gap-6">
				<h1
					class="text-5xl font-bold text-secondary lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl"
					in:slide={{ delay: 100, duration: 600, easing: cubicOut }}
				>
					Hi my name is Daniel Tran! 🙌
				</h1>
				<p
					class="text-2xl text-secondary lg:text-3xl md:text-2xl sm:text-xl xs:text-lg"
					in:fade={{ delay: 700, duration: 400 }}
				>
					Full-Stack Web Developer
				</p>
				<div class="quick-nav flex flex-row gap-5 justify-center lg:justify-start">
					<a
						in:scale={{ delay: 1100, duration: 400, easing: cubicOut, start: 0.5 }}
						href="#projects"
						class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary hover:bg-gray-300 hover:border-gray-300 font-bold transition-transform duration-300 hover:scale-110"
					>
						Projects
					</a>
					<a
						in:scale={{ delay: 1300, duration: 400, easing: cubicOut, start: 0.5 }}
						href="#about"
						class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary hover:bg-gray-300 hover:border-gray-300 font-bold transition-transform duration-300 hover:scale-110"
					>
						About Me
					</a>
				</div>
			</div>
			<img
				src={bodyshot}
				class="max-w-xs sm:max-w-[30%] rounded-lg shadow-2xl mt-6 lg:mt-0 transition-transform duration-300 scale-90 hover:scale-100"
				alt="Body shot of Daniel Tran"
				in:scale={{ delay: 1500, duration: 500, easing: cubicOut, start: 0.5 }}
			/>
		</div>
	{/if}
</div>
