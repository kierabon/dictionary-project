import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props) {
    const [keyword, setKeyword]= useState(props.defaultKeyword);
    const [results,setResults]= useState(null);
    const [loaded, setLoaded]= useState(false);
    const [photos, setPhotos]= useState (null);
    
    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search (){
     let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

     let pexelsApiKey="563492ad6f9170000100000106ce1a3bb521403a86da2a4194deb2d5";
      let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=12`
      let headers= {Authorization: `Bearer ${pexelsApiKey}`}; 
      axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
      search();
    }

    function updateKeyword(event){
        setKeyword(event.target.value);
    }

 function load(){
        setLoaded(true);
        search();
 }

 if(loaded){
  return (
    <div className="Dictionary">
        
        <section>
            <h5>What do you want to lookup?</h5>
        <form onSubmit={handleSubmit}>
            <input type="search" autoFocus={true} onChange={updateKeyword} className="search" />
               <input type="submit"className="btn btn-dark m-3" value="Search" />
        </form>
        </section>
        <br />
        <Results results={results}/>
        <Photos photos={photos} />
            
    </div>
);} else{ load();
            return "Loading..." }

}