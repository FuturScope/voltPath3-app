// import sportsrumble from "../assets/rumble/sportsrumble.wav"; // Import the audio file

// import React, { useEffect, useRef } from "react";

// const CyberpunkCarModel = () => {
//   const audioRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (audioRef.current) {
//       audioRef.current.play(); // Play sound on hover
//     }
//   };

//   const handleMouseLeave = () => {
//     if (audioRef.current) {
//       audioRef.current.pause(); // Pause sound when not hovering
//       audioRef.current.currentTime = 0; // Reset audio to the start
//     }
//   };

//   return (
//     <div
//       className="sketchfab-embed-wrapper flex justify-center items-center h-screen bg-gray-900"
//       onMouseEnter={handleMouseEnter} // Add mouse enter event
//       onMouseLeave={handleMouseLeave} // Add mouse leave event
//     >
//       <iframe
//         title="Cyberpunk car"
//         src="https://sketchfab.com/models/b4301ff99d214d16a7a43708a5866bf0/embed?autostart=1&ui_controls=0&ui_hint=0&ui_stop=0&ui_infos=0&ui_animations=0&ui_vr=0&ui_download=0&ui_help=0&ui_fullscreen=0"
//         frameBorder="0"
//         allow="autoplay; fullscreen; xr-spatial-tracking"
//         mozallowfullscreen="true"
//         webkitallowfullscreen="true"
//         className="w-full h-full"
//       ></iframe>
//       {/* Audio element for rumbling sound */}
//       <audio ref={audioRef} loop>
//         <source src={sportsrumble} type="audio/wav" />{" "}
//         {/* Use the imported audio file */}
//         <source src="../assets/rumble/sportsrumble.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// };

// export default CyberpunkCarModel;


import sportsrumble from "../assets/rumble/sportsrumble.wav"; // Import the audio file
import React, { useRef } from "react";

const CyberpunkCarModel = () => {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play sound on hover
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause sound when not hovering
      audioRef.current.currentTime = 0; // Reset audio to the start
    }
  };

  return (
    <div
      className="sketchfab-embed-wrapper flex justify-center items-center h-screen bg-gray-900 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Overlay Text */}
      <div className="absolute top-1/4 w-full text-center text-white px-4 md:px-0 z-10">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4 opacity-90">
          Welcome to Ghana's EV Charging Hub
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto opacity-75">
          Providing comprehensive solutions for all your electric vehicle
          charging needs across Ghana.
        </p>
      </div>

      {/* 3D Car Model Iframe */}
      <iframe
        title="Cyberpunk car"
        src="https://sketchfab.com/models/b4301ff99d214d16a7a43708a5866bf0/embed?autostart=1&ui_controls=0&ui_hint=0&ui_stop=0&ui_infos=0&ui_animations=0&ui_vr=0&ui_download=0&ui_help=0&ui_fullscreen=0"
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        className="w-full h-full"
      ></iframe>

      {/* Audio element for rumbling sound */}
      <audio ref={audioRef} loop>
        <source src={sportsrumble} type="audio/wav" />
        <source src="../assets/rumble/sportsrumble.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default CyberpunkCarModel;

