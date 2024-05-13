import express from "express";
import cors from "cors";
import connection from "./database.js";

import loginRouter from "./routes/login/login.js";
import homeRouter from "./routes/home/home.js";
import requestsRouter from "./routes/requests/requests.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({
    origin: "*",
}));

app.use("/", homeRouter);
app.use("/login", loginRouter);
app.use("/add", requestsRouter);

app.listen(PORT, () => {
    console.log('Server is running');
});
