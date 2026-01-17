import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
	name: string;
	email: string;
	message: string;
};

export async function sendContactEmail({
	name,
	email,
	message,
}: ContactPayload) {
	try {
		await resend.emails.send({
			from: process.env.EMAIL_FROM!, // npr: Portfolio <onboarding@resend.dev>
			to: [process.env.EMAIL_TO!],
			replyTo: email,
			subject: `New contact message from ${name}`,
			text: `
Name: ${name}
Email: ${email}

Message:
${message}
			`,
		});
	} catch (error) {
		console.error("Contact email error:", error);
	}
}
