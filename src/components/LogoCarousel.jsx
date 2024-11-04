const logos = [
  { src: "src/assets/images/mest.jpeg", alt: "" },
  { src: "src/assets/images/generation.jpeg", alt: "" },
  { src: "src/assets/images/mastercard.png", alt: "" },
  { src: "src/assets/images/grow.png", alt: "" },
  // Add more logos as needed
];

const LogoCarousel = () => {
  return (
    <div className="bg-[#050E2D]">
      <h1 className="relative text-white text-3xl font-extrabold flex justify-center pt-[2%] mb-[5%] transition-all duration-300 ease-in-out transform hover:text-[#6DD8FF] hover:scale-110">
        <span className="absolute inset-0 bg-[#4DA1FF] rounded-lg blur-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
        Partners
      </h1>
      <div className="overflow-hidden w-full bg-[#13162E]">
        <div className="flex animate-marquee">
          {logos.map((logo, index) => (
            <div key={index} className="flex-none w-1/4 p-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-20 mx-auto drop-shadow-[0_4px_10px_rgba(0,128,255,0.6)]" // Custom shadow with glow effect
              />
            </div>
          ))}
          {/* Repeat the logos to create the loop effect */}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="flex-none w-1/4 p-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-20 mx-auto drop-shadow-[0_4px_10px_rgba(0,128,255,0.6)]" // Custom shadow with glow effect
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
