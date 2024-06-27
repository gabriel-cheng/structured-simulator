import UnicoobCtrl from "../../controllers/Adms_ctrl/Unicoob_ctrl.js";
import { Router } from "express";
const unicoob_ctrl = new UnicoobCtrl();
const unicoob_route = Router();

unicoob_route.get("/", unicoob_ctrl.viewAllUnicoobData);
unicoob_route.get("/:id", unicoob_ctrl.viewOneUnicoobData);
unicoob_route.post("/add", unicoob_ctrl.addNewUnicoobData);
unicoob_route.put("/update/:id", unicoob_ctrl.updateUnicoobData);
unicoob_route.delete("/delete/:id", unicoob_ctrl.deleteUnicoobData);

export default unicoob_route;
