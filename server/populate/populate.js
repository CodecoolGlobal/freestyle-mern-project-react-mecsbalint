
import dotenv from "dotenv";
dotenv.config();
const mongoUrl = process.env.MONGO_URL;

import mongoose from "mongoose";
import cars_db from "./cars.json" assert { type: "json" };
import CarModel from "../model/Car.js";


if (!mongoUrl) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1);
}


const populateCars = async () => {
    await CarModel.deleteMany({});

    const cars = cars_db.map((car) => ({
        brand: car.brand,
        model: car.model,
        acceleration: car.acceleration,
        topSpeed: car.topSpeed,
        cylinders: car.cylinders,
        consumption: car.consumption,
        weight: car.weight,
        horsepower: car.horsepower,
        year: car.year,
        img_url: car.img_url,
    }));

    await CarModel.create(...cars);
    console.log("Cars created");
};

const main = async () => {
    await mongoose.connect(mongoUrl);
  
    await populateCars();
  
    await mongoose.disconnect();
  };

  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
