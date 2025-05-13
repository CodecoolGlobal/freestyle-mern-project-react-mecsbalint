import { Schema, model } from "mongoose";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config({path:".env"});
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);

const userSchema = new Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    statistics: {
        win: {type: Number, default: 0},
        loose: {type: Number, default: 0},
    }
});

export default model("User", userSchema);
