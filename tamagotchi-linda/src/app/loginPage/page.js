"use client"
import React, { useState, useEffect } from 'react';
import UserCard from '@/components/UserCard';
import { useRouter } from 'next/navigation';
import {usePetContext} from '../context/PetContext'

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const {userFiles, setCurrentUser, deleteUser, idToName} = usePetContext();
  const users = [];

  useEffect(() => {
    const users = Object.keys(userFiles);
    // console.log("users", users);
    setIsLoading(false);
  }, []);

  const handleDeleteUser = (userId) => {
    deleteUser(userId)
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="p-4">
          <button 
            className="h-8 w-8 text-gray-600 hover:text-gray-800 cursor-pointer" 
            onClick={() => router.push('/')}
          >home 
          </button>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-xl">Loading...</div>
        </div>
      </div>
    );
  }
  console.log("users in login", users)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <button 
          className="h-100 w-200 bg-darkblue text-white hover:scale-110 cursor-pointer px-4 rounded"
          onClick={() => router.push('/')}
        > Home 
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-2xl font-bold mb-6">Select User</h1>
        <div className="space-y-4 w-96">
          {Object.keys(userFiles).length === 0 ? (
            <div className="text-center text-gray-500">No users found</div>
          ) : (
            Object.keys(userFiles).map((user,index) => (
              <UserCard 
                key={user} 
                user={idToName[user]} 
                onDelete={handleDeleteUser}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}