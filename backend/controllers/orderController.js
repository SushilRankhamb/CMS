import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const { address, phone, city, country, pincode, paymentMethod } = req.body;

    if (!address || !phone || !city || !country || !pincode || !paymentMethod) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const newOrder = new Order({
      user: req.user.id, // assuming your verifyToken sets req.user
      address,
      phone,
      city,
      country,
      pincode,
      paymentMethod,
      cart: req.body.cart, // you can send cart items too
      status: "Processing",
      createdAt: Date.now(),
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to place order" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get orders" });
  }
};
