import React, {useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from './constants/index'

import "./App.css";
import Photo from "./Photo";

function App() {

  const [apod, setApod] = useState({});
  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setApod(res.data);
      console.log(res);
      // apod is default {} here
    })
    .catch( err => {
      console.log(err);
    })
  }, []);
  // console.log(apod); //apod is visible with data here
  return <Photo imgExplanation={apod.explanation} imgDate={apod.date} imgURL={apod.hdurl} />;
}

export default App;
