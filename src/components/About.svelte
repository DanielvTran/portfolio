<script lang="ts">
	// Images
	import cycling from '../../static/cycling/dt_cycling.jpeg';
	import resume from '../../static/resume.pdf';
</script>

<div id="about" class="hero bg-secondary min-h-screen w-full">
	<div class="hero-content w-full flex-col lg:flex-row-reverse gap-20">
		<div class="w-full">
			<div class="w-fit">
				<h1 class="text-5xl font-bold text-primary">About Me</h1>
				<div class="border-2 my-5 border-primary"></div>
			</div>

			<p class="py-6 text-2xl text-primary">
				I develop web applications with a focus on both frontend technologies. Outside of work, I
				enjoy an active lifestyle, particularly cycling and a little bit of running.
			</p>
			<a
				href={resume}
				download="danieltranresume"
				class="btn btn-primary border-primary bg-primary text-secondary hover:text-primary hover:bg-gray-300 hover:border-gray-300 font-bold"
				>Download CV</a
			>
		</div>
		<img
			src={cycling}
			class="max-w-sm rounded-lg shadow-2xl w-full"
			alt="Daniel Tran riding a road bike"
		/>
	</div>
</div>
