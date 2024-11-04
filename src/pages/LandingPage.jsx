import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IconSection from "../components/IconSection";
import AboutUs from "../components/AboutUs";
import LogoCarousel from "../components/LogoCarousel";
import CyberpunkCarModel from "../components/CyberpunkCarModel";
import AllChargingStations from "../components/AllChargingStations";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#050E2D] ">
        <CyberpunkCarModel />
      </div>
      <IconSection />
      <AllChargingStations />
      <AboutUs />
      <LogoCarousel />
      <Footer />
    </div>
  );
};

export default LandingPage;
