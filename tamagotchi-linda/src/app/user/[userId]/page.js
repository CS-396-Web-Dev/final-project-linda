"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PetCard from '@/components/PetCard';

export default function UserPage({ params: paramsPromise }) {
  const router = useRouter();
  console.log("params", paramsPromise);
  const params = React.use(paramsPromise);
  const userId = params.userId;

  
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([]);
  const [newPetName, setNewPetName] = useState('');
  const [isAddingPet, setIsAddingPet] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    //console.log("users", users)
    //console.log("u id to string", u.id.toString());
    //console.log("userid", userId)
    const currentUser = users.find(u => u.id.toString() === userId);
    setUser(currentUser);
    //console.log("currentUser", currentUser)

    const userPets = JSON.parse(localStorage.getItem(`pets_${userId}`) || '[]');
    setPets(userPets);
  }, [userId]);

  const handleAddPet = (e) => {
    e.preventDefault();
    const newPet = {
      id: Date.now(),
      name: newPetName,
      userId: userId
    };

    const updatedPets = [...pets, newPet];
    localStorage.setItem(`pets_${userId}`, JSON.stringify(updatedPets));
    setPets(updatedPets);
    setNewPetName('');
    setIsAddingPet(false);
  };

  const handleDeletePet = (petId) => {
    const updatedPets = pets.filter(pet => pet.id !== petId);
    localStorage.setItem(`pets_${userId}`, JSON.stringify(updatedPets));
    setPets(updatedPets);
  };

  if (!user) {
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
          className="h-100 w-200 bg-darkblue text-white hover:scale-110 cursor-pointer px-4 rounded" 
          onClick={() => router.push('/')}
        > Home </button>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">{user.name}'s Pets</h1>
        
        {!isAddingPet ? (
          <button
            onClick={() => setIsAddingPet(true)}
            className="mb-8 bg-darkblue text-white px-4 py-2 rounded-md hover:scale-110"
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
                className="bg-lightblue text-white px-4 py-2 rounded-md hover:scale-110"
              >
                Save Pet
              </button>
              <button
                type="button"
                onClick={() => setIsAddingPet(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:scale-110"
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
              pet={pet}
              onDelete={handleDeletePet}
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