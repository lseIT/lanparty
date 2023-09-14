import React from "react";
//TODO Create background
export default function Background() {
    //array cu imaginile folosite
    /*
    const backgroundImages = [
        'BackgroundPictures/LOLPicture/LOL1.jpg',
        'BackgroundPictures/LOLPicture/LOL2.jpg',
        'BackgroundPictures/LOLPicture/LOL3.jpg',
        'BackgroundPictures/LOLPicture/LOL4.png',
        'BackgroundPictures/CSGOPicture/CS1.jpg',
        'BackgroundPictures/CSGOPicture/CS2.jpg',
        'BackgroundPictures/CSGOPicture/CS3.jpg',
        'BackgroundPictures/CSGOPicture/CS4.jpg',
        // Add more image URLs as needed
    ];
    */

    const containerStyle = {
        backgroundImage: `url(${require('./BackgroundPictures/Neutral1.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        //flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        //TODO Add background image
        //TODO make it change occasionally
        <div style={containerStyle}>

            <h1>Background image brings me pain </h1>
        </div>
    );
};