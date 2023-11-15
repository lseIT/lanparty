import scheduleWebp from "../assets/img/webp/Indrumar/SchedulePicture.webp";

function Program() {
  return (
    <>
      <div>
        <div className="text-5xl flex justify-center text-stroke-3 font-bold text-[#78e800]">
          PROGRAM
        </div>
        <div className="flex-wrap rounded-lg pb-16  ">
          <div className="relative w-[90%] md:w-4/6 w-4/5 rounded-lg mx-auto mt-16 border-4 border-[#78e800] shadow-inner ">
            <img
              className="w-full rounded-lg"
              src={scheduleWebp}
              alt="Imagine"
            />
          </div>
        </div>
      </div>
    </>
  );
}

//vrem vreme buna muie lu furtuna ca nu ne-a lasat sa punem animatia

export default Program;
