import { Schema, model } from "mongoose";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://tothkrisz2000:47HjQRnKRKU2pUI1@myfirstcluster.cgzdp.mongodb.net/")

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
