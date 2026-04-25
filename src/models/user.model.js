import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            minLength: 2,
            maxLength: 50,
            trim: true,
            required: true,
        },
        lastName: {
            type: String,
            minLength: 1,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            minLength: 5,
            maxLength: 300,
            unique: true,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);
const User = mongoose.model("User", userSchema);
export { User };
