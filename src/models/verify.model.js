import mongoose from "mongoose";
const verifySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    code: {
        type: String,
        required: true,
        trim: true,
    }
},{timestamps: true})
const Verify = mongoose.model("Verify", verifySchema);
export {Verify};