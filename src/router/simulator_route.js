import SimulatorCtrl from "../controllers/Simulator_ctrl.js";
import { Router } from "express";
const simulator_route = Router();
const simulator_ctrl = new SimulatorCtrl();
import checkAuth from "../middlewares/auth_middleware.js";

simulator_route.post("/generate/simulation", checkAuth, simulator_ctrl.simulate);

export default simulator_route;
