import ReconCtrl from "../../controllers/Adms_ctrl/Recon_ctrl.js";
import { Router } from "express";
const recon_ctrl = new ReconCtrl();
const recon_route = Router();

recon_route.get("/", recon_ctrl.viewAllReconData);
recon_route.get("/:id", recon_ctrl.viewOneReconData);
recon_route.post("/add", recon_ctrl.addNewReconData);
recon_route.put("/update/:id", recon_ctrl.updateReconData);
recon_route.delete("/delete/:id", recon_ctrl.deleteReconData);

export default recon_route;
