import e, { Router } from "express";
import { statsController } from "./stats.controller";

const router = Router();

router.get("/totals", statsController.getTotals);

export default router;
