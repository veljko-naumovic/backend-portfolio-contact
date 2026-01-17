"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_service_1 = require("../services/mail.service");
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    const { name, email, message } = req.body;
    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({
            error: "All fields are required",
        });
    }
    try {
        await (0, mail_service_1.sendContactMail)({ name, email, message });
        return res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });
    }
    catch (error) {
        console.error("Contact email error:", error);
        return res.status(500).json({
            error: "Failed to send message",
        });
    }
});
exports.default = router;
