<script lang="ts">
	import RevealAnimation from './RevealAnimation.svelte';
	import { standardReveal } from '$lib';

	export let title: string;
	export let slug: string;
	export let thumbnail: string;
	export let sourceCodeLink: string;
</script>

<RevealAnimation {...standardReveal}>
	<div class="card bg-[#F2F2F2] w-full border-4 border-white py-2">
		<div class="card-body flex flex-col gap-4">
			<div class="heading flex flex-row items-center justify-between">
				<h2
					class="card-title text-primary font-bold bg-secondary w-fit px-2 py-1 rounded border-primary border-2 text-lg lg:text-xl md:text-md sm:text-md xxs:text-sm"
				>
					{title}
				</h2>
				<a
					href={sourceCodeLink}
					target="_blank"
					class="text-primary transition-transform duration-300 hover:scale-110"
					><i class="fa-solid fa-link"></i></a
				>
			</div>
			<a href="/project/{slug}">
				<div class="relative w-full pb-[56.25%] sm:pb-[56.25%] md:pb-[56.25%] lg:pb-[56.25%]">
					<img
						src={thumbnail}
						alt="Project {title}"
						class="absolute top-0 left-0 w-full h-full object-cover rounded-md border-4 border-primary transition-transform duration-300 hover:scale-110"
					/>
				</div>
			</a>
			<div class="card-actions justify-center">
				<a
					href={`/project/${slug}`}
					class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary hover:bg-gray-300 hover:border-gray-300 font-bold xxs:text-sm transition-transform duration-300 hover:scale-110"
					>View</a
				>
			</div>
		</div>
	</div>
</RevealAnimation>
