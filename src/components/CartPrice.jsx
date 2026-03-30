import React from "react";

const CartPrice = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "$0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      btn: "Get Started Free",
      highlight: false,
    },
    {
      name: "Pro",
      desc: "Best for Professionals",
      price: "$29",
      features: [
        "Access to all tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud Sync",
        "Advanced analytics",
      ],
      btn: "Start Pro Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "$99",
      features: [
        "Everything in pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated Support",
        "SLA guarantee",
        "Custom branding",
      ],
      btn: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div className="py-20 px-4 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto md:py-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-2 relative
              ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white scale-105"
                  : "bg-white"
              }`}
          >
            {/* Badge */}
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-purple-600 text-xs px-3 py-1 rounded-full font-semibold shadow">
                Popular
              </span>
            )}

            {/* Title */}
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p
              className={`text-sm mt-2 ${
                plan.highlight ? "text-gray-200" : "text-gray-500"
              }`}
            >
              {plan.desc}
            </p>

            {/* Price */}
            <h1 className="text-4xl font-bold mt-6">
              {plan.price}
              <span className="text-sm font-normal">/month</span>
            </h1>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-8 w-full py-3 rounded-full font-semibold transition ${
                plan.highlight
                  ? "bg-white text-purple-600 hover:bg-gray-100"
                  : "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white hover:opacity-90"
              }`}
            >
              {plan.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPrice;
