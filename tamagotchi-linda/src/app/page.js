import React from "react";
import StatsPanel from "../components/StatsPanel"; // Adjust the path as needed
import Image from "next/image";
import PetIcon from "@/Components/PetIcon";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 text-darkblue">
        Welcome to Our Site
      </h1>
      <div className="space-x-4">
        <button className="px-6 py-2 bg-periwinkle text-white rounded hover:bg-hoverperiwinkle">
          Create User
        </button>
        <button className="px-6 py-2 bg-lightblue text-white rounded hover:bg-hoverlightblue">
          Login
        </button>
      </div>
      {/* <PetIcon /> */}

      {/* Test panel component */}
      {/* <div className="w-full max-w-md">
        <StatsPanel />
      </div> */}
    </div>
  );
}
