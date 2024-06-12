import User from "../models/user_model.js";
import User_address from "../models/user_address_model.js";
import jwt from "jsonwebtoken";
import { compare, genSalt, hash } from "bcrypt";

class UserCtrl {
    async userLoginRequest(req, res) {
        const { user_email, user_password } = req.body;
        const user_finded = await User.findOne({ "where": { "user_email": user_email } });

        if(!user_finded) {
            return res.status(404).json({
                "response": "User not found!",
                "status_code": 404
            });
        }

        const check_password = await compare(user_password, user_finded.user_password);

        if(!check_password) {
            return res.status(400).json({
                "response": "Wrong password!",
                "status_code": 400
            });
        }

        try {
            const secret = process.env.JWT_SECRET || "defaultSecret";

            const token = jwt.sign({
                "user_id": user_finded.user_id,
                "user_email": user_finded.user_email
            }, secret, { "expiresIn": "3h" });

            res.cookie("authorization", token, {
                "httpOnly": true,
                "secure": false
            });

            return res.status(200).json({
                "response": "Authentication successful!",
                "status_code": 200
            });
        } catch(error) {
            console.log({ error });
        }
    }
    async userLoginView(req, res) {
        return res.render("user_views/user_login");
    }
    async viewAllUsers(req, res) {
        try {
            const users = await User.findAll();

            return res.status(200).json({
                "response": {
                    users
                },
                "status_code": 200
            });
        } catch(error) {
            console.log({error});

            return res.status(400).json({
                "response": {"message": "Bad request", error},
                "status_code": 400
            });
        }
    }
    async viewOneUser(req, res) {
        const { user_id } = req.params;

        try {
            const user = await User.findOne({
                "where": { user_id },
            });

            return res.status(200).json({
                "response": {
                    user
                },
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": {"message": "Bad request", error},
                "status_code": 400
            });
        }
    }
    async registerNewUser(req, res) {
        const data = req.body;
        const user_phone = data.user_phone.replace(/[^0-9]/g, "");
        const user_cpf = data.user_cpf.replace(/[^0-9]/g, "");

        const user_password = data.user_password;
        const b_salt = await genSalt(12);
        const b_pass_hash = await hash(user_password, b_salt);

        const new_user = {
            "user_first_name": data.user_first_name,
            "user_last_name": data.user_last_name,
            "user_email": data.user_email,
            "user_phone": user_phone,
            "user_cpf": user_cpf,
            "user_password": b_pass_hash,
            "user_modules_allowed": data.user_modules_allowed
        };

        try {
            const user = await User.create(new_user);

            res.render("user_views/register_congratulations", {dados: JSON.stringify(user)});
        } catch(error) {
            console.log({error});

            return res.status(400).json({
                "response": {"message": "Bad request", error},
                "status_code": 400
            });
        }
    }
    async registerNewUserView(req, res) {
        const view_variables = {
            "title": "Criar cadastro"
        }

        return res.render("user_views/user_register", view_variables);
    }
    async updateUser(req, res) {
        const { user_id } = req.params;
        const data = req.body;

        const user_password = data.user_password;
        const b_salt = await genSalt(12);
        const b_pass_hash = await hash(user_password, b_salt);

        const user_updated = {
            "user_first_name": data.user_first_name,
            "user_last_name": data.user_last_name,
            "user_email": data.user_email,
            "user_phone": data.user_phone,
            "user_cpf": data.user_cpf,
            "user_password": b_pass_hash,
            "user_modules_allowed": data.user_modules_allowed
        }

        try {
            const user = await User.findOne({
                "where": { user_id },
            });

            await user.set(user_updated);
            await user.save();

            return res.status(200).json({
                "response": {
                    user
                },
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": {"message": "Bad request", error},
                "status_code": 400
            });
        }
    }
    async deleteUser(req, res) {
        const { user_id } = req.params;

        try {
            await User.destroy({
                "where": { user_id }
            });

            return res.status(200).json({
                "response": "User deleted successfuly!",
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": {"message": "Bad request", error},
                "status_code": 400
            });
        }
    }
    async viewUserAddress(req, res) {
        const { user_foreign_key } = req.params;

        try {
            const address = await User_address.findAll({
                "where": { user_foreign_key }
            });

            return res.status(200).json({
                "response": {
                    address
                },
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": {"message": "Bad request", error},
                "status_code": 400
            });
        }
    }
    async createUserAddress(req, res) {
        const { user_foreign_key } = req.params;
        const {
            user_address_number,
            user_address_street,
            user_address_neighborhood,
            user_address_city,
            user_address_state,
            user_address_zip_code,
        } = req.body;

        const new_address_model = {
            user_address_number,
            user_address_street,
            user_address_neighborhood,
            user_address_city,
            user_address_state,
            user_address_zip_code,
            user_foreign_key: user_id
        }

        try {
            const user = await User.findByPk(user_foreign_key);

            if(!user) {
                return res.status(401).json({
                    "response": {"message": "Bad request", "error": "User not found!"},
                    "status_code": 400
                });
            }

            const address = await User_address.create(new_address_model);

            return res.status(201).json({
                "response": {
                    address
                },
                "status_code": 201
            });
        } catch(error) {
            return res.status(400).json({
                "response": {"message": "Bad request", error},
                "status_code": 400
            });
        }
    }
    async updateUserAddress(req, res) {
        const { user_foreign_key } = req.params;
        const {
            user_address_number,
            user_address_street,
            user_address_neighborhood,
            user_address_city,
            user_address_state,
            user_address_zip_code
        } = req.body;

        const address_updated = {
            user_address_number,
            user_address_street,
            user_address_neighborhood,
            user_address_city,
            user_address_state,
            user_address_zip_code
        }

        try {
            const address = await User_address.findOne({
                "where": { user_foreign_key }
            });

            await address.set(address_updated);
            await address.save();

            return res.status(200).json({
                "response": {
                    address
                },
                "status_code": 200
            });
        } catch(error) {
            return res.status(400).json({
                "response": {"message": "Bad request", error},
                "status_code": 400
            });
        }

    }
}

export default UserCtrl;
