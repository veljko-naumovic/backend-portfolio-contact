import { Router } from "express";
import { sendContactEmail } from "../services/mail.service";

const router = Router();

router.post("/", async (req, res) => {
	try {
		const { name, email, message } = req.body;

		if (!name || !email || !message) {
			return res.status(400).json({ error: "Missing required fields" });
		}

		await sendContactEmail({ name, email, message });

		res.status(200).json({ success: true });
	} catch (error) {
		console.error("Contact email error:", error);
		res.status(500).json({ error: "Failed to send message" });
	}
});

export default router;
