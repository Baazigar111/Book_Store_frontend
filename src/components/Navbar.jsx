import { Link } from "react-router-dom";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { useState, useEffect } from "react";

import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logout } = useAuth();

  // Scroll effect for advanced transparency transition
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logout();
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 w-full
      ${isScrolled
          ? "py-3 glassmorphism"
          : "py-6 bg-transparent"}`}
    >
      <nav className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">

        {/* LEFT SIDE: Brand & Menu */}
        <div className="flex items-center md:gap-12 gap-4">
          <Link to="/" className="group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <HiMiniBars3CenterLeft className="size-6" />
            </div>
          </Link>

          {/* SEARCH: Advanced Interactive Bar */}
          <div className="relative sm:w-96 w-40 hidden md:block">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
            <input
              type="text"
              placeholder="Discover your next favorite book..."
              className="w-full bg-gray-100/50 border border-transparent py-2.5 pl-12 pr-4 rounded-2xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary/20 transition-all duration-300 text-sm font-medium"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1">
              <kbd className="px-2 py-1 text-[10px] font-semibold text-gray-400 bg-white border border-gray-200 rounded-lg">Ctrl</kbd>
              <kbd className="px-2 py-1 text-[10px] font-semibold text-gray-400 bg-white border border-gray-200 rounded-lg">K</kbd>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Actions */}
        <div className="flex items-center lg:gap-8 md:gap-4 gap-3">

          {/* USER SECTION */}
          <div className="relative">
            {currentUser ? (
              <div className="flex items-center">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-gray-100 transition-all active:scale-95 border border-transparent hover:border-gray-200"
                >
                  <img
                    src={avatar}
                    alt="User"
                    className="size-9 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <span className="hidden lg:block text-sm font-bold text-gray-700">Account</span>
                </button>

                {/* ADVANCED DROPDOWN */}
                {isDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
                    <div className="absolute right-0 mt-3 w-60 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-100 overflow-hidden z-20 animate-in fade-in slide-in-from-top-5 duration-300">
                      <div className="px-5 py-4 bg-gradient-to-br from-primary/5 to-transparent border-b border-gray-50">
                        <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Member Portal</p>
                      </div>
                      <div className="p-2">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-primary/5 hover:text-primary rounded-xl transition-all"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="p-2 border-t border-gray-50 bg-gray-50/50">
                        <button
                          onClick={handleLogOut}
                          className="flex w-full px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-2 font-bold text-sm text-gray-700 hover:text-primary transition-colors">
                <div className="p-2 bg-gray-100 rounded-xl"><HiOutlineUser className="size-5" /></div>
                <span className="hidden sm:block">Login</span>
              </Link>
            )}
          </div>

          {/* FAVORITES */}
          <button className="hidden sm:flex p-2.5 bg-gray-100/50 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all duration-300 relative group">
            <HiOutlineHeart className="size-6 transition-transform group-hover:scale-110" />
            <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* CART: Advanced Float Style */}
          <Link
            to="/cart"
            className="relative flex items-center gap-3 bg-gray-900 hover:bg-primary text-white py-2.5 px-5 rounded-2xl transition-all duration-500 hover:shadow-[0_10px_20px_rgba(255,165,0,0.3)] group"
          >
            <HiOutlineShoppingCart className="size-5 group-hover:-rotate-12 transition-transform" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-medium text-gray-400 group-hover:text-white/80 transition-colors uppercase tracking-tighter">My Cart</span>
              <span className="text-sm font-bold">{cartItems.length} Items</span>
            </div>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-lg animate-bounce">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;