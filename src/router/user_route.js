import UserCtrl from "../controllers/User_ctrl.js";
import { Router } from "express";
const user_ctrl = new UserCtrl();
const user_route = Router();

user_route.get("/", user_ctrl.viewAllUsers);
user_route.post("/create", user_ctrl.createNewUser);
user_route.put("/update/:user_id", user_ctrl.updateUser);
user_route.delete("/delete/:user_id", user_ctrl.deleteUser);
user_route.post("/:user_id/address/create", user_ctrl.createUserAddress);

export default user_route;
