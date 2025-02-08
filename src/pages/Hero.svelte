<script lang="ts">
	import { slide, scale, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount, tick } from 'svelte';
	import { smoothScroll } from '$lib/helper';

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
						on:click={(e) => smoothScroll(e, '#projects')}
						class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary hover:bg-gray-300 hover:border-gray-300 font-bold transition-transform duration-300 hover:scale-110"
					>
						Projects
					</a>
					<a
						in:scale={{ delay: 1300, duration: 400, easing: cubicOut, start: 0.5 }}
						href="#about"
						on:click={(e) => smoothScroll(e, '#about')}
						class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary hover:bg-gray-300 hover:border-gray-300 font-bold transition-transform duration-300 hover:scale-110"
					>
						About Me
					</a>
				</div>
			</div>
			<div class="max-w-xs sm:max-w-[30%] w-full">
				<img
					src={bodyshot}
					class="rounded-lg shadow-2xl mt-6 lg:mt-0 transition-transform duration-300 scale-90 hover:scale-100"
					alt="Body shot of Daniel Tran"
					in:scale={{ delay: 1500, duration: 500, easing: cubicOut, start: 0.5 }}
				/>
				<div class="socials flex justify-evenly w-full mt-4">
					<a
						href="https://github.com/DanielvTran"
						target="_blank"
						rel="noopener noreferrer"
						class="text-3xl text-white transition-transform duration-300 hover:scale-[1.2]"
						in:scale={{ delay: 1200, duration: 500, easing: cubicOut, start: 0.5 }}
					>
						<i class="fa-brands fa-github"></i>
					</a>
					<a
						href="mailto:danieltran.softwaredev@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-3xl text-white transition-transform duration-300 hover:scale-[1.2]"
						in:scale={{ delay: 1400, duration: 500, easing: cubicOut, start: 0.5 }}
					>
						<i class="fa-solid fa-envelope"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/daniel-tran-19a9b4225/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-3xl text-white transition-transform duration-300 hover:scale-[1.2]"
						in:scale={{ delay: 1600, duration: 500, easing: cubicOut, start: 0.5 }}
					>
						<i class="fa-brands fa-linkedin"></i>
					</a>
				</div>
			</div>
		</div>
	{/if}
</div>
