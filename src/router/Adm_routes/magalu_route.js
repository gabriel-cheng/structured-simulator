import MagaluCtrl from "../../controllers/Adms_ctrl/Magalu_ctrl.js";
import { Router } from "express";
const magalu_ctrl = new MagaluCtrl();
const magalu_route = Router();

magalu_route.get("/", magalu_ctrl.viewAllMagaluData);
magalu_route.get("/:id", magalu_ctrl.viewOneMagaluData);
magalu_route.post("/add", magalu_ctrl.addNewMagaluData);
magalu_route.put("/update/:id", magalu_ctrl.updateMagaluData);
magalu_route.delete("/delete/:id", magalu_ctrl.deleteMagaluData);

export default magalu_route;
