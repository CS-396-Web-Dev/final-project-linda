import React from "react";

export default function petCard() {
  const pets = [
    { petName: 'Kaia', animal:"dog" }, // Light blue
    { petName: 'Linda', animal:"rabbit" }
  ];

  const colors = ['#1D3461','#89CFF0','#8F99FB','#FFD1DC','#F8F7FF'];

  return (
    <div>
      {pets.map((pet, index) => (
        <div 
         className=" text-white p-4 rounded-md flex items-center space-x-4 m-4"
        style={{
          backgroundColor: colors[index%5],
        }}
        >
        <p className="text-lg font-semibold ">{pet.petName} :</p>
        <p >{pet.animal}</p>
        </div>
      ))}
    </div>
  );
}
