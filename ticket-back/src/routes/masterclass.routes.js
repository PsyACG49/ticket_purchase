import { Router } from "express";
import * as masterclassCtrl from "../controllers/masterclass.controller";

const router = Router();

router.get("/", masterclassCtrl.getMasterclasses);

export default router;
