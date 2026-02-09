import mongoose from "mongoose";

const converstationSchema = new mongoose.Schema({
    participants:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    messages:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
},{timeStamps:true})

export default mongoose.model("Converstation", converstationSchema)