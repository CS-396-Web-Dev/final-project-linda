"use client";
import React, { useState, useEffect } from "react";
import UserCard from "@/components/UserCard";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
    setIsLoading(false);
  }, []);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="p-4">
          <button
            className="h-8 w-8 text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={() => router.push("/")}
          >
            home
          </button>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-xl">Loading...</div>
        </div>
      </div>
    );
  }
  console.log("users in login", users);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <button
          className="h-100 w-200 bg-darkblue text-white hover:scale-110 cursor-pointer px-4 rounded"
          onClick={() => router.push("/")}
        >
          {" "}
          Home
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-2xl font-bold mb-6">Select User</h1>
        <div className="space-y-4 w-96">
          {users.length === 0 ? (
            <div className="text-center text-gray-500">No users found</div>
          ) : (
            users.map((user) => (
              <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
