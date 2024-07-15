import type { RequestHandler } from '@sveltejs/kit';
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
		//const { visitorName } = await request.json();

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
			// subject: `Thanks for reaching out ${visitorName}!`,
			subject: `Thanks for reaching out!`
		};

		// Send Email
		const info = await transporter.sendMail(mailOptions);

		return createJsonResponse('Email sent successfully', { info: info.response }, 200);
	} catch (error: any) {
		console.error('Error sending email:', error);
		return createJsonResponse('Failed to send email', { error: error.message }, 500);
	}
};
