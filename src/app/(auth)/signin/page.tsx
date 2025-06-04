"use client";
import { Eye, EyeOff, Phone } from "lucide-react";
import React, { useState } from "react";

const CreateAccount: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-center text-black pb-3">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-full border border-gray-300 placeholder:text-gray-400 text-black focus:outline-none focus:ring-1 focus:ring-black"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="w-full px-4 py-3 rounded-full border border-gray-300 placeholder:text-gray-400 text-black focus:outline-none focus:ring-1 focus:ring-black"
          />
          <span className="text-gray-700 absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer">
            {showPassword ? (
              <EyeOff onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <Eye onClick={() => setShowPassword(!showPassword)} />
            )}
          </span>
        </div>

        <button className="cursor-pointer w-full py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition">
          Continue
        </button>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </div>

        <div className="flex items-center justify-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="cursor-pointer w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition">
          <span className="text-lg">
            <Phone className="text-gray-700 w-5 h-5" />
          </span>
          <span className="text-md font-medium text-black">
            Continue with phone
          </span>
        </button>

        <button className="cursor-pointer w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-md font-medium text-black">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
