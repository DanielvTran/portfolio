<script lang="ts">
	import { jobExperiences, standardReveal } from '$lib';
	import RevealAnimation from '../components/RevealAnimation.svelte';

	const jobExperiencesList = Object.values(jobExperiences); // Convert Object into Array

	// Components
	import JobContainer from '../components/JobContainer.svelte';
</script>

<div id="experiences" class="hero bg-primary min-h-screen w-full md:py-10">
	<div class="hero-content w-full flex-col md:gap-10 lg:px-20 my-28">
		<RevealAnimation {...standardReveal}>
			<div class="w-fit">
				<h1
					class="text-5xl font-bold text-secondary xl:text-7xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-5xl"
				>
					Experience
				</h1>
				<div class="border-2 my-5 border-secondary"></div>
			</div>
		</RevealAnimation>

		<div class="gap-10">
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
