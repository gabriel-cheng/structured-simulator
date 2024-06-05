import { DataTypes } from "sequelize";
import sequelize from "../../config/database_conf.js";

const Unicoob_adm = sequelize.define(
    "Unicoob_adm",
    {
        "unicoob_id": {
            "type": DataTypes.INTEGER,
            "autoIncrement": true,
            "primaryKey": true
        },
        "unicoob_group_code": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo código do grupo não pode ser vazio!"
                }
            }
        },
        "unicoob_rate": {
            "type": DataTypes.FLOAT,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo taxa de administração não pode ser vazio!"
                }
            }
        },
        "unicoob_reserve_fund": {
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

export default Unicoob_adm;
