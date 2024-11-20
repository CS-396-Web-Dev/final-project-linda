import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/user/${user.id}`); 
  };

  return (
    <div
      className="border rounded p-4 shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <h2 className="text-xl font-bold">{user.name}</h2>
    </div>
  );
};

export default UserCard;
