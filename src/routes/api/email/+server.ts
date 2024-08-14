import { text, type RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

// Helper function to create JSON responses
const createJsonResponse = (message: string, data: object, status: number) => {
	return new Response(JSON.stringify({ message, ...data }), {
		status,
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { data } = await request.json();
		const { firstName, lastName, email, message } = data;

		// console.log('First Name:', firstName);
		// console.log('Last Name:', lastName);
		// console.log('Email:', email);
		// console.log('Message:', message);

		if (!firstName || !lastName || !email || !message) {
			return createJsonResponse(
				'Form values are undefined',
				{
					firstName: firstName,
					lastName: lastName,
					email: email,
					message: message
				},
				400
			);
		}

		// Setup transport configuration object
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			secure: true,
			requireTLS: true,
			auth: {
				user: import.meta.env.VITE_NODEMAILER_EMAIL,
				pass: import.meta.env.VITE_NODEMAILER_PASS
			}
		});

		// Email contents
		const mailOptions = {
			from: { name: 'Daniel Tran', address: import.meta.env.VITE_NODEMAILER_EMAIL },
			to: import.meta.env.VITE_NODEMAILER_EMAIL,
			subject: `Thanks for reaching out ${firstName} ${lastName}! 😌`,
			text: `Hi im ${firstName}, this is my messsage ${message} please contact me at ${email}`
		};

		// Send Email
		const nodemailerResponse = await transporter.sendMail(mailOptions);

		return createJsonResponse(
			'Email sent successfully',
			{ nodemailerResponse: nodemailerResponse.response },
			200
		);
	} catch (error: any) {
		console.error('Error sending email:', error);
		return createJsonResponse('Failed to send email', { error: error.message }, 500);
	}
};
