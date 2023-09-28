import { Router } from "express";
import * as courseCtrl from "../controllers/course.controller";

const router = Router();

router.get("/", courseCtrl.getCourses);

export default router;
