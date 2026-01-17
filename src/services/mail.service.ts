import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

type SendContactEmailParams = {
	name: string;
	email: string;
	message: string;
};

export async function sendContactEmail({
	name,
	email,
	message,
}: SendContactEmailParams) {
	await resend.emails.send({
		from: process.env.EMAIL_FROM!,
		to: [process.env.EMAIL_TO!],
		subject: `New contact message from ${name}`,
		replyTo: email,
		text: `
You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}
    `,
	});
}
