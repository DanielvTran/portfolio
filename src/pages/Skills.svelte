<script lang="ts">
	// Icons
	import react from '../../static/icons/react.svg';
	import firebase from '../../static/icons/firebase.svg';
	import nodejs from '../../static/icons/nodejs.svg';
	import svelte from '../../static/icons/svelte.svg';
	import tailwindcss from '../../static/icons/tailwindcss.svg';
	import typescript from '../../static/icons/typescript.svg';
</script>

<div id="skills" class="hero bg-secondary min-h-screen w-full md:py-10">
	<div class="hero-content w-full flex-col lg:flex-col">
		<div class="w-fit">
			<h1
				class="text-5xl font-bold text-primary 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
			>
				Skills
			</h1>
			<div class="border-2 my-5 border-primary"></div>
		</div>
		<p
			class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
		>
			With experience in both frontend and backend technologies, I develop full-stack applications
			using React, Svelte, Next.js, Playwright, TypeScript, MySQL, Firebase, Tailwind CSS, and
			Node.js. I also have experience implementing CI/CD pipelines with GitHub Actions for testing.
		</p>

		<div class="skills-icon-container flex flex-row gap-10 sm:gap-10 xxs:gap-5">
			<div class="skills-left">
				<h1
					class="text-2xl font-bold text-primary text-right my-10 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-md md:my-5 sm:text-md sm:my-3 xs:text-md xs:my-3 xxs:text-sm xxs:my-3"
				>
					Frontend
				</h1>
				<div class="skills-icons flex flex-row">
					<img alt="react" src={react} class="md:w-20 sm:w-20 xs:w-14 xxs:w-12" />
					<img alt="svelte" src={svelte} class="md:w-20 sm:w-20 xs:w-14 xxs:w-12" />
					<img alt="tailwindcss" src={tailwindcss} class="md:w-20 sm:w-20 xs:w-14 xxs:w-12" />
				</div>
			</div>
			<div class="skills-right">
				<h1
					class="text-2xl font-bold text-primary my-10 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-md md:my-5 sm:text-md sm:my-3 xs:text-md xs:my-3 xxs:text-sm xxs:my-3"
				>
					Backend
				</h1>
				<div class="skills-icons flex flex-row">
					<img alt="typescript" src={typescript} class="md:w-20 sm:w-20 xs:w-14 xxs:w-12" />
					<img alt="firebase" src={firebase} class="md:w-20 sm:w-20 xs:w-14 xxs:w-12" />
					<img alt="nodejs" src={nodejs} class="md:w-20 sm:w-20 xs:w-14 xxs:w-12" />
				</div>
			</div>
		</div>
	</div>
</div>
