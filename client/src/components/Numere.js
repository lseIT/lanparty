import React, { useEffect, useState } from 'react';

import 'tailwindcss/tailwind.css'; 

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="participant-count-container bg-black text-white p-5 border-4 border-white rounded-lg">
            <p className="impact-text bg-red-500 text-white px-2 py-1 rounded-lg uppercase font-semibold text-lg mt-3">IMPACTUL LANParty</p>
            <p>Jucatori inscriși <span id="participants-1">{participantCounts[0]}</span></p>
            <p>Spectatori live <span id="participants-2">{participantCounts[1]}</span></p>
            <p>Voluntari <span id="participants-3">{participantCounts[2]}</span></p>
          </div>
          <div className="participant-count-container bg-black text-white p-5 border-4 border-white rounded-lg">
            <p className="impact-text bg-red-500 text-white px-2 py-1 rounded-lg uppercase font-semibold text-lg mt-3">COMPETIȚIE & DISTRACȚIE</p>
            <p> Turnee <span id="participants-4">{participantCounts[3]}</span></p>
            <p> Standuri <span id="participants-5">{participantCounts[4]}</span></p>
            <p>Tombole & Giveaways <span id="participants-6">{participantCounts[5]}</span></p>
          </div>
          <div className="participant-count-container bg-black text-white p-5 border-4 border-white rounded-lg">
            <p className="impact-text bg-red-500 text-white px-2 py-1 rounded-lg uppercase font-semibold text-lg mt-3">COMUNITATE & INTERACȚIUNE</p>
            <p>Sponsori <span id="participants-7">{participantCounts[6]}</span></p>
            <p>Mentiuni media <span id="participants-8">{participantCounts[7]}</span></p>
          </div>
        </div>
      </div>
    </>
  );
}
