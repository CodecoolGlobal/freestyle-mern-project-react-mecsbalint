import mongoose from 'mongoose';

import dotenv from "dotenv";
dotenv.config({path:".env"});
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);

const { Schema, model } = mongoose;

const carSchema = new Schema({
    brand: String,
    model: String,
    acceleration: Number,
    topSpeed: Number,
    cylinders: Number,
    consumption: Number,
    weight: Number,
    horsepower: Number,
    year: Number,
    img_url: String
});

export default model('car', carSchema);