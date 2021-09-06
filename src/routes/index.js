import express from "express";
import { registerController } from "../controller";
import cors from "cors";
const router = express.Router();

router.post("/register", cors(), registerController.register);

export default router;
