import dotenv from "dotenv";
import express from "express";
import { connectedDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectedDB();
    console.log("Server started at http://localhost:" + PORT);
})

