<script lang="ts">
	import { reveal } from 'svelte-reveal';

	type StandardEasingFunction =
		| 'linear'
		| 'easeInSine'
		| 'easeOutSine'
		| 'easeInOutSine'
		| 'easeInQuad'
		| 'easeOutQuad'
		| 'easeInOutQuad'
		| 'easeInCubic'
		| 'easeOutCubic'
		| 'easeInOutCubic'
		| 'easeInQuart'
		| 'easeOutQuart'
		| 'easeInOutQuart'
		| 'easeInQuint'
		| 'easeOutQuint'
		| 'easeInOutQuint'
		| 'easeInExpo'
		| 'easeOutExpo'
		| 'easeInOutExpo'
		| 'easeInCirc'
		| 'easeOutCirc'
		| 'easeInOutCirc'
		| 'easeInBack'
		| 'easeOutBack'
		| 'easeInOutBack';

	type EasingWeights = [number, number, number, number];
	type Easing = StandardEasingFunction | EasingWeights;
	type RevealPreset = 'fade' | 'slide' | 'fly' | 'spin' | 'blur' | 'scale';

	// Props with defaults matching your current usage
	export let preset: RevealPreset = 'slide';
	export let x = 0;
	export let y = 100;
	export let delay = 100;
	export let duration = 1000;
	export let easing: Easing = 'easeInOutCubic';
	export let disable = false;
	export let reset = false;
	export let opacity = 0;
	export let rotate = 0;
	export let blur = 0;
	export let scale = 1;
	export let rootMargin = '0px 0px -50% 0px';
	export let threshold = 0.1;

	// Event handlers
	export let onRevealStart: ((node: HTMLElement) => void) | undefined = undefined;
	export let onRevealEnd: ((node: HTMLElement) => void) | undefined = undefined;
	export let onResetStart: ((node: HTMLElement) => void) | undefined = undefined;
	export let onResetEnd: ((node: HTMLElement) => void) | undefined = undefined;
	export let onMount: ((node: HTMLElement) => void) | undefined = undefined;
	export let onUpdate: ((node: HTMLElement) => void) | undefined = undefined;
	export let onDestroy: ((node: HTMLElement) => void) | undefined = undefined;

	// Optional observer config
	export let root: Element | Document | null = null;
	// export let rootMargin: string | undefined = undefined;
	// export let threshold: number | undefined = undefined;
</script>

<div
	use:reveal={{
		preset,
		x,
		y,
		delay,
		duration,
		easing,
		disable,
		reset,
		opacity,
		rotate,
		blur,
		scale,
		root,
		rootMargin,
		threshold,
		onRevealStart,
		onRevealEnd,
		onResetStart,
		onResetEnd,
		onMount,
		onUpdate,
		onDestroy
	}}
>
	<slot />
</div>
