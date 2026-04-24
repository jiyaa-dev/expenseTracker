import { DBConnect } from "./src/databases/db.js";
import "./src/utils/dotenv.js";
import express from "express";
const app = express();

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