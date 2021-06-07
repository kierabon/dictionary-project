import React, {useState} from "react";

export default function Dictionary() {
    const [keyword, setKeyword]= useState("");
    function search(event){
        event.preventDefault();
        alert`Searching for ${keyword}`;
    }
    function updateKeyword(event){
        setKeyword(event.target.value);
    }
return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={updateKeyword}/>
            <input type="submit"className="btn btn-dark m-3" />
        </form>
    </div>
);

}