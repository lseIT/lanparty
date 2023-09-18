import React from "react";
function TikTokButton(text1, text2) {
  const totalLength = text1.length + text2.length;
  const ratio1 = text1.length / totalLength;
  const ratio2 = 1 - ratio1;

  return (
    <button className="flex mx-4 hover:duration-300">
      <a
        className="font-bold no-underline"
        href="https://www.tiktok.com/@allstarsgamingro"
      >
        <span
          className="rounded-l-lg text-white hover:bg-[#8e3535]  bg-red-500 px-10 py-2"
          style={{ flex: ratio1 }}
        >
          {text1}
        </span>
        <span
          className="rounded-lg text-white hover:bg-[#3d4cae] bg-blue-500 px-10 py-3"
          style={{ flex: ratio2 }}
        >
          {text2}
        </span>
      </a>
    </button>
  );
}
function InstagramButton(text1, text2) {
  const totalLength = text1.length + text2.length;
  const ratio1 = text1.length / totalLength;
  const ratio2 = 1 - ratio1;

  return (
    <button className="flex mx-4 hover:duration-300">
      <a
        className="font-bold no-underline"
        href="https://www.instagram.com/allstarsgamingro/"
      >
        <span
          className="rounded-l-lg text-white hover:bg-[#8e3535] bg-red-500 px-10 py-2"
          style={{ flex: ratio1 }}
        >
          {text1}
        </span>
        <span
          className="rounded-lg text-white hover:bg-[#3d4cae] bg-blue-500 px-10 py-3"
          style={{ flex: ratio2 }}
        >
          {text2}
        </span>
      </a>
    </button>
  );
}
function YouTubeButton(text1, text2) {
  const totalLength = text1.length + text2.length;
  const ratio1 = text1.length / totalLength;
  const ratio2 = 1 - ratio1;

  return (
    <button className="flex rounded-lg hover:duration-300">
      <a
        className="font-bold no-underline"
        href="https://www.youtube.com/channel/UCju1YCClDspmThj_iifpeUw"
      >
        <span
          className="rounded-l-lg text-white hover:bg-[#8e3535] bg-red-500 px-10 py-2"
          style={{ flex: ratio1 }}
        >
          {text1}
        </span>
        <span
          className="rounded-lg text-white hover:bg-[#3d4cae] bg-blue-500 px-10 py-3"
          style={{ flex: ratio2 }}
        >
          {text2}
        </span>
      </a>
    </button>
  );
}

function PartenerMedia() {
  return (
    <>
      <center className="pb-16">
        <h1 className="text-3xl font-bold text-white">
          ALLSTARS GAMING: Partener Media
        </h1>
      </center>
      <center className="pb-16">
        <a id="backToTop" href="#">
          <h2
            className="text-2xl font-neuropolxbold underline"
            style={{ color: "#78e800", fontWeight: "bold" }}
          >
            CUPRINS
          </h2>
        </a>
      </center>
      <center className="pb-16 transform transition-transform duration-600 hover:scale-110">
        <a href="https://allstars-gaming.ro/">
          <img src="https://allstars-gaming.ro/wp-content/uploads/2022/07/logo-allstars-mic2.png"></img>
        </a>
      </center>

      <center>
        <h3 className="pb-16 text-white text-xl">
          Pentru ediția curentă de LANParty, avem onoarea să colaborăm cu una
          dintre organizațiile eSports de prestigiu din România:{" "}
          <a
            className="text-[#78e800] underline"
            href="https://allstars-gaming.ro/"
          >
            AllStars Gaming
          </a>{" "}
          ca partener media oficial.
        </h3>
      </center>
      <center className="pb-16">
        <button className="bg-[#78e800] text-black font-bold py-2 px-20 rounded">
          {" "}
          REACH ESTIMATIV{" "}
        </button>
      </center>
      <div className="flex justify-center flex-wrap pt-9">
        <span className="m-3">{TikTokButton("50k", "TikTok")}</span>
        <span className="m-3">{InstagramButton("116k", "Instagram")}</span>
        <span className="m-3">{YouTubeButton("1.07M", "YouTube")}</span>
      </div>
    </>
  );
}

export default PartenerMedia;
