<script lang="ts">
	// Images
	import bodyshot from '../../static/bodyshot.jpeg';
</script>

<div id="about" class="hero bg-secondary min-h-screen w-full">
	<div class="hero-content w-full flex-col lg:flex-row-reverse">
		<div class="w-1/2">
			<h1 class="text-5xl font-bold text-primary">About Me</h1>
			<p class="py-6 text-2xl text-primary">
				I develop web applications with a focus on both frontend and backend technologies. Outside
				work, I enjoy an active lifestyle, particularly cycling.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
		<img
			src={bodyshot}
			class="max-w-sm rounded-lg shadow-2xl w-1/2"
			alt="Body shot of Daniel Tran"
		/>
	</div>
</div>
