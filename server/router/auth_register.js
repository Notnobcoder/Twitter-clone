import express from "express";
import { upload } from "../middleware/MulterConfig.js";
import { Register } from "../controller/auth_controller.js";

export const AuthRegister = express.Router();

AuthRegister.post("/register", upload.single("picture"), Register);
