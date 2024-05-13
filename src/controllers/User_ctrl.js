import User from "../models/user_model.js";

class UserCtrl {
    async viewAllUsers(req, res) {
        try {
            const all_users = await User.findAll();

            return res.json({
                "response": all_users,
                "status_code": 200
            });
        } catch(error) {
            console.log({error});

            return res.json({
                "response": {"message": "Internal server error!", error},
                "status_code": 500
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

            return res.json({
                "response": new_user,
                "status_code": 201
            });
        } catch(error) {
            console.log({error});

            return res.json({
                "response": {"message": "Internal server error!", error},
                "status_code": 500
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

            return res.json({
                "response": user,
                "status_code": 200
            });
        } catch(error) {
            return res.json({
                "response": {"message": "Internal server error!", error},
                "status_code": 500
            });
        }
    }
    async deleteUser(req, res) {
        const { user_id } = req.params;

        try {
            await User.destroy({
                "where": { user_id }
            });

            return res.json({
                "response": "User deleted successfuly!",
                "status_code": 200
            });
        } catch(error) {
            return res.json({
                "response": {"message": "Internal server error!", error},
                "status_code": 500
            });
        }
    }
}

export default UserCtrl;
