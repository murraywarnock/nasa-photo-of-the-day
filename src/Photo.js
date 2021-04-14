// import React, { useState, useEffect } from 'react';
import React from 'react';
export default function Photo(props) {
    const {imgURL, imgExplanation, imgDate} = props;
    // const {imgExplanation, imgDate} = props;
    return (
    <div className="App">
      <h1>NASA Image of the Day {imgDate}</h1>
      <div className="img-container" >
        {/* console.log(apod.url); */}
        <img className = "image" src={imgURL} alt="NASA APOD"></img>
        <p className = "img-text">
          {/* Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
          {imgExplanation}
        </p>
      </div>
    </div>
    )
};