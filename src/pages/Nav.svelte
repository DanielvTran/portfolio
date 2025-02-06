<script>
	import { cubicOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { onMount, tick } from 'svelte';

	let showAnimation = false;

	// Wait for the page to fully load, then enable animations
	onMount(async () => {
		await tick();
		showAnimation = true;
	});

	// Staggered animation delays for smooth entry
	let delays = [100, 200, 300, 400, 500];
</script>

<div id="nav" class="navbar w-full bg-secondary px-[10%] py-4 md:py-2 sm:px-[6%] xxs:px-[4%]">
	<div class="flex-1">
		{#if showAnimation}
			<p
				in:scale={{ delay: delays[0], duration: 700, easing: cubicOut, start: 0.5 }}
				class="text-primary font-bold text-2xl lg:text-xl md:text-lg sm:text-base xxs:text-sm"
			>
				Daniel Tran
			</p>
		{/if}
	</div>
	<div class="flex-none">
		<ul class="flex gap-20 text-xl lg:text-lg md:text-md sm:text-sm xxs:text-xs">
			{#if showAnimation}
				<li in:scale={{ delay: delays[1], duration: 700, easing: cubicOut, start: 0.5 }}>
					<a
						href="#about"
						class="text-primary font-bold text-right py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
						>About</a
					>
				</li>
				<li in:scale={{ delay: delays[2], duration: 700, easing: cubicOut, start: 0.5 }}>
					<a
						href="#experiences"
						class="text-primary font-bold text-right py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
					>
						Experiences
					</a>
				</li>
				<li in:scale={{ delay: delays[3], duration: 700, easing: cubicOut, start: 0.5 }}>
					<a
						href="#skills"
						class="text-primary font-bold text-right py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
						>Skills</a
					>
				</li>
				<li in:scale={{ delay: delays[4], duration: 700, easing: cubicOut, start: 0.5 }}>
					<a
						href="#projects"
						class="text-primary font-bold text-right py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
						>Projects</a
					>
				</li>
			{/if}
		</ul>
	</div>
</div>
