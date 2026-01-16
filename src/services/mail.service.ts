import nodemailer from "nodemailer";
import { ContactPayload } from "../types/contact.types";

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
});

export const sendContactMail = async ({
	name,
	email,
	message,
}: ContactPayload): Promise<void> => {
	await transporter.sendMail({
		from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
		to: process.env.MAIL_TO,
		subject: `New contact message from ${name}`,
		html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
	});
};
