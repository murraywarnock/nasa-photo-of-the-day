// import React, { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
// element for entire component here
  color: black;
//  within component listed by element
  .img-container {
    display: block;
    justify-content: center;
    align-items: center;
  }
  .image {
    /* height: 50%; */
    max-width: 50%;
    &:hover {
      transform: scale(1.2); //had to change display to inline-block for this to work
      transition: all .5s ease-in-out;
    }
    transition: all .5s ease-in-out;
  }
  .img-text {
    width: 50%;
    text-align: left;
    padding-left: 25%;
  }

  p {
    color: blue;
  }
  .imgTitle {
    color: black;
    font-weight: bold;
  }
`

export default function Photo({imgDate, imgURL, title, imgExplanation}) {
    return (
    <StyledPhoto>
    <div className="App">
      <h1><span className="blowup">NASA Image of the Day {imgDate}</span></h1>
      <div className="img-container" >
        {/* console.log(apod.url); */}
        {/* <button>Previous</button> */}
        <img className = "image" src={imgURL} alt="NASA APOD"></img>
        {/* <button>Next</button> */}
      </div>
      <p className = "imgTitle "> {title}</p>
      <p className = "img-text">

        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
        {imgExplanation}
        </p>
    </div>
    </StyledPhoto>
    )
};