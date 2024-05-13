import express from "express";
import sequelize from "./config/database_conf.js";
import user_route from "./router/user_route.js";
import index_model from "./models/index_model.js";

try {
    sequelize.sync({ force: false })
    .then(console.log("Connection has been established successfully."));
} catch(error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();

app.use(express.json());

app.use("/user", user_route);

export default app;
