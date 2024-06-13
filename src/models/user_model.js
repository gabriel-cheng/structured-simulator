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
            "allowNull": false,
            "validate": {
                "len": {
                    "args": [2, 20],
                    "msg": "O campo nome deve estar entre 2 e 20 caracteres!"
                },
                "notEmpty": {
                    "msg": "O campo nome não pode ser vazio!"
                }
            }
        },
        "user_last_name": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "len": {
                    "args": [2, 30],
                    "msg": "O campo sobrenome deve estar entre 2 e 30 caracteres!"
                },
                "notEmpty": {
                    "msg": "O campo sobrenome não pode ser vazio!"
                }
            }
        },
        "user_email": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "len": {
                    "args": [5, 60],
                    "msg": "O campo e-mail deve estar entre 5 e 60 caracteres!"
                },
                "notEmpty": {
                    "msg": "O campo e-mail não pode ser vazio!"
                },
                "isEmail": {
                    "msg": "Este campo precisa ser um e-mail válido!"
                }
            }
        },
        "user_phone": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "len": {
                    "args": [11, 11],
                    "msg": "O campo telefone deve possuir exatos 11 caracteres!"
                },
                "notEmpty": {
                    "msg": "O campo telefone não pode ser vazio!"
                }
            }
        },
        "user_cpf": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "len": {
                    "args": [11, 11],
                    "msg": "O campo cpf deve possuir exatos 11 caracteres!"
                },
                "notEmpty": {
                    "msg": "O campo cpf não pode ser vazio!"
                }
            }
        },
        "user_password": {
            "type": DataTypes.STRING,
            "allowNull": false,
            "validate": {
                "len": {
                    "args": [5],
                    "msg": "O campo senha deve possuir no mínimo 5 caracteres!"
                },
                "notEmpty": {
                    "msg": "O campo senha não pode ser vazio!"
                },
                "notIn": {
                    "args": ["12345", "123456", "1234567", "12345678", "123456789"],
                    "msg": "Você não pode informar uma sequência numérica como senha!"
                }
            }
        },
        "user_modules_allowed": {
            "type": DataTypes.ARRAY(DataTypes.STRING),
            "allowNull": false,
            "validade": {
                "len": {
                    "args": [1],
                    "msg": "O usuário deve ter acesso a pelo menos 1 módulo!"
                },
                "notEmpty": {
                    "msg": "O campo de módulos não pode ser vazio!"
                },
                "isIn": {
                    "args": [
                        "bradesco", "cnp", "embracon",
                        "gazin", "itau", "magalu",
                        "recon", "santander", "unicoob"
                    ],
                    "msg": "Informe um módulo de acesso válido!"
                }
            }
        },
        "user_is_admin": {
            "type": DataTypes.BOOLEAN,
            "allowNull": false,
            "defaultValue": false,
        }
    }
);

export default User;
