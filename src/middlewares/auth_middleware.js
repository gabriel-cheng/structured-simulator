import jwt from "jsonwebtoken";

function checkAuth(req, res, next) {
    const token = req.cookies.authorization;
    const secret = process.env.JWT_SECRET || "defaultSecret";

    if (!token) {
        return res.status(401).json({
            "response": "You are not authorized to access this content!",
            "status_code": 401
        });
    }

    try {
        jwt.verify(token, secret);

        return next();
    } catch (error) {
        console.log({ error });

        return res.status(401).json({
            "response": "Invalid token",
            "status_code": 401
        });
    }
}

export default checkAuth;
