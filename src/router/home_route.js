import HomeCtrl from "../controllers/Home_ctrl.js";
import { Router } from "express";
const home_ctrl = new HomeCtrl();
const home_route = Router();
import checkAuth from "../middlewares/auth_middleware.js";

home_route.get("/", checkAuth, home_ctrl.home);

export default home_route;
