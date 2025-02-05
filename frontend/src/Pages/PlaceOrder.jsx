import { useNavigate } from "react-router-dom";
import CartTotal from "../Components/CartTotal";
import Title from "../Components/Title";

const PlaceOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex- flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded py-1.5 px-3.5 mt-3 w-full"
        />
        <input
          type="text"
          placeholder="Address"
          className="border border-gray-300 rounded py-1.5 px-3.5 my-3 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Province"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 my-3 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 my-3 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone No"
          className="border border-gray-300 rounded py-1.5 px-3.5  w-full"
        />
      </div>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className=" flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p
              className={`min-w-3.5 h-3.5 border rounded-full bg-green-500`}
            ></p>
            <p className="text-gray-500 text-sm font-medium mx-4">
              {" "}
              Cash on Delivery
            </p>
          </div>
        </div>
        <div className="w-full text-center mt-5 ">
          <button
            onClick={() => navigate("/orders")}
            className="bg-black text-white text-sm px-24 my-3 py-3 rounded hover:bg-blue-600"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
