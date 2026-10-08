import { Router } from "express";
import * as controller from "../controllers/carController.ts";

const router = Router();

router.post("/", controller.create);

export default router;
