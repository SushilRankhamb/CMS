// routes/orderRoute.js
import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
import adminOrUserAuth from "../middleware/adminAuth.js";

const router = express.Router();

// POST create order
router.post("/", adminOrUserAuth, createOrder);

// GET orders
router.get("/", adminOrUserAuth, getOrders);

export default router;
