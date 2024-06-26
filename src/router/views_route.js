import checkIsAdmin from "../middlewares/admin_middleware.js";
import checkViewAuth from "../middlewares/views_auth_middleware.js";
import ViewsCtrl from "../controllers/Views_ctrl.js";
import checkAllowedAdmins from "../middlewares/allowed_admins_middleware.js"
import { Router } from "express";
const views_ctrl = new ViewsCtrl();
const views_route = Router();

views_route.get("/", checkViewAuth, views_ctrl.homeView);
views_route.get("/view/user/login", views_ctrl.userLoginView);
views_route.get("/view/user/register", checkViewAuth, checkIsAdmin, views_ctrl.registerNewUserView);
views_route.get("/view/simulator/:adm", checkAllowedAdmins, checkViewAuth, views_ctrl.simulatorView);
views_route.get("/view/admin/user/all", checkViewAuth, checkIsAdmin, views_ctrl.allUsersView);

export default views_route;
