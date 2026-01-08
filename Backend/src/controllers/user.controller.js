import FriendRequest from "../models/FriendRequest";

export async function getRecommendedUsers(req,res) {
    try {
        const currentUserId = req.user.id;
        const currentUser = req.user;

        const recommendedUser = await User.find({
            $and:[
                {_id:{$ne:currentUserId}}, // exclude current user from list (ne is not eqal to)
                {$id:{$nin:currentUser.friends}}, // exclude all the friend already of the user only for new suggestion
                {isOnboarded:true},

            ]
        })
        res.status(200).json({sucess:true,recommendedUser})
    } catch (error) {
        console.log("Error in get recommended user", error.message)
        res.status(500).json("Internal Server Error")
    }
}
export async function getMyFriends(req,res) {
    
}

export async function sendFrindRequest(req,res){
    try {
        const myId  = req.user.id;
        const {id:recipientId} = req.params;

        //privent sending request to yourself
        if(myId == recipientId){
            return res.status(400).json({message:"you cant send message to yourself"})
        }

        const recipient = await User.findById(recipientId)
        if(!recipient){
            return res.send(400).json({message:"Recipent not found"})
        }
        //check if user is already a friend
        if(recipient.friends.includes(myId)){
            return res.send(400).json({message:"You are already friend"})
        }

        // check request already exist

                    
                    
        const existingRequest = await FriendRequest.findOne({
            $or:[
                {sender:myId,recipient:recipientId},
                {sender:recipientId,recipient:myId}
            ],

        })

        if(existingRequest){
            return res.status(400).json({message:"Request already existed between you and this user"})
        }

        const friendRequest = await FriendRequest.create({
            sender:myId,
            recipient:recipientId,
        })

        res.status(201).json({messgae:" Request Send sucessful",friendRequest})
    } catch (error) {
        console.log("Error is in sending request",error.message);
        res.status(500).json({message:"Internal serer error"})
    }
}