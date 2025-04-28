import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"Cart"} text2={"Total"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm ">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            Rs. {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping fee</p>
          <p>
            Rs. {deliveryFee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total </b>
          <b>
            Rs.{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
