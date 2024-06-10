import express from "express";
import sequelize from "./config/database_conf.js";
import routes from "./router/index_route.js";
import index_model from "./models/index_model.js";
import pkg from "body-parser";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
    sequelize.sync({ force: false })
    .then(console.log("Connection has been established successfully."));
} catch(error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();

app.use(pkg.urlencoded({extended: false}));
app.use(pkg.json());

app.engine("handlebars", engine({defaultLayout: 'main', extname: '.handlebars'}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'views/'));

app.use(express.static('public'));
app.use(express.json());

app.use("/", routes.home_route);
app.use("/adm", routes.adm_route);
app.use("/user", routes.user_route);
app.use("/simulator", routes.simulator_route);

export default app;
