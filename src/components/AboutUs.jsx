import image3 from "../assets/images/image3.jpg";

const AboutUs = () => {
  return (
    <div className="bg-[#050E2D] relative overflow-hidden" id="about_us">
      
      <div className="absolute inset-0 bg-[#0B132B] opacity-50 rounded-lg blur-lg"></div>
      <h1 className="relative text-white text-3xl font-extrabold flex justify-center pt-[2%] mb-[5%] transition-all duration-300 ease-in-out transform hover:text-[#6DD8FF] hover:scale-110">
        <span className="absolute inset-0 bg-[#4DA1FF] rounded-lg blur-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
        About us
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center w-full p-8 relative z-10">
        <div className="w-full md:w-1/3 flex justify-center md:justify-end p-4">
          <img
            src={image3}
            alt="Electric Vehicle"
            className="rounded-lg max-w-full h-auto shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 text-white md:pl-8 p-4">
          <p className="text-lg leading-relaxed">
            At voltPath, we're dedicated to empowering Ghana's electric vehicle
            (EV) community with a seamless, accessible, and sustainable charging
            experience. As the adoption of EVs grows, we recognize the need for
            a centralized solution to support drivers in managing their charging
            needs across the country.
            <br />
            <br />
            Our app is designed to help EV owners locate nearby charging
            stations, reserve slots in advance, track their energy usage, and
            make secure cashless payments—all from their mobile device. With
            features like real-time availability, charging history, and
            intelligent route planning for long trips, voltPath is here to make
            EV charging easy, efficient, and worry-free.
            <br />
            <br />
            We're committed to building a cleaner, greener future for Ghana.
            Join us as we pave the way toward a more sustainable transportation
            system, one charge at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
