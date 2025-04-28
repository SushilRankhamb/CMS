import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orders.js"

// App config
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Connect to Cloudinary
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/orders", orderRouter); // ✅ now properly use router

// Test route
app.get("/", (req, res) => {
  res.send("API working. Les gooooo 🚀");
});

// Start server
app.listen(port, () => console.log(`🚀 Server started on port: ${port}`));
