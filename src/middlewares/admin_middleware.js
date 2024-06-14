import jwt from "jsonwebtoken";

function checkIsAdmin(req, res, next) {
    const token = req.cookies.authorization;
    const secret = process.env.JWT_SECRET || "defaultSecret";

    try {
        const token_decoded = jwt.verify(token, secret);
        const user_is_admin = token_decoded.user_is_admin;

        if(!user_is_admin) {
            return res.status(401).json({
                "response": "Access denied - Only administrators can access this content!",
                "status_code": 401
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

export default checkIsAdmin;
