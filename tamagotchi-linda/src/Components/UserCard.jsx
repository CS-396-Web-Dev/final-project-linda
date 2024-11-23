"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePetContext } from "../app/context/PetContext";

const UserCard = ({ user, onClick, onDelete }) => {
  const router = useRouter();
  const { idToName } = usePetContext();
  const username = idToName[user];

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(username);
  };

  const handleCardClick = (e) => {
    onClick(user);
  };

  return (
    <div
      className="bg-white border rounded-lg p-4 shadow cursor-pointer hover:shadow-md transition-shadow relative"
      onClick={handleCardClick}
    >
      <h2 className="text-xl font-bold text-center">{username}</h2>
      <button
        onClick={handleDelete}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-periwinkle hover:bg-hoverperiwinkle text-white rounded p-1"
        aria-label="Delete user"
      >
        {" "}
        delete
      </button>
    </div>
  );
};

export default UserCard;
