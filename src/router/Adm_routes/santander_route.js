import SantanderCtrl from "../../controllers/Adms_ctrl/Santander_ctrl.js";
import { Router } from "express";
const santander_ctrl = new SantanderCtrl();
const santander_route = Router();

santander_route.get("/", santander_ctrl.viewAllSantanderData);
santander_route.get("/:id", santander_ctrl.viewOneSantanderData);
santander_route.post("/add", santander_ctrl.addNewSantanderData);
santander_route.put("/update/:id", santander_ctrl.updateSantanderData);
santander_route.delete("/delete/:id", santander_ctrl.deleteSantanderData);

export default santander_route;
