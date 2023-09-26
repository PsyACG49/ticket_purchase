import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import cors from "cors";
import { PORT } from "./config.js";

const app = express();

app.set("port", PORT || 4000);

app.use("/webhook", express.raw({ type: "application/json" }));
app.use(express.json());
app.use(cors());

app.use(paymentRoutes);

export default app;
