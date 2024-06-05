import { DataTypes } from "sequelize";
import sequelize from "../../config/database_conf.js";

const Gazin_adm = sequelize.define(
    "Gazin_adm",
    {
        "gazin_id": {
            "type": DataTypes.INTEGER,
            "autoIncrement": true,
            "primaryKey": true
        },
        "gazin_group_code": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo código do grupo não pode ser vazio!"
                }
            }
        },
        "gazin_rate": {
            "type": DataTypes.FLOAT,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo taxa de administração não pode ser vazio!"
                }
            }
        },
        "gazin_reserve_fund": {
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

export default Gazin_adm;
