import { DataTypes } from "sequelize";
import sequelize from "../../config/database_conf.js";

const Recon_adm = sequelize.define(
    "Recon_adm",
    {
        "recon_data_id": {
            "type": DataTypes.INTEGER,
            "autoIncrement": true,
            "primaryKey": true
        },
        "recon_group_code": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo código do grupo não pode ser vazio!"
                }
            }
        },
        "recon_rate": {
            "type": DataTypes.FLOAT,
            "allowNull": false,
            "validate": {
                "notEmpty": {
                    "msg": "O campo taxa de administração não pode ser vazio!"
                }
            }
        },
        "recon_reserve_fund": {
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

export default Recon_adm;
