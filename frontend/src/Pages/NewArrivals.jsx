import React from "react";
import { newArrivalProducts } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newArrivalProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <Link to={`/product/${product._id}`}>
              <img src={product.image[0]} alt={product.name} className="w-full h-60 object-cover mb-4" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">Rs.{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
