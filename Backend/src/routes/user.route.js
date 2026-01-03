import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { getRecommendedUsers,getMyFriends } from "../controllers/user.controller.js";
const router = express.Router();

// Use to apply middleware layer to all these routes
router.use(protectedRoute)

router.get("/",getRecommendedUsers);
router.get("/friends", getMyFriends);


export default router;