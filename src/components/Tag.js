import { useEffect, useState } from "react"
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY =  process.env.REACT_APP_GIPHY_API_KEY;

  function Tag() {

// const [gif, setGif] = useState(" ");    
// const [loading , setLoading] = useState('false');
const [tag, setTag] = useState("Car")

// async function fetchData()
// {
//   setLoading(true); //This is because network call take time so we see this loading loader
// const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
// const {data}=  await axios.get(url);
// const imageSource = data.data.images.downsized_large.url;
// console.log(imageSource);
// setGif(imageSource)
// console.log("this is api data" );
// setLoading(false); //The network call completely load the data then we setLoading false here

// }


// useEffect( ()=>{

//   fetchData();

// }, [])


const {gif, loading, fetchData} = useGif(tag)

// const clickHandler = ()=>{

// fetchData();
// }





  return(<div className="w-1/2  bg-green-500 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]">

<h1 className="mt-[15px] text-2xl uppercase underline font-bold">
 A Random {tag} Gif
</h1>
{
  loading ? (<Spinner/>):( <img src={gif} width="450" />)
}


<input
  className="w-10/12  bg-yellow-500 text-lg py-2 rounded-lg mb-[3px] text-center"
value={tag}
  onChange={(event)=>setTag(event.target.value)}
/>
 

  <button onClick={()=>fetchData(tag)}
  className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg"
  >
    Generate

  </button>

    </div>) 
}

export default Tag;