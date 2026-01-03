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