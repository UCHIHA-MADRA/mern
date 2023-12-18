import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is Required"]
    },
    description:{
        type:String,
        required:[true,"Description is Required"]
    },
    status:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true


})

const model = mongoose.model("task" , Schema)

export default model