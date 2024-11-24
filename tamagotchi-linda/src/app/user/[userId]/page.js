"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PetCard from "@/components/PetCard";
import { usePetContext } from "../../context/PetContext";

export default function UserPage({ params: paramsPromise }) {
  const router = useRouter();
  const { userFiles, idToName, createPet, updatePet} = usePetContext();
  
  const [params, setParams] = useState(null);
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([]);
  const [newPetName, setNewPetName] = useState('');
  const [isAddingPet, setIsAddingPet] = useState(false);

  // Unwrap params
  useEffect(() => {
    paramsPromise.then((resolvedParams) => {
      setParams(resolvedParams);
    });
  }, [paramsPromise]);

  useEffect(() => {
    if (!params) return;
    const userId = params.userId;
    const currentUser = idToName[userId]; 
    setUser(currentUser);

    const userPets = userFiles[userId] || {}; 
    setPets(Object.keys(userPets).map(petName => ({ id: petName, ...userPets[petName] }))); 
  }, [params, userFiles, idToName]);

  const handleAddPet = (e) => {
    e.preventDefault();
    createPet(newPetName, params.userId, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/1600px-Cute_dog.jpg?20140729055059"); // Add a image?
    setNewPetName('');
    setIsAddingPet(false);
  };

  const handleDeletePet = (petId) => {
    const petName = petId; 
    updatePet(petName, params.userId, "hunger", 0); 
    delete userFiles[params.userId][petName]; 
    setPets(pets.filter(pet => pet.id !== petId));
  };

  const handlePetCardClick = (petId) => {
    router.push(`/user/${params.userId}/pet/${petId}`);
  };

  if (!params || !user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <button
          className="h-8 w-24 text-gray-600 hover:text-gray-800 bg-gray-200 rounded"
          onClick={() => router.push("/")}
        >
          Home
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">{user}'s Pets</h1>

        {!isAddingPet ? (
          <button
            onClick={() => setIsAddingPet(true)}
            className="mb-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add New Pet
          </button>
        ) : (
          <form onSubmit={handleAddPet} className="mb-8 space-y-4">
            <div>
              <label htmlFor="petName" className="block text-sm font-medium text-gray-700">
                Pet Name
              </label>
              <input
                type="text"
                id="petName"
                value={newPetName}
                onChange={(e) => setNewPetName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="space-x-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Save Pet
              </button>
              <button
                type="button"
                onClick={() => setIsAddingPet(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pets.map((pet) => (
            <PetCard 
                key={pet.id}
                pet={pet.id} 
                onDelete={handleDeletePet} 
                onClick={handlePetCardClick} 
            />
          ))}
        </div>

        {pets.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No pets added yet. Click "Add New Pet" to get started!
          </div>
        )}
      </div>
    </div>
  );
}
