<script lang="ts">
	import { jobExperiences, standardReveal } from '$lib';
	import RevealAnimation from '../components/RevealAnimation.svelte';

	const jobExperiencesList = Object.values(jobExperiences); // Convert Object into Array

	// Components
	import JobContainer from '../components/JobContainer.svelte';
</script>

<div id="experiences" class="hero bg-primary min-h-screen w-full md:py-10">
	<div class="hero-content w-full flex-col lg:flex-row-reverse md:gap-10">
		<div
			class="w-full md:flex md:flex-col md:justify-center md:items-center md:w-10/12 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-10/12 xs:flex xs:flex-col xs:justify-center xs:items-center xs:w-10/12 xxs:flex xxs:flex-col xxs:justify-center xxs:items-center xxs:w-10/12"
		>
			<RevealAnimation {...standardReveal}>
				<div class="w-fit">
					<h1
						class="text-5xl font-bold text-secondary 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
					>
						Experience
					</h1>
					<div class="border-2 my-5 border-secondary"></div>
				</div>
			</RevealAnimation>

			{#each jobExperiencesList as jobExperience}
				<JobContainer
					startDate={jobExperience.startDate}
					endDate={jobExperience.endDate}
					position={jobExperience.position}
					company={jobExperience.company}
					description={jobExperience.description}
					responsibilities={jobExperience.responsibilities}
				/>
			{/each}
		</div>
	</div>
</div>
