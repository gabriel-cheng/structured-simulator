import UserCtrl from "../controllers/User_ctrl.js";
import { Router } from "express";
const user_ctrl = new UserCtrl();
const user_route = Router();

user_route.get("/", user_ctrl.viewAll);
user_route.get("/create", user_ctrl.createNew);

export default user_route;
