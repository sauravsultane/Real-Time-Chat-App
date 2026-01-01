import {StreamChat} from "stream-chat";
import "dotenv/config"

const apiKey = process.env.STREAM_API
const apiSecret=process.env.STREAM_SECRET

if(!apiKey||!apiSecret){
    console.error("Stream API or Secret is missing")
}

const streamClient = StreamChat.getInstance(apiKey,apiSecret);


export const upsertStreamUser = async (userData)=>{
    try {
        await streamClient.upsertUsers([userData]);
        return userData
    } catch (error) {
        console.error("Error because of stram user creation",error)
    }
}


export const generateStreamToken = {}; 