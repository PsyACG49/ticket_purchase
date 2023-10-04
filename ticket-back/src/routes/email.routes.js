import { Router } from "express";
import * as emailCtrl from "../controllers/email.controller";
const router = Router();

router.post("/send-me", emailCtrl.sendMeEmail);

export default router;
