// import React, { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
// element for entire component here
  color: green;
//  within component listed by element
  .blowup {
  // h1 {
    color: black;
    &:hover {
      color: red;
      transform: scale(1.2); //this works in h1, but not in .blowup class
      transition: all .5s ease-in-out;
    }
    transition: all .5s ease-in-out;
  }
  .image {
    /* height: 50%; */
    width: 80%;
  }
  .img-text {
    width: 50%;
    text-align: left;
    padding-left: 25%;
  }

  p {
    color: blue;
  }
`

export default function Photo(props) {
    const {imgURL, imgExplanation, imgDate} = props;
    // const {imgExplanation, imgDate} = props;
    return (
    <StyledPhoto>
    <div className="App">
      <h1><span className="blowup">NASA Image of the Day {imgDate}</span></h1>
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
    </StyledPhoto>
    )
};