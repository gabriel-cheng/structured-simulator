import HomeCtrl from "../controllers/Home_ctrl.js";
import { Router } from "express";
const home_ctrl = new HomeCtrl();
const home_route = Router();

home_route.get("/", home_ctrl.home);

export default home_route;
