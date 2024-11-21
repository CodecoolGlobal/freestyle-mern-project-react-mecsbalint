import {Schema, model} from "mongoose";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://tothkrisz2000:47HjQRnKRKU2pUI1@myfirstcluster.cgzdp.mongodb.net/");

const activeUserSchema = new Schema({
    userData: {type: Schema.Types.ObjectId, ref: "User", required: true},
});

export default model("ActiveUser", activeUserSchema);
