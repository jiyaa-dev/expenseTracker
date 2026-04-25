import { DBConnect } from "./src/databases/db.js";
import "./src/utils/dotenv.js";
import express from "express";
import authRouter from "./src/routers/auth.router.js";
import { registrationValidationSchema } from "./src/validations/auth.validation.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);

app.use((err, req, res, next) => {
    if (err) {
        res.status(err.errorCode).json({
            success: false,
            message: err.message,
        });
    }
});
const startServer = async () => {
    try {
        await DBConnect();
        app.listen(8000, "0.0.0.0", () => {
            console.log("Server Started!");
        });
    } catch (err) {
        console.log(err);
    }
};
startServer();
