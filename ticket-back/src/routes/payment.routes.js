import { Router } from "express";
import express from "express";

import {
  createSession,
  createWebhook,
} from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-checkout-session", createSession);
router.post("/webhook", createWebhook);
router.get("/success", (req, res) => res.send("success"));
router.get("/cancel", (req, res) => res.send("cancel"));

export default router;
