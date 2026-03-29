import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <>
      {" "}
      <section className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex flex-col gap-6 justify-center items-center mb-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Premium Digital Tools
            </h1>
            <p className="text-gray-500 max-w-md">
              Choose from our curated collection of premium digital products.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-primary rounded-full">Products</button>
            <button className="btn btn-outline rounded-full">
              Cart <span className="ml-1">(0)</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <Product products={products} />
      </section>
    </>
  );
};

export default Products;
