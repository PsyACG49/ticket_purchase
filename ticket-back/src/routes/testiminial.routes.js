import { Router } from "express";
import * as testimonialCtrl from "../controllers/testimonial.controller";

const router = Router();

router.get("/", testimonialCtrl.getTestimonials);

export default router;
