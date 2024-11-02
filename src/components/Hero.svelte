<script lang="ts">
	// Images
	import bodyshot from '../../static/bodyshot.jpeg';
</script>

<div id="hero" class="hero bg-primary min-h-screen w-full py-10 xs:py-5">
	<div
		class="hero-content w-full flex flex-col lg:flex-row items-center justify-center lg:gap-10 px-4 xs:px-2"
	>
		<div class="text-center lg:text-left w-full flex flex-col items-center lg:items-start gap-6">
			<h1 class="text-5xl font-bold text-secondary lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl">
				Hi my name is Daniel Tran! 🙌
			</h1>
			<p class="text-2xl text-secondary lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
				Frontend Web Developer
			</p>
			<div class="quick-nav flex flex-row gap-5 justify-center lg:justify-start">
				<a
					href="#projects"
					class="btn btn-primary bg-secondary text-primary hover:text-gray-300 hover:bg-[#1871ca] hover:border-[#1871ca] font-bold text-lg px-6 py-3 xs:px-2 xs:py-1 xs:text-sm"
				>
					Projects
				</a>
				<a
					href="#about"
					class="btn btn-primary bg-secondary text-primary hover:text-gray-300 hover:bg-[#1871ca] hover:border-[#1871ca] font-bold text-lg px-6 py-3 xs:px-2 xs:py-1 xs:text-sm"
				>
					About Me
				</a>
			</div>
		</div>
		<img
			src={bodyshot}
			class="max-w-xs sm:max-w-[60%] rounded-lg shadow-2xl mt-6 lg:mt-0"
			alt="Body shot of Daniel Tran"
		/>
	</div>
</div>
