import React from "react";

export default function Background() {
    const containerStyle = {
        backgroundColor: '#0a5500',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: `100vh`,
        //height: `${window.innerHeight.toString()}vh`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (

        <div style={containerStyle}>

            <h1>Background image brings me pain in the ass </h1>
        </div>
    );
};