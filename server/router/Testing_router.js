import express from "express";
import { TestingController } from "../controller/TestingController.js";

const TestingRoute = express.Router();

TestingRoute.get("/", TestingController);

export default TestingRoute;
