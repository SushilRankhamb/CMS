import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CartTotal from "../Components/CartTotal";
import Title from "../Components/Title";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      const formData = new FormData(form);
      const formEntries = Object.fromEntries(formData.entries());

      // Also get cart items (assuming you store cart in localStorage)
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      const orderData = {
        ...formEntries,
        cart: cartItems,
      };

      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify(orderData),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success("🎉 Order placed successfully!");
          navigate("/orders");
        } else {
          toast.error(data.message || "❌ Failed to place order");
        }
      } catch (error) {
        console.error(error);
        toast.error("❌ Order failed, try again!");
      } finally {
        setLoading(false);
      }
    } else {
      form.reportValidity();
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      <div className="w-full sm:w-[60%]">
        <Title title="Place Your Order" />

        <div className="flex flex-col gap-4 mt-6">
          <input name="address" type="text" placeholder="Delivery Address" required className="border p-2 rounded" />
          <input name="phone" type="text" placeholder="Phone Number" required className="border p-2 rounded" />
          <input name="city" type="text" placeholder="City" required className="border p-2 rounded" />
          <input name="country" type="text" placeholder="Country" required className="border p-2 rounded" />
          <input name="pincode" type="text" placeholder="Pincode" required className="border p-2 rounded" />
          <select name="paymentMethod" required className="border p-2 rounded">
            <option value="">Select Payment Method</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
          <input name="note" type="text" placeholder="Order Notes (Optional)" className="border p-2 rounded" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </div>

      <div className="w-full sm:w-[35%]">
        <CartTotal />
      </div>
    </form>
  );
};

export default PlaceOrder;
