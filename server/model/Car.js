import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://tothkrisz2000:47HjQRnKRKU2pUI1@myfirstcluster.cgzdp.mongodb.net/");

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