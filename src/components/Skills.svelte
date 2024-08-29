<script lang="ts">
	// Icons
	import react from '../../static/icons/react.svg';
	import firebase from '../../static/icons/firebase.svg';
	import nodejs from '../../static/icons/nodejs.svg';
	import svelte from '../../static/icons/svelte.svg';
	import tailwindcss from '../../static/icons/tailwindcss.svg';
	import typescript from '../../static/icons/typescript.svg';
</script>

<div id="skills" class="hero bg-primary min-h-screen w-full">
	<div class="hero-content w-full flex-col lg:flex-col">
		<div class="w-fit">
			<h1 class="text-5xl font-bold text-secondary">Skills</h1>
			<div class="border-2 my-5 border-secondary"></div>
		</div>
		<p class="py-6 text-2xl text-secondary text-center">
			After university, I worked as a full-stack web developer for around 8 months. Throughout these
			8 months, I was exposed to many new libraries such as bunny.net, SendGrid, pdf-lib, etc. This
			exposure has allowed me to enhance my implementation skills to work seamlessly with each
			other. Below are the main technologies and frameworks that I have used.
		</p>

		<div class="skills-icon-container flex flex-row gap-10">
			<div class="skills-left">
				<h1 class="text-2xl font-bold text-secondary text-right my-10">Frontend</h1>
				<div class="skills-icons flex flex-row">
					<img alt="react" src={react} />
					<img alt="svelte" src={svelte} />
					<img alt="tailwindcss" src={tailwindcss} />
				</div>
			</div>
			<div class="skills-right">
				<h1 class="text-2xl font-bold text-secondary my-10">Backend</h1>
				<div class="skills-icons flex flex-row">
					<img alt="typescript" src={typescript} />
					<img alt="firebase" src={firebase} />
					<img alt="nodejs" src={nodejs} />
				</div>
			</div>
		</div>
	</div>
</div>
