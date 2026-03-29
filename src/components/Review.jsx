import React from "react";

const Review = () => {
  return (
    <section className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa]/80">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">50k+</h1>
            <p className="text-sm opacity-80">Active Users</p>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/50"></div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold">200+</h1>
            <p className="text-sm opacity-80">Premium Tools</p>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/50"></div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold">4.9</h1>
            <p className="text-sm opacity-80">User Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
