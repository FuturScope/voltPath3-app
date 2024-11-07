import iconsData from "../../constants/Icons";

const IconSection = () => {
  return (
    <div className="bg-[#050E2D] py-12">
      <h1 className="relative text-white text-3xl font-extrabold flex justify-center pt-[2%] mb-[5%] transition-all duration-300 ease-in-out transform hover:text-[#6DD8FF] hover:scale-110">
        <span className="absolute inset-0 bg-[#4DA1FF] rounded-lg blur-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
        What We Offer
      </h1>

      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {iconsData.map((item, index) => (
          <div
            key={index}
            className="bg-[#0B132B] bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 relative hover:bg-opacity-50" 
          >
            <div className="text-6xl mb-4 text-[#4DA1FF] animate-pulse hover:animate-none transition duration-300 ease-in-out hover:text-[#6DD8FF] hover:shadow-glow">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white relative z-10 transition duration-300 ease-in-out hover:text-[#6DD8FF]">
              {item.text}
            </h3>
            <p className="text-gray-300 relative z-10 transition duration-300 ease-in-out hover:text-[#A1C4FF]">
              {item.description}
            </p>

            
            <div className="absolute inset-0 rounded-lg border border-[#4DA1FF] opacity-30 blur-md transition-opacity duration-300 hover:opacity-60"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSection;
