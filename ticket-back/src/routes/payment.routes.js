import { Router } from "express";

import {
  createSession,
  createWebhook,
} from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-checkout-session", createSession);
router.post("/webhook", createWebhook);

export default router;
