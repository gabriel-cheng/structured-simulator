import checkIsAdmin from "../middlewares/admin_middleware.js";
import checkAuth from "../middlewares/auth_middleware.js";
import ViewsCtrl from "../controllers/Views_ctrl.js";
import { Router } from "express";
const views_ctrl = new ViewsCtrl();
const views_route = Router();

views_route.get("/", checkAuth, views_ctrl.homeView);
views_route.get("/view/user/login", views_ctrl.userLoginView);
views_route.get("/view/user/register", checkAuth, checkIsAdmin, views_ctrl.registerNewUserView);
views_route.get("/view/simulator/:adm", checkAuth, views_ctrl.simulatorView);

export default views_route;
