import React from "react";
function TikTokButton( text1, text2 ) {
    const totalLength = text1.length + text2.length;
    const ratio1 = text1.length / totalLength;
    const ratio2 = 1 - ratio1;

    return (
      <button className="flex mx-4">
        <a className="font-bold no-underline" href="https://www.tiktok.com/@allstarsgamingro">
        <span className="rounded-l-lg text-white bg-red-500 px-10 py-2" style={{ flex: ratio1 }}>
          {text1}
        </span>
        <span className="rounded-lg text-white bg-blue-500 px-10 py-3" style={{ flex: ratio2 }}>
          {text2}
        </span>
        </a>
      </button>
    );
  }
  function InstagramButton( text1, text2 ) {
    const totalLength = text1.length + text2.length;
    const ratio1 = text1.length / totalLength;
    const ratio2 = 1 - ratio1;

    return (
      <button className="flex mx-4">
        <a className="font-bold no-underline" href="https://www.instagram.com/allstarsgamingro/">
        <span className="rounded-l-lg text-white bg-red-500 px-10 py-2" style={{ flex: ratio1 }}>
          {text1}
        </span>
        <span className="rounded-lg text-white bg-blue-500 px-10 py-3" style={{ flex: ratio2 }}>
          {text2}
        </span>
        </a>
      </button>
    );
  }
  function YouTubeButton( text1, text2 ) {
    const totalLength = text1.length + text2.length;
    const ratio1 = text1.length / totalLength;
    const ratio2 = 1 - ratio1;

    return (
      <button className="flex rounded-lg">
        <a className="font-bold no-underline" href="https://www.youtube.com/channel/UCju1YCClDspmThj_iifpeUw">
        <span className="rounded-l-lg text-white bg-red-500 px-10 py-2" style={{ flex: ratio1 }}>
          {text1}
        </span>
        <span className="rounded-lg text-white bg-blue-500 px-10 py-3" style={{ flex: ratio2 }}>
          {text2}
        </span>
        </a>
      </button>
    );
  }

function PartenerMedia () {
    return (
        <>
        <center className="pb-16"><h1 className="text-3xl font-bold text-white">ALLSTARS GAMING: Partener Media</h1></center>
        <center className="pb-16"><a href="INSERT CUPRINS HERE"><h2 className="text-2xl font-neuropolxbold underline" style ={{color: '#78e800', fontWeight: 'bold'}}>CUPRINS</h2></a></center>
        <center className="pb-16"><img src="https://allstars-gaming.ro/wp-content/uploads/2022/07/logo-allstars-mic2.png"></img></center>
      
        <center><h3 className='pb-16 text-white text-xl'>Pentru ediția curentă de LANParty, avem onoarea să colaborăm cu una dintre organizațiile eSports de prestigiu din România: <a className="text-[#78e800] underline" href="https://allstars-gaming.ro/">AllStars Gaming</a> ca partener media oficial.</h3></center>
        <center className="pb-16"><a href="INSERT LINK BUTON HERE"><button className="bg-[#78e800] text-black font-bold py-2 px-20 rounded"> BUTONUL NOSTRU    </button></a></center>
            <div className="flex justify-center pt-9">
                {TikTokButton("50k", "TikTok")}
                {InstagramButton("116k", "Instagram")}
                {YouTubeButton("1.07M", "YouTube")}
            </div>
        </>
    )
}

export default PartenerMedia;