"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePetContext } from "../context/PetContext";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const { createUser } = usePetContext();

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(username);
    setUsername("");
    router.push("/");
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl text-darkblue font-bold mb-6 text-center">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full text-darkblue rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />          
          <button
            type="submit"
            className="w-full bg-darkblue text-white rounded-md py-2 px-2 hover:scale-110"
          >
            Done
          </button>
          <button
              type="button"
              onClick={handleCancel}
              className=" w-full bg-lightblue text-white rounded-md py-2 px-2 hover:scale-110"
            >
              Cancel
            </button>

        </form>
      </div>
    </div>
  );
}
