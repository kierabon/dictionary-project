import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary() {
    const [keyword, setKeyword]= useState("sunset");
    const [results,setResults]= useState(null);
    const [loaded, setLoaded]= useState(false);
    
    function handleResponse(response){
        setResults(response.data[0]);
    }
    function search (){
  let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
            
    </div>
);} else{ load();
            return "Loading..." }

}