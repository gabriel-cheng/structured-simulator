import { DataTypes } from "sequelize";
import sequelize from "../../config/database_conf.js";

const Cnp_adm = sequelize.define(
    "Cnp_adm",
    {
        "cnp_data_id": {
            "type": DataTypes.INTEGER,
            "autoIncrement": true,
            "primaryKey": true
        },
        "cnp_group_code": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo código do grupo não pode ser vazio!"
                }
            }
        },
        "cnp_rate": {
            "type": DataTypes.FLOAT,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo taxa de administração não pode ser vazio!"
                }
            }
        },
        "cnp_reserve_fund": {
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

export default Cnp_adm;
