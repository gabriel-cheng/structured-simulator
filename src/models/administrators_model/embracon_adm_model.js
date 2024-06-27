import { DataTypes } from "sequelize";
import sequelize from "../../config/database_conf.js";

const Embracon_adm = sequelize.define(
    "Embracon_adm",
    {
        "embracon_data_id": {
            "type": DataTypes.INTEGER,
            "autoIncrement": true,
            "primaryKey": true
        },
        "embracon_group_code": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo código do grupo não pode ser vazio!"
                }
            }
        },
        "embracon_rate": {
            "type": DataTypes.FLOAT,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo taxa de administração não pode ser vazio!"
                }
            }
        },
        "embracon_reserve_fund": {
            "type": DataTypes.FLOAT,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo fundo de reserva não pode ser vazio!"
                }
            }
        }
    }
);

export default Embracon_adm;
