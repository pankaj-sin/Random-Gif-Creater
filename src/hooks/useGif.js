import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
// import tag from '../components/Tag';

// import REACT_APP_GIPHY_API_KEY from ".env";

// let REACT_APP_GIPHY_API_KEY= "Qdr3fLI5f3EVYUrlemwkZWNfzDEh2bcB";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

console.log("chekcing for api key",API_KEY)

const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

console.log('checking for url ', url);

function useGif(tag) {
    const [gif, setGif] = useState(" ");    
    const [loading , setLoading] = useState('false');
   
    
    
    async function fetchData()
    {
      setLoading(true); //This is because network call take time so we see this loading loader
    
    const {data}=  await axios.get(tag ? `${url}&tag=${tag}`: url );
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource)
    console.log("this is api data" );
    setLoading(false); //The network call completely load the data then we setLoading false here
    
    }
    
    
    useEffect( ()=>{
    
      fetchData();
    
    }, [])
    
      return {gif, loading, fetchData}
}

export default useGif