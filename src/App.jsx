import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Reviews Section */}
      <Review />
    </div>
  );
};

export default App;
