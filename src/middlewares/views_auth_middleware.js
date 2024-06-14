import jwt from "jsonwebtoken";

function checkViewAuth(req, res, next) {
    const token = req.cookies.authorization;
    const secret = process.env.JWT_SECRET || "defaultSecret";

    if (!token) {
        return res.status(401).redirect("/view/user/login");
    }

    try {
        jwt.verify(token, secret);

        return next();
    } catch (error) {
        return res.status(401).redirect("/view/user/login");
    }
}

export default checkViewAuth;
