import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import cors from "cors";
import { PORT } from "./config.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(paymentRoutes);

app.listen(PORT);
console.log("server on port", PORT);
