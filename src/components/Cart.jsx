import { toast } from "react-toastify";

const Cart = ({ addCart, setAddCart, setShowProducts }) => {
  const total = addCart.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveCart = (id) => {
    toast.error("Product removed from cart");
    setAddCart(addCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setAddCart([]);
    setShowProducts(true);
    toast.error("Clear all products. Please proceed to products page.");
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  return (
    <div className="bg-base-100 p-6 rounded-xl shadow-md">
      {addCart?.length === 0 ? (
        <p className="text-center text-3xl h-32 font-bold text-red-500/80">
          Your cart is empty.
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">
              Your Add Cart <span>({addCart?.length || 0})</span>
            </h2>
            {addCart.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between p-4 bg-gray-100/50 pb-3 rounded"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-primary font-bold">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveCart(product.id)}
                  className="btn btn-error btn-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Total:</h3>
            <p className="text-xl font-bold text-primary">
              ${total.toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleClearCart}
            className="btn bg-gradient-to-r from-[#4f39f6]/80 to-[#9514fa]/80 text-white  rounded-full w-full mt-6"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
