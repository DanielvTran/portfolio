<script lang="ts">
	import RevealAnimation from './RevealAnimation.svelte';
	import { standardReveal } from '$lib';

	export let startDate: string;
	export let endDate: string;
	export let position: string;
	export let company: string;
	export let description: string;
	export let responsibilities: string[];

	let expanded = false;
</script>

<RevealAnimation {...standardReveal}>
	<div class="w-full bg-white rounded-lg p-6 shadow-lg flex flex-col gap-6 mt-10">
		<div class="flex flex-col md:flex-row gap-6 p-5 bg-gray-100 rounded-lg">
			<!-- Left Column: Dates & Position -->
			<div class="md:w-1/4 w-full flex flex-col items-left text-center md:text-left">
				<p class="text-lg font-semibold text-primary sm:text-xl xxs:text-lg">
					{startDate} - {endDate}
				</p>
				<p class="text-sm text-gray-600 sm:text-base xxs:text-sm">{position}</p>
			</div>

			<!-- Right Column: Company & Description -->
			<div class="md:w-3/4 w-full">
				<h3 class="text-2xl font-bold text-gray-800 sm:text-3xl xxs:text-xl">{company}</h3>
				<p class="text-gray-700 text-base sm:text-lg xxs:text-sm">
					{description}
				</p>

				<!-- Responsibilities List -->
				<ul class="list-disc list-inside mt-2 text-gray-700 text-sm sm:text-base xxs:text-xs">
					{#each responsibilities.slice(0, expanded ? responsibilities.length : 2) as responsibility}
						<li class="ml-5">{responsibility}</li>
					{/each}
				</ul>

				<!-- Expand Button -->
				{#if responsibilities.length > 2}
					<button
						class="text-primary mt-4 text-sm sm:text-base flex items-center gap-1"
						on:click={() => (expanded = !expanded)}
					>
						<span class="material-symbols-outlined text-lg sm:text-xl">
							{expanded ? 'arrow_drop_up' : 'arrow_drop_down'}
						</span>
						{expanded ? 'Show Less' : 'Show More'}
					</button>
				{/if}
			</div>
		</div>
	</div>
</RevealAnimation>
