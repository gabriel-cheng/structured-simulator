import ItauCtrl from "../../controllers/Adms_ctrl/Itau_ctrl.js";
import { Router } from "express";
const itau_ctrl = new ItauCtrl();
const itau_route = Router();

itau_route.get("/", itau_ctrl.viewAllItauData);
itau_route.get("/:id", itau_ctrl.viewOneItauData);
itau_route.post("/add", itau_ctrl.addNewItauData);
itau_route.put("/update/:id", itau_ctrl.updateItauData);
itau_route.delete("/delete/:id", itau_ctrl.deleteItauData);

export default itau_route;
