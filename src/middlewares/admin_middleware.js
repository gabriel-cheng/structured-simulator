import jwt from "jsonwebtoken";

function checkIsAdmin(req, res, next) {
    const auth_header = req.headers["cookie"];
    const token = auth_header && auth_header.split("=")[1];
    const secret = process.env.JWT_SECRET || "defaultSecret";

    try {
        const token_decoded = jwt.verify(token, secret);
        const user_is_admin = token_decoded.user_is_admin;

        if(!user_is_admin) {
            return res.status(401).json({
                "response": "Access denied - You need to be an administrator to access the content!",
                "status_code": 401
            });
        }

        next();
    } catch (error) {
        console.log({ error });
    }
}

export default checkIsAdmin;
