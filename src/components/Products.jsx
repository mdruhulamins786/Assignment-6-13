import Product from "./Product";
import Cart from "./Cart";
import Tools from "./Tools";

const Products = ({
  products,
  addCart,
  setAddCart,
  showProducts,
  setShowProducts,
}) => {
  //   const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      {" "}
      <section className="container mx-auto px-4 py-16">
        <Tools addCart={addCart} setShowProducts={setShowProducts} />

        {/* Product Grid */}
        {showProducts ? (
          <Product
            products={products}
            addCart={addCart}
            setAddCart={setAddCart}
          />
        ) : (
          <Cart addCart={addCart} setAddCart={setAddCart} setShowProducts={setShowProducts} />
        )}
      </section>
    </>
  );
};

export default Products;
