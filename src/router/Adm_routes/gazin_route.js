import GazinCtrl from "../../controllers/Adms_ctrl/Gazin_ctrl.js";
import { Router } from "express";
const gazin_ctrl = new GazinCtrl();
const gazin_route = Router();

gazin_route.get("/", gazin_ctrl.viewAllGazinData);
gazin_route.get("/:id", gazin_ctrl.viewOneGazinData);
gazin_route.post("/add", gazin_ctrl.addNewGazinData);
gazin_route.put("/update/:id", gazin_ctrl.updateGazinData);
gazin_route.delete("/delete/:id", gazin_ctrl.deleteGazinData);

export default gazin_route;
