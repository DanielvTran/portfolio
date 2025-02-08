<script lang="ts">
	import { reveal } from 'svelte-reveal';

	export let title: string;
	export let slug: string;
	export let thumbnail: string;
	export let description: string;
	export let sourceCodeLink: string;
</script>

<div
	class="card bg-[#F2F2F2] w-full border-4 border-white py-2"
	use:reveal={{
		preset: 'slide',
		x: 0,
		y: 100,
		delay: 100,
		duration: 1000,
		easing: 'easeInOutCubic'
	}}
>
	<div class="card-body flex flex-col gap-4">
		<div class="heading flex flex-row items-center justify-between">
			<h2
				class="card-title text-primary font-bold bg-secondary w-fit px-2 py-1 rounded border-primary border-2 text-lg lg:text-xl md:text-lg sm:text-md xxs:text-sm"
			>
				{title}
			</h2>
			<a href={sourceCodeLink} target="_blank" class="text-primary"
				><i class="fa-solid fa-link"></i></a
			>
		</div>
		<a href="/project/{slug}">
			<img
				src={thumbnail}
				alt="Project {title}"
				class="max-w-full rounded-md border-4 border-primary"
			/>
		</a>
		<p class="text-center text-primary font-bold xxs:text-md">{description}</p>
		<div class="card-actions justify-center">
			<a
				href={`/project/${slug}`}
				class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary hover:bg-gray-300 hover:border-gray-300 font-bold xxs:text-sm"
				>View</a
			>
		</div>
	</div>
</div>
