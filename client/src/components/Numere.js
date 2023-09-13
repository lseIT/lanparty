import React, { useEffect, useState } from 'react';

import 'tailwindcss/tailwind.css'; 

import img1 from '../assets/img/webp/Numere/Comunitate & Interactiune.webp';
import img2 from '../assets/img/webp/Numere/Competitii & Distractie.webp';
import img3 from '../assets/img/webp/Numere/Impact.webp';


export default function Numere() {
  const targetParticipantCounts = [350, 400, 148, 8, 14, 12, 10, 4];
  const increment = 1;
  const [participantCounts, setParticipantCounts] = useState(Array(targetParticipantCounts.length).fill(0));

  useEffect(() => {
    let allCountsReachedTarget = true;
    const requestId = requestAnimationFrame(updateParticipantCounts);

    function updateParticipantCounts() {
      const updatedCounts = participantCounts.map((count, index) => {
        if (count < targetParticipantCounts[index]) {
          allCountsReachedTarget = false;
          return count + increment;
        }
        return count;
      });

      setParticipantCounts(updatedCounts);

      if (!allCountsReachedTarget) {
        requestAnimationFrame(updateParticipantCounts);
      }
    }

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [participantCounts]);

  return (
    <>
      <div className="centered-section">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">LANPARTY V.24 IN CIFRE</h1>
        <div className="mx-auto flex justify-between max-w-screen-2xl">
          <div className="w-1/3 bg-black text-white p-4 border-4 border-white rounded-lg space-y-2 ml-1 mr-3">
          <img src={img3} alt="Imagine 3" className="w-full h-auto rounded-lg" />
            
            <p className="text-center"> <span id="participants-1">{participantCounts[0]}</span> Jucatori inscriși</p>
            <p className="text-center"> <span id="participants-2">{participantCounts[1]}</span> Spectatori live</p>
            <p className="text-center"> <span id="participants-3">{participantCounts[2]}</span> Voluntari</p>
          </div>
          <div className="w-1/3 bg-black text-white p-4 border-4 border-white rounded-lg space-y-2 ml-1 mr-3">
          <img src={img2} alt="Imagine 3" className="w-full h-auto rounded-lg" />
          
            <p className="text-center"> <span id="participants-4">{participantCounts[3]}</span> Turnee</p>
            <p className="text-center"> <span id="participants-5">{participantCounts[4]}</span> Standuri</p>
            <p className="text-center"> <span id="participants-6">{participantCounts[5]}</span> Tombole & Giveaways</p>
          </div>
          <div className="w-1/3 bg-black text-white p-4 border-4 border-white rounded-lg space-y-2 ml-1 mr-3 ">
          <img src={img1} alt="Imagine 3" className="w-full h-auto rounded-lg" />

            <p className="text-center"> <span id="participants-7">{participantCounts[6]}</span> Sponsori</p>
            <p className="text-center"><span id="participants-8">{participantCounts[7]}</span> Mentiuni media </p>
          </div>
         
          
        </div>
      </div>
    </>
  );
}
