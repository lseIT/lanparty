import locationWebp from "../assets/img/webp/Indrumar/LocationPicture.webp";

function Location() {
  return (
    <>
      <div>
        <div className="text-5xl flex justify-center text-stroke-3 font-bold text-[#78e800]">
          LOCATIE
        </div>
        <div className="flex-wrap rounded-lg pb-16  ">
          <div className="relative w-[90%] md:w-4/6 w-4/5 rounded-lg mx-auto mt-16 border-4 border-[#78e800] shadow-inner ">
            <img
              className="w-full rounded-lg"
              src={locationWebp}
              alt="Imagine cu locatia si caile de acces catre cladire"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
