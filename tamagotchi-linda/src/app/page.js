import React from "react";
import StatsPanel from "../components/StatsPanel"; // Adjust the path as needed
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Site</h1>

      <div className="space-x-4 mb-6">
        <button className="px-6 py-2 bg-[#8F99FB] text-[#F8F7FF] rounded hover:bg-[#5A6DFF]">
          Create User
        </button>
        <button className="px-6 py-2 bg-[#89CFF0] text-[#F8F7FF] rounded hover:bg-[#6EC6FF]">
          Login
        </button>
      </div>

      {/* Test panel component */}
      {/* <div className="w-full max-w-md">
        <StatsPanel />
      </div> */}
    
    </div>
  );
}
