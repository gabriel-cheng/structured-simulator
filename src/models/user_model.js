import { DataTypes } from "sequelize";
import sequelize from "../config/database_conf.js";

const User = sequelize.define(
    "User",
    {
        "user_id": {
            "type": DataTypes.INTEGER,
            "autoIncrement": true,
            "primaryKey": true
        },
        "user_first_name": {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        "user_last_name": {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        "user_email": {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        "user_phone": {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        "user_cpf": {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        "user_password": {
            "type": DataTypes.STRING,
            "allowNull": false
        }
    }
);

export default User;
