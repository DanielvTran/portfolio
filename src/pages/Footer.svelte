<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import github from '../../static/icons/github.svg';
	import linkedin from '../../static/icons/linkedin.svg';
</script>

<footer
	class="footer footer-center bg-base-200 text-base-content rounded p-10 3xl:text-lg 2xl:text-lg xl:text-md md:text-xs sm:text-xs"
>
	<nav
		class="grid grid-flow-col gap-4"
		use:reveal={{
			preset: 'slide',
			x: 0,
			y: 100,
			delay: 100,
			duration: 1000,
			easing: 'easeInOutCubic'
		}}
	>
		<a class="link link-hover" href="#about">About me</a>
		<!-- <a class="link link-hover" href="#contact">Contact</a> -->
		<a class="link link-hover" href="#projects">Projects</a>
	</nav>
	<nav>
		<div
			class="grid grid-flow-col gap-4"
			use:reveal={{
				preset: 'slide',
				x: 0,
				y: 100,
				delay: 100,
				duration: 1000,
				easing: 'easeInOutCubic'
			}}
		>
			<a target="_blank" href="https://github.com/DanielvTran">
				<img src={github} alt="github icon" />
			</a>
			<a target="_blank" href="https://www.linkedin.com/in/daniel-tran-19a9b4225/">
				<img src={linkedin} alt="linkedin icon" />
			</a>
		</div>
	</nav>
	<aside>
		<span
			><a target="_blank" href="https://icons8.com/icon/62925/linkedin-circled">LinkedIn Circled,</a
			>
			<a target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a> and,
			<a target="_blank" href="https://icons8.com/icon/100508/slide-up">Slide Up</a>
			icons by
			<a target="_blank" href="https://icons8.com">Icons8</a></span
		>
	</aside>
</footer>
