import React from "react";
function DualColorButton( text1, text2 ) {
    const totalLength = text1.length + text2.length;
    const ratio1 = text1.length / totalLength;
    const ratio2 = 1 - ratio1;

    return (
      <button className="flex border rounded-lg mx-4">
        <a href="https://www.tiktok.com/@allstarsgamingro">
        <span className="rounded-l-lg text-white bg-red-500 px-10 py-2" style={{ flex: ratio1 }}>
          {text1}
        </span>
        <span className="rounded-r-lg text-white bg-blue-500 px-10 py-2" style={{ flex: ratio2 }}>
          {text2}
        </span>
        </a>
      </button>
    );
  }
  function DualColorButton1( text1, text2 ) {
    const totalLength = text1.length + text2.length;
    const ratio1 = text1.length / totalLength;
    const ratio2 = 1 - ratio1;

    return (
      <button className="flex border rounded-lg mx-4">
        <a href="https://www.instagram.com/allstarsgamingro/">
        <span className="rounded-l-lg text-white bg-red-500 px-10 py-2" style={{ flex: ratio1 }}>
          {text1}
        </span>
        <span className="rounded-r-lg text-white bg-blue-500 px-10 py-2" style={{ flex: ratio2 }}>
          {text2}
        </span>
        </a>
      </button>
    );
  }
  function DualColorButton2( text1, text2 ) {
    const totalLength = text1.length + text2.length;
    const ratio1 = text1.length / totalLength;
    const ratio2 = 1 - ratio1;

    return (
      <button className="flex border rounded-lg">
        <a href="https://www.youtube.com/channel/UCju1YCClDspmThj_iifpeUw">
        <span className="rounded-l-lg text-white bg-red-500 px-10 py-2" style={{ flex: ratio1 }}>
          {text1}
        </span>
        <span className="rounded-r-lg text-white bg-blue-500 px-10 py-2" style={{ flex: ratio2 }}>
          {text2}
        </span>
        </a>
      </button>
    );
  }

function PartenerMedia () {
    return (
        <>
        <center><h1 className="font-bold text-white">ALLSTARS GAMING: Partener Media</h1></center>
        <center><a href="INSERT CUPRINS HERE"><h2 className=" font-neuropolxbold underline" style ={{color: '#78e800', fontWeight: 'bold'}}>CUPRINS</h2></a></center>
        <center><img src="https://allstars-gaming.ro/wp-content/uploads/2022/07/logo-allstars-mic2.png"></img></center>
        <br></br>
        <br></br>
        <br></br>
        <center><h3 className='pb-32 text-white'>Pentru ediția curentă de LANParty, avem onoarea să colaborăm cu una dintre organizațiile eSports de prestigiu din România: <a className="text-[#78e800] underline" href="">AllStars Gaming</a> ca partener media oficial.</h3></center>
        <center><a href="INSERT LINK BUTON HERE"><button className="bg-[#78e800] text-black font-bold py-2 px-20 rounded"> BUTONUL NOSTRU    </button></a></center>
            <div className="flex justify-center pt-9">
                {DualColorButton("50k", "TikTok")}
                {DualColorButton1("116k", "Instagram")}
                {DualColorButton2("1.07M", "YouTube")}
            </div>
        </>
    )
}

export default PartenerMedia;