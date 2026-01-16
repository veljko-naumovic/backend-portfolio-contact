import { Router, Request, Response } from "express";
import { ContactPayload } from "../types/contact.types";

const router = Router();

router.post("/", (req: Request, res: Response) => {
	const { name, email, message } = req.body as ContactPayload;

	// Basic validation
	if (!name || !email || !message) {
		return res.status(400).json({
			error: "All fields are required",
		});
	}

	// For now: just log (real backend behavior)
	console.log("New contact message:", {
		name,
		email,
		message,
	});

	return res.status(200).json({
		success: true,
		message: "Contact message received",
	});
});

export default router;
