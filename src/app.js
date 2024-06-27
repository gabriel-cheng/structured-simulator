import express from "express";
import sequelize from "./config/database_conf.js";
import routes from "./router/index_route.js";
import index_model from "./models/index_model.js";
import pkg from "body-parser";
import { create } from "express-handlebars";
import cookieParser from "cookie-parser";
import CacheStorage from "./services/CacheStorage_sv.js";
import checkAllowedAdmins from "./middlewares/allowed_admins_middleware.js"
import checkIsAdmin from "./middlewares/admin_middleware.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cacheStorage = new CacheStorage();

try {
    sequelize.sync({ force: false })
    .then(console.log("Connection has been established successfully."));
} catch(error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();

app.use(pkg.urlencoded({extended: false}));
app.use(pkg.json());

app.use(cookieParser());

app.use(cors({
    "credentials": true
}));

const handlebars = create({
    "defaultLayout": "main",
    "extname": ".handlebars",
    "helpers": {
        "eq": (a, b) => a == b,
        "isAdmin": () => true
    }
});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'views/'));

app.use(express.static('public'));
app.use(express.json());

app.use("/", routes.views_route);
app.use("/user", routes.user_route);
app.use("/simulator", routes.simulator_route);
app.use("/adm", checkIsAdmin, routes.adm_route);

export default app;
