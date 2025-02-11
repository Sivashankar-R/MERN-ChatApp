import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email']
    },
    password: {
        type: String,
        required: [true, 'Please provide your password']
    },
    profile_pic: {
        type: String,
        default: ''
    },
},{timestamps: true});

export const User = mongoose.model('User', userSchema);