import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between px-3 py-5 font-medium ">
      <Link to={"/"}>
        <img className="w-36" src={assets.logo} alt="" />
      </Link>

      <ul className=" hidden sm:flex text-sm text-gray-700 gap-5 ">
        <NavLink to={"/"} className="flex flex-col items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/new-arrivals" className="flex flex-col items-center gap-1">
           NEW ARRIVALS
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT US</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1 ">
          <p>CONTACT US</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="search"
        />
        <div className="group relative">
          <Link to={"/login"}>
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu pt-4 right-0">
            <div className="flex flex-col gap-2 w-36 p-4 bg-gray-500 text-white rounded">
              <p className="cursor-pointer hover:text-gray-300">My Profile</p>
              <p className="cursor-pointer hover:text-gray-300">Orders</p>
              <p className="cursor-pointer hover:text-gray-300">Logout</p>
            </div>
          </div>
        </div>
        <NavLink className="relative" to={"/cart"}>
          <img
            className="w-5 cursor-pointer"
            src={assets.cart_icon}
            alt="cart"
          />
          <p className="absolute right-[-5px] bottom-[-7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {getCartCount()}
          </p>
        </NavLink>
        <img
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          alt=""
        />
      </div>
      <div
        className={`${
          visible ? "w-full" : "w-0"
        } absolute top-0 right-0 bottom-0 overflow-hidden bg-white z-50 transition-all`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-4 p-3 cursor-pointer">
            <img
              onClick={() => setVisible(false)}
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to={"/collection"}
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to={"/about"}
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to={"/contact"}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
