import { text } from "express";
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ''
    },
    imageUrl :{
        type: String,
        default: '' 
    },
    videoUrl :{
        type: String,
        default: ''
    },
    seen: {
        type: Boolean,
        default: false
    },
},{timestamps: true});

const conversationSchema = new mongoose.Schema({
    sender : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    receiver : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]
},{timestamps: true});


export const Message = mongoose.model('Message', messageSchema);

export const Conversation = mongoose.model('Conversation', conversationSchema); 