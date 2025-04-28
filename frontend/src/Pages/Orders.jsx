import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";

const Orders = () => {
  const { currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]); // Initialize orders as an empty array

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        const data = await response.json();

        // Ensure that data.orders is an array before updating the state
        if (Array.isArray(data.orders)) {
          setOrders(data.orders);
        } else {
          setOrders([]); // Handle case when orders are not returned or invalid data
        }
      } catch (error) {
        console.error("Failed to fetch orders", error);
        setOrders([]); // Optionally set an empty array in case of an error
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {/* Check if orders array is available and has items before calling .map */}
        {orders && orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-5 text-sm ">
                <img src={order.product.image[0]} className="w-16 sm:w-20" alt="" />
                <div>
                  <p className="text-base font-medium">{order.product.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p>Rs.{order.price}</p>
                    <p className="text-sm">{order.status}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found</p> // A message for empty or undefined orders
        )}
      </div>
    </div>
  );
};

export default Orders;
