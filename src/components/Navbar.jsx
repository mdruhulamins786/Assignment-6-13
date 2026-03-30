import { useState } from "react";
import shoppingCartIcon from "../assets/products/shopping-cart.png";
import Cart from "./Cart";

const Navbar = ({ addCart, setShowProducts }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCartClick = () => {
    setShowProducts(false);
    if (menuOpen) setMenuOpen(false);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-primary cursor-pointer"
          onClick={() => {
            setShowProducts(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          DigiTools
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <a className="hover:text-primary cursor-pointer">Products</a>
          </li>
          <li>
            <a className="hover:text-primary cursor-pointer">Features</a>
          </li>
          <li>
            <a className="hover:text-primary cursor-pointer">Pricing</a>
          </li>
          <li>
            <a className="hover:text-primary cursor-pointer">Testimonials</a>
          </li>
          <li>
            <a className="hover:text-primary cursor-pointer">FAQ</a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Cart with badge */}
          <div className="relative">
            <button
              onClick={handleCartClick}
              className="btn btn-ghost btn-circle"
            >
              <img src={shoppingCartIcon} alt="cart" className="w-5 h-5" />
            </button>

            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {addCart.length}
            </span>
          </div>

          {/* Login */}
          <button className="btn btn-ghost hidden md:block">Login</button>

          {/* Get Started */}
          <button className="btn bg-gradient-to-r from-[#4f39f6]/80 to-[#9514fa]/80 text-white hidden md:block rounded-full">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn btn-ghost"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a className="block">Products</a>
          <a className="block">Features</a>
          <a className="block">Pricing</a>
          <a className="block">Testimonials</a>
          <a className="block">FAQ</a>

          <button className="btn btn-ghost w-full">Login</button>
          <button className="btn btn-primary w-full">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
