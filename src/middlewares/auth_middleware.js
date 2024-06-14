import jwt from "jsonwebtoken";

function checkAuth(req, res, next) {
    const auth_header = req.headers["cookie"];
    const token = auth_header && auth_header.split("=")[1];
    const secret = process.env.JWT_SECRET || "defaultSecret";

    if (!token) {
        return res.status(401).redirect("/user/auth/login");
    }

    try {
        jwt.verify(token, secret);

        return next();
    } catch (error) {
        console.log({ error });

        return res.status(401).redirect("/user/auth/login");
    }
}

export default checkAuth;
