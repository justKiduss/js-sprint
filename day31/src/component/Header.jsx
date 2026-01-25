import { useState } from "react"

export default function Header({onSearch}){
    const [search,setSearch]=useState("");
    function handleSearch(e){
        e.preventDefault();
        if(!search.trim()){
            return 
        }
        onSearch=search;
    }
    return(
        <>
            <div>
                <h2>Movie Paradise</h2>  
                <form onSubmit={handleSearch}>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}