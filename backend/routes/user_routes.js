import express from "express";
import { login, register } from "../controllers/user_controller.js";
import { check_login, check_register } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register",check_register, register);
router.post("/login",check_login, login);

export default router;