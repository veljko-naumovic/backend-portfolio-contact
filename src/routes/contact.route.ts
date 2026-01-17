import { Router } from "express";
import { sendContactEmail } from "../services/mail.service";

const router = Router();

router.post("/contact", async (req, res) => {
	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		return res.status(400).json({
			success: false,
			message: "All fields are required",
		});
	}

	res.status(200).json({
		success: true,
		message: "Message sent successfully",
	});

	sendContactEmail({ name, email, message }).catch((err) => {
		console.error("Email send failed:", err);
	});
});

export default router;
