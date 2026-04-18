import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import contactRouter from "./routes/contact.route";

const app = express();

const allowedOrigins = [
	"http://localhost:5173",
	"https://veljko-naumovic-portfolio.web.app",
];

app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("CORS blocked"));
			}
		},
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
