import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiSignup } from "../services/auth";
import videoSrc from "../assets/images/chargingPort.mp4";
import Swal from "sweetalert2";
import { FaEnvelope, FaLock, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      Swal.fire({
        icon: "warning",
        title: "Terms and Conditions",
        text: "Please accept the terms and conditions to proceed.",
      });
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData(e.target);
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const location = formData.get("location");
      const password = formData.get("password");
      const payload = { firstName, lastName, email, location, password };
      const response = await apiSignup(payload);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: "Please check your details and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="bg-white bg-opacity-30 backdrop-blur-md w-[90vw] md:w-[30vw] lg:w-[25vw] h-[90vh] border-black flex flex-col justify-center items-center z-10 rounded-lg shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="md:w-full sm:w-[60vw] flex flex-col items-center"
        >
          <h1 className="text-gray-700 font-bold text-3xl mb-2">SIGN UP</h1>

          <div className="mb-2 w-[70%] relative">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="firstName"
            >
              First Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-2 top-2 text-gray-500" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name here"
                className="w-full pl-8 p-1 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-2 w-[70%] relative">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-2 top-2 text-gray-500" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name here"
                className="w-full pl-8 p-1 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-2 w-[70%] relative">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-2 top-2 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
                className="w-full pl-8 p-1 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-2 w-[70%] relative">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="location"
            >
              Location
            </label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-2 top-2 text-gray-500" />
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter your location here"
                className="w-full pl-8 p-1 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-2 w-[70%] relative">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-2 top-2 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password here"
                className="w-full pl-8 pr-8 p-1 border rounded"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-500 focus:outline-none"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
          </div>

          <div className="mb-4 w-[70%]">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <span className="text-gray-700 text-sm">
                I agree to the{" "}
                <span className="text-blue-700 hover:text-[#4DA1FF] underline">
                  terms and conditions
                </span>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 border border-[#4DA1FF] px-4 py-2 rounded text-white transition duration-300 ease-in-out hover:bg-blue-600 hover:text-[#0A1A35] shadow-lg"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
