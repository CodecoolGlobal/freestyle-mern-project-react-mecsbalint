import express from 'express';
import userRoutes from "./routes/user.js";
import activeUserRoutes from "./routes/activeUser.js";
import carRoutes from "./routes/car.js";

const app = express();
app.use(express.json());
const port = 3005;

app.use("/api/users", userRoutes);

app.use("/api/activeuser", activeUserRoutes);

app.use("/api/cards", carRoutes);

app.listen(port, () => {
  console.log('Your server is running on port: ', port);
});
