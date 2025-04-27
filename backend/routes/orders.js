import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all orders
router.get("/", verifyToken, getOrders);

// POST create new order ✅
router.post("/", verifyToken, createOrder);

export default router;
