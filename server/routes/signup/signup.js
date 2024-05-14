import { Router } from "express";
import User from "../../models/users.js";
const router = Router();

router.post("/", async (req, res) => {
	const user = new User(req.body.username, req.body.password);

	await user.save();

	if (req.body.length != 0) {
		res.sendStatus(200);
	} else {
		res.status(400).json({ message: "Invalid data" });
	}
});

export default router;