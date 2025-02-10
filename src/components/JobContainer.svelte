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
	<div class="w-full bg-white rounded-lg p-5 shadow-lg flex flex-col gap-5 mt-10">
		<div class="flex flex-col md:flex-row gap-5 p-4 bg-gray-100 rounded-lg">
			<div class="md:w-1/4 w-full flex flex-col items-left text-center md:text-left">
				<p class="text-lg font-semibold text-primary">{startDate} - {endDate}</p>
				<p class="text-sm text-gray-600">{position}</p>
			</div>
			<div class="md:w-3/4 w-full">
				<h3 class="text-xl font-bold text-gray-800">{company}</h3>
				<p class="text-gray-600">
					{description}
				</p>
				<ul class="list-disc list-inside mt-2 text-gray-700">
					{#each responsibilities.slice(0, expanded ? responsibilities.length : 2) as responsibility}
						<li class="ml-5">{responsibility}</li>
					{/each}
				</ul>
				{#if responsibilities.length > 2}
					<button class="text-primary mt-5 text-left" on:click={() => (expanded = !expanded)}>
						<span class="material-symbols-outlined">
							{expanded ? 'arrow_drop_up' : 'arrow_drop_down'}
						</span>
					</button>
				{/if}
			</div>
		</div>
	</div>
</RevealAnimation>
