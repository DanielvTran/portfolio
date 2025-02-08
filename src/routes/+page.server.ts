import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactFormSchema } from '$lib/validationSchema';
import axios from 'axios';

export const ssr = false;

export const load = async () => {
	const form = await superValidate(zod(contactFormSchema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactFormSchema));

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return message(form, 'Failed: Invalid inputs, please try again. 😵‍💫', { status: 400 });
		}

		const response = await axios.post('http://localhost:5173/api/email', form);

		if (response.status !== 200) {
			return message(
				form,
				'Failed: Something went wrong while sending the message, please try again. 😵‍💫'
			);
		}

		const data = response.data;

		// Display a success status message
		return message(form, "Success: Message sent, i'll get back to you shortly! 👌");
	}
};
