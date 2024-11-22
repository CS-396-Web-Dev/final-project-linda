"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StatsPanel from "../components/StatsPanel"; // Adjust the path as needed
import Image from "next/image";
import PetIcon from "@/Components/PetIcon";
import PetCard from "@/Components/PetCard";

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/loginPage");
  };

  const handleCreateAccountClick = () => {
    router.push("/createAccount");
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">
        Welcome to Our Site
      </h1>
      <div className="space-x-4">
        <button 
          className="px-6 py-2 bg-periwinkle text-white rounded hover:scale-110"
          onClick={handleCreateAccountClick}
        >
          Create User
        </button>
        <button
          className="px-6 py-2 bg-lightblue text-white rounded hover:hover:scale-110"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>

      {/* <PetIcon /> */}

      {/* Test panel component */}
      {/* <div className="w-full max-w-md">
        <StatsPanel />
      </div> */}

      {/* <PetCard/> */}
    </div>
  );
600}