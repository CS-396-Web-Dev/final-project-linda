"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PetCard = ({ pet, onDelete }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/user/${pet.userId}/pet/${pet.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow p-6 relative cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
    >
      <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
      {/* <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(pet.id);
        }}
        className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white rounded hover:scale-110 text-sm"
      >
        Delete
      </button> */}
    </div>
  );
};

export default PetCard;
