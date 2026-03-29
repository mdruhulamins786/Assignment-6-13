import bannerImage from "../assets/banner.png";
import play from "../assets/play.png";

const Hero = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <button className="btn btn-sm bg-gradient-to-r from-[#4f39f6]/70 to-[#9514fa]/80 font-normal mb-2 text-white">
            New: AI-Powered Tools Available
          </button>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Supercharge Your Digital Workflow
          </h2>

          <p className="text-lg mb-6 text-gray-500">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex gap-3">
            <button className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white">
              Get Started
            </button>
            <button className="btn btn-outline btn-primary  rounded-full ">
              <span>
                <img src={play} alt="" />
              </span>{" "}
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={bannerImage}
            alt="Banner"
            className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
