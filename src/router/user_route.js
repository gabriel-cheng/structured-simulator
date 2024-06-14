import checkIsAdmin from "../middlewares/admin_middleware.js";
import checkAuth from "../middlewares/auth_middleware.js";
import UserCtrl from "../controllers/User_ctrl.js";
import { Router } from "express";
const user_ctrl = new UserCtrl();
const user_route = Router();

user_route.get("/", checkAuth, checkIsAdmin, user_ctrl.viewAllUsers);
user_route.get("/:user_id", checkAuth, checkIsAdmin, user_ctrl.viewOneUser);
user_route.get("/create/view", checkAuth, checkIsAdmin, user_ctrl.registerNewUserView);
user_route.post("/create", checkAuth, checkIsAdmin, user_ctrl.registerNewUser);
user_route.put("/update/:user_id", checkAuth, checkIsAdmin, user_ctrl.updateUser);
user_route.delete("/delete/:user_id", checkAuth, checkIsAdmin, user_ctrl.deleteUser);
user_route.get("/:user_foreign_key/address", checkAuth, checkIsAdmin, user_ctrl.viewUserAddress);
user_route.post("/:user_foreign_key/address/create", checkAuth, checkIsAdmin, user_ctrl.createUserAddress);
user_route.put("/:user_foreign_key/address/update", checkAuth, checkIsAdmin, user_ctrl.updateUserAddress);

user_route.get("/auth/login", user_ctrl.userLoginView);
user_route.post("/auth/login/request", user_ctrl.userLoginRequest);

export default user_route;
