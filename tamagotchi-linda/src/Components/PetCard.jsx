"use client"
import React from "react";
import { useRouter } from "next/navigation";
import {usePetContext} from '../app/context/PetContext' 

const PetCard = ({ pet, onClick, onDelete }) => {
  const router = useRouter();
  const {createPet, updatePet} = usePetContext();

  const handlePetCardClick = (e) => {
    onClick(pet)
  }

  return (
    <div
      className="bg-white border rounded-lg p-4 shadow cursor-pointer hover:shadow-md transition-shadow relative"
      onClick={handlePetCardClick}
    >
      <h3 className="text-xl font-semibold mb-2">{pet}</h3>
      <button
        onClick={() => onDelete(pet)}
        className="absolute top-4 right-4 px-3 py-1 bg-periwinkle text-white rounded hover:scale-110 text-sm"
      >
        Delete
      </button>
    </div>
  );
}

export default PetCard;
