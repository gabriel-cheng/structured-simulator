import jwt from "jsonwebtoken";

function checkIsAdmin(req, res, next) {
    const token = req.cookies.authorization;
    const secret = process.env.JWT_SECRET || "defaultSecret";

    try {
        const token_decoded = jwt.verify(token, secret);
        const user_is_admin = token_decoded.user_is_admin;

        if(!user_is_admin) {
            return res.status(401).json({
                "response": "Acesso negado - Você precisa ser um administrador para continuar!",
                "status_code": 401
            });
        }

        next();
    } catch (error) {
        return res.status(400).json({
            "response": "Você precisa estar logado para continuar!",
            "status_code": 400
        });
    }
}

export default checkIsAdmin;
