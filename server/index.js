import express from "express";
import cors from "cors";

import loginRouter from "./routes/login/login.js";
import homeRouter from "./routes/home/home.js";
import requestsRouter from "./routes/requests/requests.js";
import signupRouter from "./routes/signup/signup.js";

const app = express();
const PORT = 3001;

app.use(express.json({ extended: true }));
app.use(cors({
    origin: "*",
    credentials: true,
}));

app.use("/", homeRouter);
app.use("/login", loginRouter);
app.use("/add", requestsRouter);
app.use("/auth", signupRouter);

app.listen(PORT, () => {
    console.log('Server is running');
});
