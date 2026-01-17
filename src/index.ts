import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import contactRouter from "./routes/contact.route";

const app = express();

app.use(
	cors({
		origin: process.env.FRONTEND_URL || "*",
	}),
);

app.use(express.json());

app.get("/", (_req, res) => {
	res.json({ status: "API running" });
});

app.use("/api", contactRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
