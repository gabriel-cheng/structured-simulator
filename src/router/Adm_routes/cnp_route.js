import CnpCtrl from "../../controllers/Adms_ctrl/cnp_ctrl.js";
import { Router } from "express";
const cnp_ctrl = new CnpCtrl();
const cnp_route = Router();

cnp_route.get("/", cnp_ctrl.viewAllCnpData);
cnp_route.get("/:id", cnp_ctrl.viewOneCnpData);
cnp_route.post("/add", cnp_ctrl.addNewCnpData);
cnp_route.put("/update/:id", cnp_ctrl.updateCnpData);
cnp_route.delete("/delete/:id", cnp_ctrl.deleteCnpData);

export default cnp_route;
