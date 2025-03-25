<script lang="ts">
	import RevealAnimation from '../components/RevealAnimation.svelte';
	import { smoothScroll } from '$lib/helper';
	import { socialLinks } from '$lib';

	// Images
	import bodyshot from '../../static/bodyshot.jpeg';

	const socialList = Object.values(socialLinks); // Convert Object into Array
</script>

<div
	id="hero"
	class="hero bg-primary min-h-screen w-full flex items-center justify-center xxs:py-10"
>
	<div
		class="hero-content w-full flex flex-col lg:flex-row items-center justify-center lg:gap-10 lg:px-20"
	>
		<div class="text-center lg:text-left w-full flex flex-col items-center lg:items-start gap-6">
			<RevealAnimation preset="fade" delay={500} duration={1200}>
				<h1
					class="text-5xl font-bold text-secondary xl:text-7xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-5xl"
				>
					Hi my name is Daniel Tran!
				</h1>
			</RevealAnimation>

			<RevealAnimation preset="fade" delay={800} duration={960}>
				<p
					class="text-2xl text-secondary lg:my-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl"
				>
					Full-Stack Web Developer
				</p>
			</RevealAnimation>

			<div class="quick-nav flex flex-row gap-5 justify-center lg:justify-start xl:gap-10">
				<RevealAnimation preset="scale" delay={1100} duration={480}>
					<a
						href="#projects"
						on:click={(e) => smoothScroll(e, '#projects')}
						class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary
							hover:bg-gray-300 hover:border-gray-300 font-bold transition-transform duration-300 hover:scale-110 md:text-xl xl:text-2xl"
					>
						Projects
					</a>
				</RevealAnimation>

				<RevealAnimation preset="scale" delay={1300} duration={480}>
					<a
						href="#about"
						on:click={(e) => smoothScroll(e, '#about')}
						class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary
							hover:bg-gray-300 hover:border-gray-300 font-bold transition-transform duration-300 hover:scale-110 md:text-xl xl:text-2xl"
					>
						About Me
					</a>
				</RevealAnimation>
			</div>
		</div>

		<div class="w-full max-w-xs sm:w-[50%]">
			<div class="socials flex justify-evenly w-full mt-4 xl:mt-10">
				{#each socialList as { icon, link }, index}
					<RevealAnimation preset="scale" delay={1200 + index * 200} duration={600}>
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							class="text-3xl text-white transition-transform duration-300 hover:scale-[1.2] xl:text-4xl"
						>
							<i class={icon}></i>
						</a>
					</RevealAnimation>
				{/each}
			</div>

			<RevealAnimation preset="scale" delay={1500} duration={600}>
				<img
					src={bodyshot}
					class="rounded-lg shadow-2xl mt-6 lg:mt-0 mb-10 xs:mb-5 transition-transform duration-300 scale-90 hover:scale-100"
					alt="Body shot of Daniel Tran"
				/>
			</RevealAnimation>
		</div>
	</div>
</div>
