import React from "react";
import Button from "./atoms/Button";

export default function PetIcon({ petImage }) {
  return (
    <article className="p-6 rounded-lg shadow-lg bg-white border w-64 mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={petImage}
          alt="Dog Icon"
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
