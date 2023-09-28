import { Router } from "express";
import * as orderCtrl from "../controllers/order.controller";

const router = Router();

router.get("/", orderCtrl.getOrders);

export default router;
