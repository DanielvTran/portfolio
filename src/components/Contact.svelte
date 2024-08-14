<script lang="ts">
	// Props
	export let form;
	export let message;
	export let errors;
	export let enhance;
</script>

<div id="contact" class="hero bg-primary min-h-screen w-full">
	<div class="hero-content w-full flex-col lg:flex-col">
		<div class="w-fit">
			<h1 class="text-5xl font-bold text-secondary">Contact Me</h1>
			<div class="border-2 my-5 border-secondary"></div>
		</div>

		<form
			method="POST"
			use:enhance
			class="bg-white p-10 rounded-2xl w-[70%] flex flex-col justify-between gap-10 items-center text-[#8A8A8A]"
		>
			<div class="name-input-container flex flex-row w-full justify-between gap-5">
				<input
					class="input w-full bg-[#E6E6E6] text-xl placeholder:text-[#8A8A8A] {$errors.firstName
						? 'border-red-500 border-2 placeholder:text-red-500'
						: ''}"
					type="text"
					name="firstName"
					placeholder={$errors.firstName ? `${$errors.firstName}` : 'First Name'}
					aria-invalid={$errors.firstName ? 'true' : undefined}
					bind:value={$form.firstName}
				/>
				<input
					class="input w-full bg-[#E6E6E6] text-xl placeholder:text-[#8A8A8A] {$errors.lastName
						? 'border-red-500 border-2 placeholder:text-red-500'
						: ''}"
					type="text"
					name="lastName"
					placeholder={$errors.lastName ? `${$errors.lastName}` : 'Last Name'}
					aria-invalid={$errors.lastName ? 'true' : undefined}
					bind:value={$form.lastName}
				/>
			</div>

			<input
				class="input w-full bg-[#E6E6E6] text-xl placeholder:text-[#8A8A8A] {$errors.email
					? 'border-red-500 border-2 placeholder:text-red-500'
					: ''}"
				type="email"
				name="email"
				placeholder={$errors.email ? `${$errors.email}` : 'Email'}
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.email}
			/>

			<textarea
				class="input w-full bg-[#E6E6E6] text-xl h-40 p-4 placeholder:text-[#8A8A8A] {$errors.message
					? 'border-red-500 border-2 placeholder:text-red-500'
					: ''}"
				name="message"
				placeholder={$errors.message ? `${$errors.message}` : 'Type your message here! 👌'}
				aria-invalid={$errors.message ? 'true' : undefined}
				bind:value={$form.message}
			></textarea>

			<button class="submit text-white bg-[#003060] w-[50%] py-5 rounded-md text-xl font-bold"
				>Submit</button
			>
		</form>
	</div>
</div>
