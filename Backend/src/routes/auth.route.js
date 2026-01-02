import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {login, logout, onboard, signup} from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/login",login);
router.post("/logout",logout);
router.post("/signup", signup);

router.post("/onboarding",protectedRoute,onboard)


export default router;