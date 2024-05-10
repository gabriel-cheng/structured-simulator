import express from "express";
import index_route from "./router/index_route.js";
import sequelize from "./config/database_conf.js";

try {
    sequelize.sync({ force: false })
    .then(console.log("Connection has been established successfully."));
} catch(error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();

app.use(express.json());

app.use("/", index_route);

export default app;
