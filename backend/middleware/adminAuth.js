import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Autorized",
      });
    }
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    const adminString = process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;
    
    if (tokenDecode !== adminString) {
      return res.json({ success: false, message: "Not Authorized" });
    }    
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
