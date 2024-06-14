import User from "../models/user_model.js";
import jwt from "jsonwebtoken";

class HomeCtrl {
    async home(req, res)  {
        const secret = process.env.JWT_SECRET;
        const user_token = req.cookies.authorization;
        const token_decoded = jwt.verify(user_token, secret);
        const id = token_decoded.user_id;

        try {
            const user_request_content = await User.findOne({
                "where": id,
                "attributes": ["user_modules_allowed"]
            });

            const user_modules_allowed = user_request_content.dataValues.user_modules_allowed;

            return res.status(200).render("home", {
                "modules_allowed": user_modules_allowed
            });
        } catch(error) {
            console.log(error);

            return res.status(500).json({
                "response": "Internal server error",
                "status_code": 500
            });
        }
    }
}

export default HomeCtrl
