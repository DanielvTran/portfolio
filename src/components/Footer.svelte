<script lang="ts">
	import github from '../../static/icons/github.svg';
	import linkedin from '../../static/icons/linkedin.svg';
</script>

<footer class="footer footer-center bg-base-200 text-base-content rounded p-10">
	<nav class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="#about">About me</a>
		<a class="link link-hover" href="#contact">Contact</a>
		<a class="link link-hover" href="#projects">Projects</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a target="_blank" href="https://github.com/DanielvTran">
				<img src={github} alt="github icon" />
			</a>
			<a target="_blank" href="https://www.linkedin.com/in/daniel-tran-19a9b4225/">
				<img src={linkedin} alt="linkedin icon" />
			</a>
		</div>
	</nav>
	<aside>
		<span
			><a target="_blank" href="https://icons8.com/icon/62925/linkedin-circled">LinkedIn Circled</a>
			and <a target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a> icons by
			<a target="_blank" href="https://icons8.com">Icons8</a></span
		>
	</aside>
</footer>
