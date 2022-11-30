import jwt from "jsonwebtoken";
import { serialize } from "Cookie";

export default function loginHandler(req, res) {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        const token = jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // valid for 30 days
                username,
            },
            "hard_secret"
        );

        const serializedToken = serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24 * 30,
        });

        res.setHeader("Set-Cookie", serializedToken);

        res.json({ login: true });
    } else {
        res.status(401).json({ login: false });
    }
}
