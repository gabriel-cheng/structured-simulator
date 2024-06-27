import User from "../models/user_model.js";
import jwt from "jsonwebtoken";
import CacheStorage from "../services/CacheStorage_sv.js";

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
                "modules_allowed": user_modules_allowed,
                "title": "Simulador"
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
        return res.render("user_views/user_login", {
            "title": "Efetuar login"
        });
    }
    registerNewUserView(req, res) {
        return res.render("user_views/user_register", {
            "title": "Cadastrar novo usuário"
        });
    }
    simulatorView(req, res) {
        const { adm } = req.params;

        return res.render("simulator_views/simulator", { "adm": adm });
    }
    allUsersView(req, res) {
        return res.render("admin_views/all_users", {
            "title": "Visualize todos os usuários"
        });
    }
    adminsConfigView(req, res) {
        return res.render("admin_views/admin_config");
    }
}

export default ViewsCtrl;
