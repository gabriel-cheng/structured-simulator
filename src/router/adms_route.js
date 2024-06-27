import index_adm_route from "./Adm_routes/index_adm_route.js";
import { Router } from "express";
const index_adm = Router();

index_adm.use("/bradesco", index_adm_route.bradesco_route);
index_adm.use("/cnp", index_adm_route.cnp_route);
index_adm.use("/embracon", index_adm_route.embracon_route);
index_adm.use("/gazin", index_adm_route.gazin_route);
index_adm.use("/itau", index_adm_route.itau_route);
index_adm.use("/magalu", index_adm_route.magalu_route);
index_adm.use("/recon", index_adm_route.recon_route);
index_adm.use("/santander", index_adm_route.santander_route);
index_adm.use("/unicoob", index_adm_route.unicoob_route);

export default index_adm;
