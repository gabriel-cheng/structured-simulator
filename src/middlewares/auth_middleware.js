import jwt from "jsonwebtoken";

function checkAuth(req, res, next) {
    const auth_header = req.headers["authorization"];
    const token = auth_header && auth_header.split(" ")[1];
    const secret = process.env.JWT_SECRET || "defaultSecret";

    if (!token) {
        return res.status(401).json({
            "response": "Access denied!",
            "status_code": 401
        });
    }

    try {
        jwt.verify(token, secret);

        next();
    } catch (error) {
        console.log({ error });

        return res.status(401).json({
            "response": "Authentication expired, please connect again!",
            "status_code": 401
        });
    }
}

export default checkAuth;
