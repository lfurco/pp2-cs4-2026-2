import { Router } from "express";
import * as controller from "../controllers/carController.ts";

const router = Router();

router.get("/", controller.retrieveAll);
router.post("/", controller.create);

export default router;
