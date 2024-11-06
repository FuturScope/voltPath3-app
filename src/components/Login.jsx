import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import videoSrc from "../assets/images/chargingPort.mp4";
import Swal from "sweetalert2";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { apiLogin } from "../services/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(e.target);
      const email = formData.get("email");
      const password = formData.get("password");
      const response = await apiLogin({ email, password });
      console.log(response.data);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
      }

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please check your email or password and try again.",
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
        <h1 className="text-gray-700 font-bold text-3xl mb-2">Welcome Back!</h1>
        <p className="text-gray-700 text-sm mb-6">Login to your account</p>

        <form
          onSubmit={handleSubmit}
          className="md:w-full sm:w-[60vw] flex flex-col items-center"
        >
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
            <input type="checkbox" />
            <span className="text-gray-700 text-sm">
              I agree to the {""}
              <span className="text-blue-700 hover:text-[#4DA1FF] underline">
                terms and conditions
              </span>
            </span>
          </div>

          <button
            type="submit"
            className="bg-blue-500 border border-[#4DA1FF] px-4 py-2 rounded text-white transition duration-300 ease-in-out hover:bg-blue-600 hover:text-[#0A1A35] shadow-lg mb-4"
          >
            {loading ? "Loading..." : "Submit"}
          </button>

          <div className="w-[70%] flex items-center justify-between mb-4">
            <hr className="w-[45%] border-gray-400" />
            <span className="text-gray-500 text-sm">or</span>
            <hr className="w-[45%] border-gray-400" />
          </div>

          <button
            type="button"
            className="w-[70%] bg-white border border-gray-300 px-4 py-2 rounded text-gray-700 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-100 mb-2"
          >
            <FcGoogle className="mr-2" />
            Login with Google
          </button>

          <button
            type="button"
            className="w-[70%] bg-black text-white border border-gray-300 px-4 py-2 rounded flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-800"
          >
            <FaApple className="mr-2" />
            Login with Apple
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
