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
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo numero não pode ser vazio!"
                }
            }
        },
        "user_address_street": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo rua não pode ser vazio!"
                },
                "len": {
                    "args": [2, 60],
                    "msg": "O campo rua precisa estar entre 2 e 60 caracteres!"
                }
            }
        },
        "user_address_neighborhood": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo bairro não pode ser vazio!"
                },
                "len": {
                    "args": [2, 20],
                    "msg": "O campo bairro precisa estar entre 4 e 20 caracteres!"
                }
            }
        },
        "user_address_city": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo cidade não pode ser vazio!"
                },
                "len": {
                    "args": [3, 120],
                    "msg": "O campo cidade precisa estar entre 3 e 120 caracteres!"
                }
            }
        },
        "user_address_state": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo estado não pode ser vazio!"
                },
                "len": {
                    "args": [4, 20],
                    "msg": "O campo estado precisa estar entre 4 e 20 caracteres!"
                }
            }
        },
        "user_address_zip_code": {
            "type": DataTypes.INTEGER,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo cep não pode ser vazio!"
                },
                "len": {
                    "args": [8, 8],
                    "msg": "O campo cep precisa ter exatos 8 caracteres!"
                }
            }
        },
        "user_foreign_key": {
            "type": DataTypes.INTEGER,
            "allowNull": false,
            "references": { "model": "Users", "key": "user_id" },
            "onUpdate": "CASCADE",
            "onDelete": "CASCADE"
        }
    }
);

User_address.belongsTo(User, { "foreignKey": "user_foreign_key", as: "owner", "allowNull": false });

export default User_address;
