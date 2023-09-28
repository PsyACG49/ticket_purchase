import express from "express";
import cors from "cors";
import morgan from "morgan";

import paymentRoutes from "./routes/payment.routes.js";
import testimonialRoutes from "./routes/testiminial.routes.js";
import courseRoutes from "./routes/course.routes.js";
import masterclassRoutes from "./routes/masterclass.routes.js";

import { PORT } from "./config.js";

const app = express();

app.set("port", PORT || 4000);

app.use(cors());
app.use(morgan("dev"));
app.use("/webhook", express.raw({ type: "application/json" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(paymentRoutes);
app.use("/api/saloloyo/v1/testimonials", testimonialRoutes);
app.use("/api/saloloyo/v1/courses", courseRoutes);
app.use("/api/saloloyo/v1/masterclasses", masterclassRoutes);

export default app;
