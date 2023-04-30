import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import "./config/MongoConnetion.js";
import TestingRoute from "./router/Testing_router.js";
import { AuthRegister } from "./router/auth_register.js";

// configrations
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 8001;
export const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Routes
app.use("/api/testing", TestingRoute);
app.use("/api/auth", AuthRegister);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
