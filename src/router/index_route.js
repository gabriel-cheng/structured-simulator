import { Router } from "express";
import Index from "../controllers/index_ctrl.js";
import index_model from "../models/index_model.js";
const index_ctrl = new Index();

const router = Router();

router.get("/", index_ctrl.index);

export default router;
