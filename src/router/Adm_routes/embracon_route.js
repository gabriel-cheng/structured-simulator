import EmbraconCtrl from "../../controllers/Adms_ctrl/Embracon_ctrl.js";
import { Router } from "express";
const embracon_ctrl = new EmbraconCtrl();
const embracon_route = Router();

embracon_route.get("/", embracon_ctrl.viewAllEmbraconData);
embracon_route.get("/:id", embracon_ctrl.viewOneEmbraconData);
embracon_route.post("/add", embracon_ctrl.addNewEmbraconData);
embracon_route.put("/update/:id", embracon_ctrl.updateEmbraconData);
embracon_route.delete("/delete/:id", embracon_ctrl.deleteEmbraconData);

export default embracon_route;
