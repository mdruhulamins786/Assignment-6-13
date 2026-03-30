import user from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const ChooseProducts = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up quickly with your email and get started instantly.",
      img: user,
    },
    {
      id: "02",
      title: "Choose Product",
      desc: "Browse our catalog and select the tools that fit your needs.",
      img: packageIcon,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium  tools immediately.",
      img: rocketIcon,
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50 md:py-40">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get Started in 3 Steps
        </h1>
        <p className="text-gray-500 mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center relative"
          >
            {/* Step Number */}
            <p className="absolute top-4 right-4 flex items-center justify-center bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white h-10 w-10 rounded-full text-sm font-semibold shadow-md">
              {step.id}
            </p>

            <img
              src={step.img}
              alt={step.title}
              className="w-16 mx-auto mb-4 mt-16"
            />

            <h3 className="text-lg font-semibold text-gray-700">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseProducts;
