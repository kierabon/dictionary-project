import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props){
   
    
    if (props.results){
         let word = props.results.word
    return(
        <div className="Results">
            <section>
            <h2>{word.toUpperCase()}</h2>
            {props.results.phonetics.map(function(phonitic, index){
                return( <div key={index}> 
                <Phonetic phonetic={phonitic} />
                </div>)
            })}
            </section> <br />
            {props.results.meanings.map (function (meaning,index) {
                return( 
                    <section key={index}>
                        <Meaning meaning={meaning} />
                    </section> )
                
                      }      )}
        </div>
    );
    } else {
        return null;
         }
}