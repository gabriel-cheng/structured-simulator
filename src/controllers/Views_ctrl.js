import User from "../models/user_model.js";
import jwt from "jsonwebtoken";

class ViewsCtrl {
    async homeView(req, res)  {
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
    userLoginView(req, res) {
        return res.render("user_views/user_login");
    }
    registerNewUserView(req, res) {
        const view_variables = {
            "title": "Criar cadastro"
        }

        return res.render("user_views/user_register", view_variables);
    }
    simulatorView(req, res) {
        return res.render("simulator_view/simulator");
    }
}

export default ViewsCtrl;
