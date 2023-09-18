import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function TikTokButton(followers, appName) {
  const totalLength = followers.length + appName.length;
  const whiteRatio = followers.length / totalLength;
  const greenRatio = 1 - whiteRatio;

  return (
    <button className="flex mx-4 hover:duration-300">
      <a
        className="font-bold no-underline"
        href="https://www.tiktok.com/@allstarsgamingro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="rounded-l-lg text-black hover:bg-[#3d3d3d] hover:duration-300  bg-[#FFFFFF] px-10 py-2"
          style={{ flex: whiteRatio }}
        >
          {followers}
        </span>
        <span
          className="rounded-lg text-black hover:bg-[#325e1f] hover:duration-300 bg-[#78e800] px-10 py-3"
          style={{ flex: greenRatio }}
        >
          {appName}
        </span>
      </a>
    </button>
  );
}
function InstagramButton(followers, appName) {
  const totalLength = followers.length + appName.length;
  const whiteRatio = followers.length / totalLength;
  const greenRatio = 1 - whiteRatio;

  return (
    <button className="flex mx-4 hover:duration-300">
      <a
        className="font-bold no-underline"
        href="https://www.instagram.com/allstarsgamingro/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="rounded-l-lg text-black hover:bg-[#3d3d3d] hover:duration-300  bg-[#FFFFFF] px-10 py-2"
          style={{ flex: whiteRatio }}
        >
          {followers}
        </span>
        <span
          className="rounded-lg text-black hover:bg-[#325e1f] hover:duration-300 bg-[#78e800] px-10 py-3"
          style={{ flex: greenRatio }}
        >
          {appName}
        </span>
      </a>
    </button>
  );
}
function YouTubeButton(followers, appName) {
  const totalLength = followers.length + appName.length;
  const whiteRatio = followers.length / totalLength;
  const greenRatio = 1 - whiteRatio;

  return (
    <button className="flex rounded-lg hover:duration-300">
      <a
        className="font-bold no-underline"
        href="https://www.youtube.com/channel/UCju1YCClDspmThj_iifpeUw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="rounded-l-lg text-black hover:bg-[#3d3d3d] hover:duration-300  bg-[#FFFFFF] px-10 py-2"
          style={{ flex: whiteRatio }}
        >
          {followers}
        </span>
        <span
          className="rounded-lg text-black hover:bg-[#325e1f] hover:duration-300 bg-[#78e800] px-10 py-3"
          style={{ flex: greenRatio }}
        >
          {appName}
        </span>
      </a>
    </button>
  );
}

function PartenerMedia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);
  return (
    <>
      <motion.div
        ref={ref}
        id="projects"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="flex justify-center pb-16">
          <h1 className="flex justify-center text-3xl font-bold text-white">
            ALLSTARS GAMING: Partener Media
          </h1>
        </div>
        <div className="flex justify-center pb-16 transform transition-transform duration-600 hover:scale-110">
          <a
            href="https://allstars-gaming.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://allstars-gaming.ro/wp-content/uploads/2022/07/logo-allstars-mic2.png"
              alt="Logo Allstars"
            ></img>
          </a>
        </div>

        <div className="flex justify-center">
          <h3 className="flex justify-center pb-16 text-white text-xl">
            Pentru ediția curentă de LANParty, avem onoarea să colaborăm cu una
            dintre organizațiile eSports de prestigiu din România:
            <a
              className="text-[#78e800] underline whitespace-nowrap"
              href="https://allstars-gaming.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AllStars Gaming
            </a>
            ca partener media oficial.
          </h3>
        </div>
        <div className="pb-16 flex justify-center">
          <button className="bg-[#78e800] text-black font-bold py-2 px-20 rounded">
            REACH ESTIMATIV
          </button>
        </div>
        <div className="flex justify-center flex-wrap pt-9">
          <span className="m-3">{TikTokButton("171k", "TikTok")}</span>
          <span className="m-3">{InstagramButton("117k", "Instagram")}</span>
          <span className="m-3">{YouTubeButton("1.07M", "YouTube")}</span>
        </div>
      </motion.div>
    </>
  );
}

export default PartenerMedia;
