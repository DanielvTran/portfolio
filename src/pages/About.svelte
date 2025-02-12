<script lang="ts">
	import RevealAnimation from '../components/RevealAnimation.svelte';
	import { standardReveal } from '$lib';

	// Images
	import cycling from '../../static/cycling/dt_cycling.jpeg';
	import resume from '../../static/resume.pdf';
</script>

<div id="about" class="hero bg-secondary min-h-screen w-full md:py-10">
	<div class="hero-content w-full flex-col lg:flex-row-reverse md:gap-10 lg:px-20">
		<div
			class="w-full md:flex md:flex-col md:justify-center md:items-center md:w-10/12 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-10/12 xs:flex xs:flex-col xs:justify-center xs:items-center xs:w-10/12 xxs:flex xxs:flex-col xxs:justify-center xxs:items-center xxs:w-10/12"
		>
			<RevealAnimation {...standardReveal}>
				<div class="w-fit">
					<h1
						class="text-5xl font-bold text-primary xl:text-7xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-5xl"
					>
						About Me
					</h1>
					<div class="border-2 my-5 border-primary"></div>
				</div>
			</RevealAnimation>

			<RevealAnimation {...standardReveal}>
				<p
					class="py-6 text-2xl text-primary xxs:text-lg 2xl:text-2xl md:text-center sm:text-center xs:text-center xxs:text-center"
				>
					I am a full-stack web developer with a passion for building modern, user-friendly, and
					visually appealing web applications. I enjoy prototyping frontend designs and developing
					secure backend functionalities.
				</p>
			</RevealAnimation>

			<RevealAnimation {...standardReveal}>
				<a
					href={resume}
					download="danieltranresume"
					class="btn btn-primary border-primary bg-primary text-secondary hover:text-primary hover:bg-gray-300 hover:border-gray-300 font-bold 2xl:mt-5 md:text-xl xl:text-2xl transition-transform duration-300 hover:scale-110"
				>
					Download CV
				</a>
			</RevealAnimation>
		</div>

		<RevealAnimation {...standardReveal}>
			<div class="w-full flex justify-center xxs:mt-5">
				<img
					src={cycling}
					class="max-w-sm rounded-lg shadow-2xl 3xl:max-w-lg 2xl:max-w-md xl:max-w-sm lg:max-w-sm xs:max-w-xs xxs:max-w-[80%] xxs:flex xxs:justify-center"
					alt="Daniel Tran riding a road bike"
				/>
			</div>
		</RevealAnimation>
	</div>
</div>
