import User from "../models/user_model.js";

class UserCtrl {
    async viewAll(req, res) {
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
    createNew(req, res) {
        return res.json({
            "response": "Hello, create new!",
            "status_code": 200
        });
    }
}

export default UserCtrl;
