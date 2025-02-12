<script lang="ts">
	import RevealAnimation from '../components/RevealAnimation.svelte';
	import { standardReveal, skills } from '$lib';
</script>

<div id="skills" class="hero bg-secondary min-h-screen w-full py-10 px-5 md:px-10 lg:px-20">
	<div class="hero-content w-full flex flex-col md:gap-10 my-28">
		<div class="w-full flex flex-col items-center text-center">
			<RevealAnimation {...standardReveal}>
				<div class="w-fit">
					<h1
						class="text-5xl font-bold text-primary xl:text-7xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-5xl"
					>
						Skills
					</h1>
					<div class="border-2 my-5 border-primary"></div>
				</div>
			</RevealAnimation>

			<RevealAnimation {...standardReveal}>
				<p class="py-4 text-lg text-primary sm:text-xl md:text-2xl max-w-3xl">
					With experience in both frontend and backend technologies, I develop full-stack
					applications using React, Svelte, Next.js, Playwright, TypeScript, MySQL, Firebase,
					Tailwind CSS, and Node.js. I also have experience implementing CI/CD pipelines with GitHub
					Actions for testing.
				</p>
			</RevealAnimation>
		</div>

		<div class="flex flex-wrap justify-center gap-3 mb-10">
			{#each Object.entries(skills) as [category, skillList]}
				<div class="w-full text-center">
					<!-- Reveal category -->
					<RevealAnimation
						preset="slide"
						x={0}
						y={100}
						delay={0}
						duration={1000}
						easing="easeInOutCubic"
					>
						<h2 class="text-lg font-bold text-primary my-5">{category}</h2>
					</RevealAnimation>

					<!-- Reveal skills with sequential delays -->
					<div class="flex flex-wrap justify-center gap-2">
						{#each skillList as skill, i (skill)}
							<RevealAnimation
								preset="slide"
								x={0}
								y={100}
								delay={i * 200}
								duration={1000}
								easing="easeInOutCubic"
							>
								<span
									class="bg-primary text-secondary px-4 py-2 rounded-full text-base sm:text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 xxs:px-3 xxs:py-1 xxs:text-sm"
								>
									{skill}
								</span>
							</RevealAnimation>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
