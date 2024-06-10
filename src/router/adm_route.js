import { default as AdmCtrl } from "../controllers/Adms_ctrl/index_adm_ctrl.js";
import { Router } from "express";
const adm_route = Router();
const bradesco = new AdmCtrl.Bradesco();

adm_route.get("/bradesco", bradesco.viewAllData);
adm_route.post("/bradesco/add", bradesco.addNewBradescoData);

export default adm_route;
