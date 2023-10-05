import express from "express";
import cors from "cors";
import morgan from "morgan";

import paymentRoutes from "./routes/payment.routes.js";
import testimonialRoutes from "./routes/testiminial.routes.js";
import courseRoutes from "./routes/course.routes.js";
import masterclassRoutes from "./routes/masterclass.routes.js";
import emailRoutes from "./routes/email.routes.js";

import { PORT } from "./config.js";

const app = express();

app.set("port", PORT || 4000);

app.use(cors());
app.use(morgan("dev"));
app.use(
  "/api/saloloyo/v1/payment/webhook",
  express.raw({ type: "application/json" })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/saloloyo/v1/payment", paymentRoutes);
app.use("/api/saloloyo/v1/email", emailRoutes);
app.use("/api/saloloyo/v1/testimonials", testimonialRoutes);
app.use("/api/saloloyo/v1/courses", courseRoutes);
app.use("/api/saloloyo/v1/masterclasses", masterclassRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something was wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

export default app;
