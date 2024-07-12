import type { RequestHandler } from '@sveltejs/kit';
import axios from 'axios';

export const GET: RequestHandler = async ({ request }) => {
	const stream = new ReadableStream({
		async start(controller) {
			try {
				controller.enqueue('Starting to process...\n');

				// Replace this with your API endpoint
				const apiEndpoint =
					'https://creator-camp-git-sendgrid-parallel-creator-camp.vercel.app/api/email-notification';

				await axios.get(apiEndpoint, {
					// Add headers if needed
					headers: {
						'Content-Type': 'application/json',
						'x-vercel-protection-bypass': import.meta.env.VITE_X_VERCEL_PROTECTION_BYPASS
					}
				});

				controller.enqueue('Process completed successfully.\n');
			} catch (error) {
				controller.enqueue(`Error: ${error instanceof Error ? error.message : String(error)}\n`);
			} finally {
				controller.close();
			}
		}
	});

	return new Response(stream, {
		headers: { 'Content-Type': 'text/plain' }
	});
};
