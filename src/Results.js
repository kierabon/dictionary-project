import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic"

export default function Results(props){
   
    
    if (props.results){
         let word = props.results.word
    return(
        <div className="Results">
            <h2>{word.toUpperCase()}</h2>
            {props.results.phonetics.map(function(phonitic, index){
                return( <div key={index}> 
                <Phonetic phonetic={phonitic} />
                </div>)
            })}
            {props.results.meanings.map (function (meaning,index) {
                return(
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div> )
                
                      }      )}
        </div>
    );
    } else {
        return null;
         }
}