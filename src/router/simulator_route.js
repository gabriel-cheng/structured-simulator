import SimulatorCtrl from "../controllers/Simulator_ctrl.js";
import { Router } from "express";
const simulator_route = Router();
const simulator_ctrl = new SimulatorCtrl();
import checkAuth from "../middlewares/auth_middleware.js";

simulator_route.get("/",  simulator_ctrl.index);
simulator_route.post("/simulate", checkAuth, simulator_ctrl.simulate);

export default simulator_route;
