"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StatsPanel from "@/Components/StatsPanel";
import PetIcon from "@/Components/PetIcon";
import { usePetContext } from "../../../../context/PetContext";


export default function PetPage({ params: paramsPromise }) {
  const router = useRouter();
  const [params, setParams] = useState(null);
  const [pet, setPet] = useState(null);
  const { userFiles } = usePetContext();
  
  useEffect(() => {
    paramsPromise.then((resolvedParams) => {
      setParams(resolvedParams);
    });
  }, [paramsPromise]);

  useEffect(() => {
    if (!params) return;
    const { userId, petId } = params;
    const userPets = JSON.parse(localStorage.getItem(`pets_${userId}`) || "[]");
    const currentPet = userPets.find((p) => p.id.toString() === petId);
    setPet(currentPet);
  }, [params]);
  console.log("params: ", params);

  if (!params) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  const { userId } = params;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="p-4">
        <button
          className="h-8 w-24 text-gray-600 hover:text-gray-800 bg-gray-200 rounded"
          onClick={() => router.push(`/user/${userId}`)}
        >
          Back
        </button>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-bold">{pet}</h1>
        <PetIcon petImage="/dog.svg" />
        <StatsPanel />
      </div>
    </div>
  );
}
