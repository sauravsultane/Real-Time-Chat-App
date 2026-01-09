import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { getRecommendedUsers,getMyFriends, sendFriendRequest, acceptFrindRequest, getFriendRequest, getOutgoingFriendReq } from "../controllers/user.controller.js";
const router = express.Router();

// Use to apply middleware layer to all these routes
router.use(protectedRoute)

router.get("/",getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id" , sendFriendRequest);
router.put("/friend-request/:id/accept" ,acceptFrindRequest);
router.get("/friend-request", getFriendRequest);
router.get("/outgoing-friend-request", getOutgoingFriendReq);



export default router;