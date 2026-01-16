import { Router, Request, Response } from "express";
import { ContactPayload } from "../types/contact.types";
import { sendContactMail } from "../services/mail.service";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
	const { name, email, message } = req.body as ContactPayload;

	// Basic validation
	if (!name || !email || !message) {
		return res.status(400).json({
			error: "All fields are required",
		});
	}

	try {
		await sendContactMail({ name, email, message });

		return res.status(200).json({
			success: true,
			message: "Message sent successfully",
		});
	} catch (error) {
		console.error("Contact email error:", error);

		return res.status(500).json({
			error: "Failed to send message",
		});
	}
});

export default router;
