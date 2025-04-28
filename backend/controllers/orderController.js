import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const { address, phone, city, country, pincode, paymentMethod, cart } = req.body;

    if (!address || !phone || !city || !country || !pincode || !paymentMethod || cart.length === 0) {
      return res.status(400).json({ message: "Please fill all fields and add at least one cart item" });
    }

    const newOrder = new Order({
      user: req.user.id, 
      address,
      phone,
      city,
      country,
      pincode,
      paymentMethod,
      cart,
      status: "Processing",
      createdAt: Date.now(),
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Failed to place order", error: error.message });
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
