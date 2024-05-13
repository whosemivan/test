import {
    Router
} from "express";
const router = Router();

router.post("/", (req, res) => {
    const {
        master_name,
        time
    } = req.body;


    if (!master_name || !time) {
        return res.status(400).json({error: "err"});
    }

    res.json({message: "success"});
});

export default router;