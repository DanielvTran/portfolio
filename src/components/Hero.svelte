<script lang="ts">
	// Images
	import bodyshot from '../../static/bodyshot.jpeg';
</script>

<div id="hero" class="hero bg-primary min-h-screen w-full md:py-10 sm:py-10 xs:py-5">
	<div class="hero-content w-full flex flex-col lg:flex-row">
		<div
			class="w-full flex flex-col 3xl:gap-10 md:justify-center md:items-center sm:justify-center sm:items-center xs:justify-center xs:items-center xxs:justify-center xxs:items-center"
		>
			<h1
				class="text-5xl font-bold text-secondary 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
			>
				Hi my name is Daniel Tran! 🙌
			</h1>
			<p
				class="py-6 text-2xl text-secondary 3xl:text-5xl 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-xl xs:text-xl"
			>
				Frontend Web Developer
			</p>
			<div
				class="quick-nav flex flex-row w-full gap-5 md:justify-center md:items-center sm:justify-center sm:items-center xs:justify-center xs:items-center xxs:justify-center xxs:items-center"
			>
				<a
					href="#projects"
					class="btn btn-primary border-white bg-secondary text-primary hover:text-gray-300 hover:bg-[#1871ca] hover:border-[#1871ca] font-bold 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-0 xs:p-2 xs:text-xs xxs:p-2 xxs:text-xs"
					>Projects</a
				>
				<a
					href="#about"
					class="btn btn-primary border-white bg-secondary text-primary hover:text-gray-300 hover:bg-[#1871ca] hover:border-[#1871ca] font-bold 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-0 xs:p-2 xs:text-xs xxs:p-2 xxs:text-xs"
					>About Me</a
				>
			</div>
		</div>
		<img
			src={bodyshot}
			class="max-w-sm rounded-lg shadow-2xl 3xl:max-w-lg 2xl:max-w-md xl:max-w-sm lg:max-w-sm md:mt-6 sm:mt-6 xs:max-w-xs xs:mt-4 xxs:max-w-[80%] xxs:mt-8"
			alt="Body shot of Daniel Tran"
		/>
	</div>
</div>
