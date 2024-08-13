import { z } from 'zod';

export const contactFormSchema = z
	.object({
		firstName: z
			.string()
			.min(2, { message: 'First Name: Atleast 2 characters' })
			.max(35, { message: 'First Name: Max 35 characters' }),
		lastName: z
			.string()
			.min(2, { message: 'Last Name: Atleast 2 characters' })
			.max(35, { message: 'First Name: Max 35 characters' }),
		email: z.string().email({ message: 'Email: Invalid email' }),
		message: z
			.string()
			.min(2, { message: 'Message: Min 2 characters' })
			.max(255, { message: 'Message: Max 255 characters' })
	})
	.required();
