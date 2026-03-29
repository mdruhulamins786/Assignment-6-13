import React from "react";

const Product = ({ products }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-base-100 rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="flex mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-center">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm text-center mb-4">
              {product.desc}
            </p>

            {/* Price */}
            <h4 className="text-center mb-4">
              <span className="text-2xl font-bold text-primary">
                ${product.price}
              </span>
              <span className="text-sm text-gray-500"> /month</span>
            </h4>

            {/* Features */}
            <ul className="text-sm text-gray-500 space-y-1 mb-5">
              {product.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            {/* Button */}
            <button className="btn btn-primary w-full rounded-full">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
