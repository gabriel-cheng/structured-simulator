import { DataTypes } from "sequelize";
import sequelize from "../config/database_conf.js";
import User from "./user_model.js";

const User_address = sequelize.define(
    "User_address",
    {
        "user_address_id": {
            "type": DataTypes.INTEGER,
            "autoIncrement": true,
            "primaryKey": true
        },
        "user_address_number": {
            "type": DataTypes.INTEGER,
            "allowNull": false
        },
        "user_address_road": {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        "user_address_neighborhood": {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        "user_address_city": {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        "user_address_state": {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        "user_address_zip_code": {
            "type": DataTypes.INTEGER,
            "allowNull": false
        },
        "user_foreign_key": {
            "type": DataTypes.INTEGER,
            "allowNull": false
        }
    }
);

User_address.belongsTo(User, { "foreignKey": "user_foreign_key", "allowNull": false });

export default User_address;
