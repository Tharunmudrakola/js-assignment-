import express from "express";
import userRoutes from "./user.js";
import productRoutes from "./product.js";

const app = express();
app.use(express.json());

// THIS IS THE KEY FIX 👇
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
