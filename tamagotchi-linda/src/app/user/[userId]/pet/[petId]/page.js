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
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    const userPets = users[userId];

    if (userPets && userPets[petId]) {
      setPet({
        name: petId,
        ...userPets[petId],
      });
    }
  }, [params]);

  if (!params || !pet) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }
  const { userId, petId } = params;

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
        <h1 className="text-3xl font-bold">{pet.name}</h1>
        <PetIcon 
          petGif={`/gifs/${pet.img}`} 
          petAlt={pet.img}
          userId={userId}
          petName={pet.name}
        />
        <StatsPanel
          userId={userId}
          petName={pet.name}
        />
      </div>
    </div>
  );
}
