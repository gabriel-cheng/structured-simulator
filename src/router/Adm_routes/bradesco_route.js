import BradescoCtrl from "../../controllers/Adms_ctrl/Bradesco_ctrl.js";
import ViewsCtrl from "../../controllers/Views_ctrl.js";
import { Router } from "express";
const bradesco_ctrl = new BradescoCtrl();
const bradesco_route = Router();
const views_ctrl = new ViewsCtrl();

bradesco_route.get("/", bradesco_ctrl.viewAllBradescoData);
bradesco_route.get("/:id", bradesco_ctrl.viewOneBradescoData);
bradesco_route.post("/add", bradesco_ctrl.addNewBradescoData);
bradesco_route.put("/update/:id", bradesco_ctrl.updateBradescoData);
bradesco_route.delete("/delete/:id", bradesco_ctrl.deleteBradescoData);

export default bradesco_route;
