import express from 'express';
import Car from './model/Car.js';

const app = express();
app.use(express.json());
const port = 3005;

const cars = [
    { brand: "BMW", model: "M3", acceleration: "4.1", topSpeed: "250", cylinders: 6, consumption: "8.8", weight: "1585", horsepower: 425, year: 2015 },
    { brand: "Audi", model: "A4 2.0 TFSI", acceleration: "6.1", topSpeed: "240", cylinders: 4, consumption: "7.1", weight: "1470", horsepower: 252, year: 2017 },
    { brand: "Mercedes-Benz", model: "C63 AMG", acceleration: "4.0", topSpeed: "290", cylinders: 8, consumption: "10.3", weight: "1730", horsepower: 503, year: 2018 },
    { brand: "Ford", model: "Mustang GT", acceleration: "4.3", topSpeed: "250", cylinders: 8, consumption: "12.0", weight: "1680", horsepower: 450, year: 2020 },
    { brand: "Toyota", model: "Supra", acceleration: "4.1", topSpeed: "250", cylinders: 6, consumption: "7.7", weight: "1495", horsepower: 335, year: 2021 },
    { brand: "Chevrolet", model: "Camaro SS", acceleration: "4.0", topSpeed: "270", cylinders: 8, consumption: "12.6", weight: "1690", horsepower: 455, year: 2019 },
    { brand: "Nissan", model: "GT-R", acceleration: "2.9", topSpeed: "315", cylinders: 6, consumption: "11.8", weight: "1765", horsepower: 565, year: 2020 },
    { brand: "Porsche", model: "911 Carrera", acceleration: "4.2", topSpeed: "293", cylinders: 6, consumption: "9.2", weight: "1565", horsepower: 385, year: 2019 },
    { brand: "Volkswagen", model: "Golf R", acceleration: "4.6", topSpeed: "250", cylinders: 4, consumption: "7.3", weight: "1475", horsepower: 315, year: 2022 },
    { brand: "Dodge", model: "Challenger SRT Hellcat", acceleration: "3.6", topSpeed: "320", cylinders: 8, consumption: "13.5", weight: "2018", horsepower: 717, year: 2018 },
    { brand: "Tesla", model: "Model S Plaid", acceleration: "1.99", topSpeed: "322", cylinders: 0, consumption: "0", weight: "2162", horsepower: 1020, year: 2021 },
    { brand: "BMW", model: "i8", acceleration: "4.4", topSpeed: "250", cylinders: 3, consumption: "2.1", weight: "1485", horsepower: 369, year: 2019 },
    { brand: "Audi", model: "RS7", acceleration: "3.6", topSpeed: "305", cylinders: 8, consumption: "11.4", weight: "1995", horsepower: 591, year: 2021 },
    { brand: "Mercedes-Benz", model: "E63 AMG", acceleration: "3.4", topSpeed: "300", cylinders: 8, consumption: "11.9", weight: "1945", horsepower: 603, year: 2020 },
    { brand: "Jaguar", model: "F-Type R", acceleration: "3.5", topSpeed: "299", cylinders: 8, consumption: "11.3", weight: "1745", horsepower: 575, year: 2017 },
    { brand: "Aston Martin", model: "DB11", acceleration: "3.7", topSpeed: "322", cylinders: 12, consumption: "12.4", weight: "1870", horsepower: 630, year: 2021 },
    { brand: "Ferrari", model: "488 GTB", acceleration: "3.0", topSpeed: "330", cylinders: 8, consumption: "11.4", weight: "1475", horsepower: 661, year: 2016 },
    { brand: "Lamborghini", model: "Huracan Evo", acceleration: "2.9", topSpeed: "325", cylinders: 10, consumption: "13.7", weight: "1422", horsepower: 631, year: 2022 },
    { brand: "McLaren", model: "720S", acceleration: "2.8", topSpeed: "341", cylinders: 8, consumption: "12.2", weight: "1419", horsepower: 710, year: 2019 },
    { brand: "Alfa Romeo", model: "Giulia Quadrifoglio", acceleration: "3.8", topSpeed: "307", cylinders: 6, consumption: "8.5", weight: "1585", horsepower: 505, year: 2020 },
    { brand: "Honda", model: "Civic Type R", acceleration: "5.7", topSpeed: "272", cylinders: 4, consumption: "8.4", weight: "1380", horsepower: 316, year: 2018 },
    { brand: "Ford", model: "Focus RS", acceleration: "4.7", topSpeed: "266", cylinders: 4, consumption: "10.3", weight: "1519", horsepower: 350, year: 2016 },
    { brand: "Mazda", model: "MX-5 Miata", acceleration: "6.5", topSpeed: "214", cylinders: 4, consumption: "7.0", weight: "1135", horsepower: 181, year: 2021 },
    { brand: "Subaru", model: "WRX STI", acceleration: "4.9", topSpeed: "255", cylinders: 4, consumption: "10.6", weight: "1537", horsepower: 310, year: 2015 },
    { brand: "Volvo", model: "S60 Polestar", acceleration: "4.7", topSpeed: "250", cylinders: 4, consumption: "7.8", weight: "1754", horsepower: 367, year: 2020 },
    { brand: "Lexus", model: "RC F", acceleration: "4.4", topSpeed: "270", cylinders: 8, consumption: "11.2", weight: "1800", horsepower: 472, year: 2022 },
    { brand: "Kia", model: "Stinger GT", acceleration: "4.9", topSpeed: "270", cylinders: 6, consumption: "10.6", weight: "1825", horsepower: 368, year: 2019 },
    { brand: "Hyundai", model: "Veloster N", acceleration: "6.2", topSpeed: "250", cylinders: 4, consumption: "8.1", weight: "1381", horsepower: 275, year: 2021 },
    { brand: "Toyota", model: "Camry XSE V6", acceleration: "5.8", topSpeed: "210", cylinders: 6, consumption: "9.0", weight: "1625", horsepower: 301, year: 2020 },
    { brand: "Chevrolet", model: "Corvette C8", acceleration: "2.9", topSpeed: "312", cylinders: 8, consumption: "12.0", weight: "1527", horsepower: 495, year: 2021 }
  ];
  

async function createCars() {
    try {
        for (const car of cars) {
            const carObj = await Car.create({
                brand: car.brand,
                model: car.model,
                acceleration: car.acceleration,
                topSpeed: car.topSpeed,
                cylinders: car.cylinders,
                consumption: car.consumption,
                weight: car.weight,
                horsepower: car.horsepower,
                year: car.year,
                img_url: 'https://exemple.com'
            });
            console.log("🚀 ~ createBook ~ book:", carObj);
        }
    } catch (error) {
      console.log("🚀 ~ createBook ~ error:", error)
    }
  }

//   createCars();

app.listen(port, () => {
    console.log('Your server is running on port: ', port);
})