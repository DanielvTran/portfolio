<script lang="ts">
	import RevealAnimation from '../components/RevealAnimation.svelte';
	import { smoothScroll } from '$lib/helper';
	import { isNavOpen } from '$lib/stores';

	// Toggle the hamburger menu on small screens
	const toggleMenu = () => {
		isNavOpen.update((prev) => !prev);
	};
</script>

<div
	id="nav"
	class="navbar w-full bg-secondary px-6 xxs:px-7 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-8 sm:py-7 md:py-6 lg:py-5 xl:py-6 2xl:py-8 flex justify-between items-center z-50"
>
	<div class="flex-1">
		<RevealAnimation preset="scale" delay={100} duration={700}>
			<p
				class="text-primary font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl sm:mr-6"
			>
				Daniel Tran
			</p>
		</RevealAnimation>
	</div>

	<!-- Hamburger Menu Icon for small screens -->
	<div class="flex-none sm:hidden sm:ml-6">
		<RevealAnimation preset="scale" delay={100} duration={700}>
			<button class="text-primary text-3xl" on:click={toggleMenu} aria-label="Toggle Menu">
				<i class="fa-solid fa-bars"></i>
			</button>
		</RevealAnimation>
	</div>

	<!-- Navbar links, visible on large screens and when hamburger is clicked on small screens -->
	<div class="flex-none hidden sm:block">
		<ul
			class="flex gap-5 sm:gap-5 lg:gap-[60px] 2xl:gap-[100px] text-md sm:text-md md:text-xl lg:text-2xl 2xl:text-3xl"
		>
			<RevealAnimation preset="scale" delay={200 + 0 * 100} duration={1000} y={0}>
				<li>
					<a
						href={`#about}`}
						class="text-primary font-bold text-right py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
						on:click={(e) => smoothScroll(e, `#about`)}
					>
						About
					</a>
				</li>
			</RevealAnimation>
			<RevealAnimation preset="scale" delay={200 + 1 * 100} duration={1000} y={0}>
				<li>
					<a
						href={`#experiences`}
						class="text-primary font-bold text-right py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
						on:click={(e) => smoothScroll(e, `#experiences`)}
					>
						Experiences
					</a>
				</li>
			</RevealAnimation>
			<RevealAnimation preset="scale" delay={200 + 2 * 100} duration={1000} y={0}>
				<li>
					<a
						href={`#skills`}
						class="text-primary font-bold text-right py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
						on:click={(e) => smoothScroll(e, `#skills`)}
					>
						Skills
					</a>
				</li>
			</RevealAnimation>
			<RevealAnimation preset="scale" delay={200 + 3 * 100} duration={1000} y={0}>
				<li>
					<a
						href={`#projects`}
						class="text-primary font-bold text-right py-2 px-2 rounded transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary hover:text-secondary"
						on:click={(e) => smoothScroll(e, `#projects`)}
					>
						Projects
					</a>
				</li>
			</RevealAnimation>
		</ul>
	</div>

	<!-- Mobile Menu Dropdown, visible when hamburger is clicked -->
	{#if $isNavOpen}
		<div class="sm:hidden absolute top-20 right-0 w-full bg-secondary px-6 py-4 z-50">
			<ul class="flex flex-col gap-4 mb-5">
				{#each ['About', 'Experiences', 'Skills', 'Projects'] as section, index}
					<RevealAnimation preset="fade" delay={200 + index * 100} duration={700} y={0}>
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
