import React from "react";

const Tools = ({ addCart, setShowProducts }) => {
  return (
    <>
      {" "}
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
          <button
            className="btn btn-primary rounded-full"
            onClick={() => setShowProducts(true)}
          >
            Products
          </button>
          <button
            className="btn btn-outline rounded-full"
            onClick={() => setShowProducts(false)}
          >
            Cart <span className="ml-1">({addCart.length})</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Tools;
