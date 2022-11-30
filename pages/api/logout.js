import { verify } from "jsonwebtoken";
import { serialize } from "Cookie";

export default function logout(req, res) {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ error: "no token" });
    }

    try {
        verify(token, "hard_secret");
        const serializedToken = serialize("token", null, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "strict",
            maxAge: 0,
        });
        res.setHeader("Set-Cookie", serializedToken);
        res.status(200).json({ logout: true });
    } catch (error) {
        res.status(401).json("error");
    }
}
