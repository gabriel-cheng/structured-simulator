import jwt from "jsonwebtoken";

function checkAllowedAdmins(req, res, next) {
    const token = req.cookies.authorization;
    const secret = process.env.JWT_SECRET || "defaultSecret";
    const { adm } = req.params;

    try {
        const token_decoded = jwt.verify(token, secret);
        const modules_allowed = token_decoded.user_modules_allowed;

        if(!modules_allowed.includes(adm)) {
            return res.status(404).json({
                "response": "Administradora não inclusa ou não existe!",
                "status_code": 404
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            "response": "Internal server error!",
            "status_code": 500
        });
    }
}

export default checkAllowedAdmins;
