<script lang="ts">
	import RevealAnimation from '../components/RevealAnimation.svelte';
	import { smoothScroll } from '$lib/helper';

	// Images
	import bodyshot from '../../static/bodyshot.jpeg';
</script>

<div
	id="hero"
	class="hero bg-primary min-h-screen w-full py-10 xs:py-5 flex justify-center items-center"
>
	<div
		class="hero-content w-full flex flex-col lg:flex-row items-center justify-center lg:gap-10 px-4 xs:px-2"
	>
		<div class="text-center lg:text-left w-full flex flex-col items-center lg:items-start gap-6">
			<RevealAnimation preset="fade" delay={500} duration={1200}>
				<h1
					class="text-5xl font-bold text-secondary lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl"
				>
					Hi my name is Daniel Tran! 🙌
				</h1>
			</RevealAnimation>

			<RevealAnimation preset="fade" delay={800} duration={960}>
				<p class="text-2xl text-secondary lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
					Full-Stack Web Developer
				</p>
			</RevealAnimation>

			<div class="quick-nav flex flex-row gap-5 justify-center lg:justify-start">
				<RevealAnimation preset="scale" delay={1100} duration={480}>
					<a
						href="#projects"
						on:click={(e) => smoothScroll(e, '#projects')}
						class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary
							hover:bg-gray-300 hover:border-gray-300 font-bold transition-transform duration-300 hover:scale-110"
					>
						Projects
					</a>
				</RevealAnimation>

				<RevealAnimation preset="scale" delay={1300} duration={480}>
					<a
						href="#about"
						on:click={(e) => smoothScroll(e, '#about')}
						class="btn btn-secondary border-secondary bg-secondary text-primary hover:text-secondary
							hover:bg-gray-300 hover:border-gray-300 font-bold transition-transform duration-300 hover:scale-110"
					>
						About Me
					</a>
				</RevealAnimation>
			</div>
		</div>

		<div class="max-w-xs sm:max-w-[30%] w-full">
			<RevealAnimation preset="scale" delay={1500} duration={600}>
				<img
					src={bodyshot}
					class="rounded-lg shadow-2xl mt-6 lg:mt-0 transition-transform duration-300 scale-90 hover:scale-100"
					alt="Body shot of Daniel Tran"
				/>
			</RevealAnimation>

			<div class="socials flex justify-evenly w-full mt-4">
				<RevealAnimation preset="scale" delay={1200} duration={600}>
					<a
						href="https://github.com/DanielvTran"
						target="_blank"
						rel="noopener noreferrer"
						class="text-3xl text-white transition-transform duration-300 hover:scale-[1.2]"
					>
						<i class="fa-brands fa-github"></i>
					</a>
				</RevealAnimation>

				<RevealAnimation preset="scale" delay={1400} duration={600}>
					<a
						href="mailto:danieltran.softwaredev@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-3xl text-white transition-transform duration-300 hover:scale-[1.2]"
					>
						<i class="fa-solid fa-envelope"></i>
					</a>
				</RevealAnimation>

				<RevealAnimation preset="scale" delay={1600} duration={600}>
					<a
						href="https://www.linkedin.com/in/daniel-tran-19a9b4225/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-3xl text-white transition-transform duration-300 hover:scale-[1.2]"
					>
						<i class="fa-brands fa-linkedin"></i>
					</a>
				</RevealAnimation>
			</div>
		</div>
	</div>
</div>
