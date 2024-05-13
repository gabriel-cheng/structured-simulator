import User from "../models/user_model.js";
import User_address from "../models/user_address_model.js";

class UserCtrl {
    async viewAllUsers(req, res) {
        try {
            const all_users = await User.findAll();

            return res.status(200).json({
                "response": all_users,
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
    async createNewUser(req, res) {
        const {
            user_first_name,
            user_last_name,
            user_email,
            user_phone,
            user_cpf,
            user_password
        } = req.body;

        try {
            const new_user = await User.create({
                user_first_name,
                user_last_name,
                user_email,
                user_phone,
                user_cpf,
                user_password
            });

            return res.status(200).json({
                "response": new_user,
                "status_code": 201
            });
        } catch(error) {
            console.log({error});

            return res.status(400).json({
                "response": {"message": "Bad request", error},
                "status_code": 400
            });
        }
    }
    async updateUser(req, res) {
        const { user_id } = req.params;

        const {
            user_first_name,
            user_last_name,
            user_email,
            user_phone,
            user_cpf,
            user_password
        } = req.body;

        const user_updated = {
            user_first_name,
            user_last_name,
            user_email,
            user_phone,
            user_cpf,
            user_password
        }

        try {
            const user = await User.findOne({
                "where": { user_id }
            });

            await user.set(user_updated);
            await user.save();

            return res.status(200).json({
                "response": user,
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
    async createUserAddress(req, res) {
        const { user_id } = req.params;
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
            const user = await User.findByPk(user_id);

            if(!user) {
                return res.status(401).json({
                    "response": {"message": "Bad request", "error": "User not found!"},
                    "status_code": 400
                });
            }

            const new_address = await User_address.create(new_address_model);

            return res.status(201).json({
                "response": new_address,
                "status_code": 201
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
