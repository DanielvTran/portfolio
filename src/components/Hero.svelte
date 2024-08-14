<script lang="ts">
	// Images
	import bodyshot from '../../static/bodyshot.jpeg';
</script>

<div id="hero" class="hero bg-primary min-h-screen w-full">
	<div class="hero-content w-full flex-col lg:flex-row">
		<div class="w-full">
			<h1 class="text-5xl font-bold text-secondary">Hi my name is Daniel Tran! 🙌</h1>
			<p class="py-6 text-2xl text-secondary">Frontend Web Developer</p>
			<div class="quick-nav flex flex-row w-full gap-5">
				<a
					href="#projects"
					class="btn btn-primary border-white bg-secondary text-primary hover:text-gray-300 hover:bg-[#1871ca] hover:border-[#1871ca] font-bold"
					>Projects</a
				>
				<a
					href="#about"
					class="btn btn-primary border-white bg-secondary text-primary hover:text-gray-300 hover:bg-[#1871ca] hover:border-[#1871ca] font-bold"
					>About Me</a
				>
			</div>
		</div>
		<img
			src={bodyshot}
			class="max-w-sm rounded-lg shadow-2xl w-full"
			alt="Body shot of Daniel Tran"
		/>
	</div>
</div>
