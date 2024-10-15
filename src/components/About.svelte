<script lang="ts">
	// Images
	import cycling from '../../static/cycling/dt_cycling.jpeg';
	import resume from '../../static/resume.pdf';
</script>

<div id="about" class="hero bg-secondary min-h-screen w-full md:py-10">
	<div class="hero-content w-full flex-col lg:flex-row-reverse md:gap-10">
		<div
			class="w-full md:flex md:flex-col md:justify-center md:items-center md:w-10/12 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-10/12 xs:flex xs:flex-col xs:justify-center xs:items-center xs:w-10/12 xxs:flex xxs:flex-col xxs:justify-center xxs:items-center xxs:w-10/12"
		>
			<div class="w-fit">
				<h1
					class="text-5xl font-bold text-primary 3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
				>
					About Me
				</h1>
				<div class="border-2 my-5 border-primary"></div>
			</div>

			<p
				class="py-6 text-2xl text-primary 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm md:text-center sm:text-sm sm:text-center xs:text-sm xs:text-center xxs:text-sm xxs:text-center"
			>
				I develop web applications with a focus on frontend technologies. Outside of work, I enjoy
				an active lifestyle, particularly cycling and a little bit of running. Check out my CV.
			</p>
			<a
				href={resume}
				download="danieltranresume"
				class="btn btn-primary border-primary bg-primary text-secondary hover:text-primary hover:bg-gray-300 hover:border-gray-300 font-bold 3xl:text-4xl 2xl:text-3xl xl:text-xl lg:text-0 xs:text-xs xxs:text-xs"
				>Download CV</a
			>
		</div>
		<img
			src={cycling}
			class="max-w-sm rounded-lg shadow-2xl 3xl:max-w-lg 2xl:max-w-md xl:max-w-sm lg:max-w-sm xs:max-w-xs xxs:max-w-[80%]"
			alt="Daniel Tran riding a road bike"
		/>
	</div>
</div>
