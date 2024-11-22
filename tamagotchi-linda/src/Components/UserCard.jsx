"use client"
import React from "react";
import { useRouter } from "next/navigation";

const UserCard = ({ user, onDelete }) => {
  const router = useRouter();

  const handleCardClick = () => {
    console.log("user.id", user.id)
    router.push(`/user/${user.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation(); 
    onDelete(user.id);
  };

  return (
    <div
      className="bg-white border rounded-lg p-4 shadow cursor-pointer hover:shadow-md transition-shadow relative"
      onClick={handleCardClick}
    >
      <h2 className="text-xl font-bold text-center">{user.name}</h2>
      <button
        onClick={handleDelete}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-periwinkle hover:bg-hoverperiwinkle text-white rounded p-1"
        aria-label="Delete user"
      > delete
      </button>
    </div>
  );
};

export default UserCard;