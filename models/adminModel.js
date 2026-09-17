import mongoose from "mongoose";


const schema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
},{
    timestamps: true
})

export const adminModel = mongoose.model("admin",schema)