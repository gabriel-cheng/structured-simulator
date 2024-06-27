import index_adm_route from "./Adm_routes/index_adm_route.js";
import { Router } from "express";
const index_adm = Router();

index_adm.use("/bradesco", index_adm_route.bradesco_route);

export default index_adm;
