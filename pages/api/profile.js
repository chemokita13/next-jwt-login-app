import { verify } from "jsonwebtoken";

export default function gertProfile(req, res) {
    try {
        const { token } = req.cookies;
        const user = verify(token, "hard_secret");
        res.json(user);
    } catch (error) {
        res.status(401).json({ error: "error description" });
    }
}
