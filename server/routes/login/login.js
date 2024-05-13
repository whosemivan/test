import {
    Router
} from "express";
const router = Router();

router.post("/", (req, res) => {
    const {
        login,
        password
    } = req.body;

    console.log({login, password});

    if (!login || !password) {
        return res.status(400).json({error: "Login or password is empty"});
    }

    res.json({message: "User is logged in"});
});

export default router;