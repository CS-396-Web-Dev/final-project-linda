"use client"
import React from 'react';

const PetCard = ({ pet, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 relative">
      <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
      <button
        onClick={() => onDelete(pet.id)}
        className="absolute top-4 right-4 px-3 py-1 bg-periwinkle text-white rounded hover:scale-110"
      >
        Delete
      </button>
    </div>
  );
};

export default PetCard;