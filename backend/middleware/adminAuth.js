// adminOrUserAuth.js
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const adminOrUserAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Extract token from "Bearer <token>"
    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);

    if (!user || (user.role !== "admin" && user.role !== "user")) {
      return res.status(403).json({ success: false, message: "Not Authorized: Admin or User access only" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default adminOrUserAuth;
