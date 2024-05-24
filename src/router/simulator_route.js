import SimulatorCtrl from "../controllers/simulator_ctrl.js";
import { Router } from "express";
const simulator_route = Router();
const simulator_ctrl = new SimulatorCtrl();

simulator_route.get("/", simulator_ctrl.index);
simulator_route.post("/simulate", simulator_ctrl.simulate);

export default simulator_route;
