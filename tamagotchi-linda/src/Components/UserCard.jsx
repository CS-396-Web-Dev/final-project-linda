"use client"
import React from "react";
import { useRouter } from "next/navigation";

const UserCard = ({ user }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push('/');
  };

  return (
    <div
      className="bg-white border rounded-lg p-4 shadow cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleCardClick}
    >
      <h2 className="text-xl font-bold text-center">{user.name}</h2>
    </div>
  );
};

export default UserCard;