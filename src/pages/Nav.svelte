<script lang="ts">
	import { onMount } from 'svelte';
	import RevealAnimation from '../components/RevealAnimation.svelte';
	import { smoothScroll } from '$lib/helper';

	let isOpen = false;

	// Toggle the hamburger menu on small screens
	const toggleMenu = () => {
		isOpen = !isOpen;
	};
</script>

<div id="nav" class="navbar w-full bg-secondary px-20">
	<div class="flex-1">
		<RevealAnimation preset="scale" delay={100} duration={700}>
			<p
				class="text-primary font-bold text-2xl xxs:text-xl xs:text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"
			>
				Daniel Tran
			</p>
		</RevealAnimation>
	</div>

	<!-- Hamburger Menu Icon for small screens -->
	<div class="flex-none sm:hidden">
		<button class="text-primary text-3xl" on:click={toggleMenu} aria-label="Toggle Menu">
			<i class="fa-solid fa-bars"></i>
		</button>
	</div>

	<!-- Navbar links, visible on large screens and when hamburger is clicked on small screens -->
	<div class="flex-none hidden sm:block">
		<ul class="flex gap-[5vw] text-[1vw]">
			{#each ['About', 'Experiences', 'Skills', 'Projects'] as section, index}
				<RevealAnimation preset="scale" delay={200 + index * 100} duration={700}>
					<li>
						<a
							href={`#${section.toLowerCase()}`}
							class="text-primary font-bold text-right py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
							on:click={(e) => smoothScroll(e, `#${section.toLowerCase()}`)}
						>
							{section}
						</a>
					</li>
				</RevealAnimation>
			{/each}
		</ul>
	</div>

	<!-- Mobile Menu Dropdown, visible when hamburger is clicked -->
	{#if isOpen}
		<div class="sm:hidden absolute top-20 right-0 w-full bg-secondary px-6 py-4">
			<ul class="flex flex-col gap-4">
				{#each ['About', 'Experiences', 'Skills', 'Projects'] as section, index}
					<RevealAnimation preset="scale" delay={200 + index * 100} duration={700}>
						<li>
							<a
								href={`#${section.toLowerCase()}`}
								class="text-primary font-bold py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
								on:click={(e) => smoothScroll(e, `#${section.toLowerCase()}`)}
							>
								{section}
							</a>
						</li>
					</RevealAnimation>
				{/each}
			</ul>
		</div>
	{/if}
</div>
