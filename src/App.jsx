import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Products from "./components/Products";

import { ToastContainer } from "react-toastify";

const App = () => {
  const [products, setProducts] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [showProducts, setShowProducts] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar addCart={addCart} setShowProducts={setShowProducts} />

      {/* Hero Section */}
      <Hero />

      {/* Reviews Section */}
      <Review />

      {/* Products Cart Section */}
      <Products
        products={products}
        addCart={addCart}
        setAddCart={setAddCart}
        showProducts={showProducts}
        setShowProducts={setShowProducts}
      />

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default App;
