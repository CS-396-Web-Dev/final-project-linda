import React from "react";
import Button from "./atoms/Button";
import { usePetContext } from "@/app/context/PetContext";

const PetIcon = ({ petGif, petAlt, userId, petName }) => {
  const { userFiles, updatePet } = usePetContext();

  const handleAction = (action) => {
    const currentStats = userFiles[userId][petName];

    switch (action) {
      case "feed":
        const newHunger = Math.min(currentStats.hunger + 10, 100);
        updatePet(petName, userId, "hunger", newHunger, "user");
        break;
      case "play":
        const newHappiness = Math.min(currentStats.happiness + 10, 100);
        updatePet(petName, userId, "happiness", newHappiness, "user");
        break;
      case "sleep":
        const newEnergy = Math.min(currentStats.energy + 10, 100);
        updatePet(petName, userId, "energy", newEnergy, "user");
        break;
      default:
        break;
    }
  };

  return (
    <article
      className="p-6 rounded-lg shadow-lg bg-white border w-64 mx-auto"
      role="article"
      aria-labelledby={`${petName}-title`}
    >
      <div className="flex flex-col items-center">
        <img
          src={petGif}
          alt={`A representation of pet ${petName}: ${petAlt}`}
          className="w-36 h-36 rounded-md object-contain"
        />
      </div>

      <h2
        id={`${petName}-title`}
        className="text-lg font-semibold text-center mt-4"
      >
        {petName}
      </h2>

      <div className="mt-4 flex justify-center space-x-4">
        <Button
          buttonText="Feed"
          buttonId="feed-button"
          onClick={() => handleAction("feed")}
          aria-label={`Feed ${petName} to increase hunger`}
        />
        <Button
          buttonText="Play"
          buttonId="play-button"
          onClick={() => handleAction("play")}
          aria-label={`Play with ${petName} to increase happiness`}
        />
        <Button
          buttonText="Sleep"
          buttonId="sleep-button"
          onClick={() => handleAction("sleep")}
          aria-label={`Put ${petName} to sleep to increase energy`}
        />
      </div>
    </article>
  );
};

export default PetIcon;
