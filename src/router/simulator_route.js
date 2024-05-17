import SimulatorCtrl from "../controllers/simulator_ctrl.js";
import { Router } from "express";
const simulator_route = Router();
const simulator_ctrl = new SimulatorCtrl();

simulator_route.get("/", simulator_ctrl.index);
simulator_route.post("/send", simulator_ctrl.simulatorSend);

export default simulator_route;
