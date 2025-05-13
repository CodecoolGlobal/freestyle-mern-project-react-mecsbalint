import {Schema, model} from "mongoose";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config({path:".env"});
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);

const activeUserSchema = new Schema({
    userData: {type: Schema.Types.ObjectId, ref: "User", required: true},
});

export default model("ActiveUser", activeUserSchema);
