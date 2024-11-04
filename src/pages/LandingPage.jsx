

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IconSection from '../components/IconSection';
import AboutUs from '../components/AboutUs';
import LogoCarousel from '../components/LogoCarousel';
import CyberpunkCarModel from '../components/CyberpunkCarModel';

const LandingPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-[#050E2D] ">
        <CyberpunkCarModel/>
      </div>
     <IconSection />
     <AboutUs />
    <LogoCarousel/>
      <Footer />
      
    </div>
  );
}

export default LandingPage;