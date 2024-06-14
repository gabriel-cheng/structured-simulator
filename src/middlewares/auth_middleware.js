import jwt from "jsonwebtoken";

function checkAuth(req, res, next) {
    const token = req.cookies.authorization;
    const secret = process.env.JWT_SECRET || "defaultSecret";

    if (!token) {
        return res.status(401).redirect("/user/auth/login/view");
    }

    try {
        jwt.verify(token, secret);

        return next();
    } catch (error) {
        console.log({ error });

        return res.status(401).redirect("/user/auth/login/view");
    }
}

export default checkAuth;
