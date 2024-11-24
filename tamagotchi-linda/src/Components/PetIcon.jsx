import React from "react";
import Button from "./atoms/Button";
import Image from "next/image";

export default function PetIcon({ petGif, petAlt }) {
  return (
    <article className="p-6 rounded-lg shadow-lg bg-white border w-64 mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={petGif}
          alt={petAlt}
          className="w-36 h-36 rounded-md object-contain"
        />
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <Button buttonText={"Feed"} buttonId={"feed-button"} />
        <Button buttonText={"Play"} buttonId={"play-button"} />
        <Button buttonText={"Sleep"} buttonId={"sleep-button"} />
      </div>
    </article>
  );
}
