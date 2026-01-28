import { useState } from "react";
export default function Header({onSearch}){
    const [search,setSearch]=useState("");
    function handleSearch(e){
        e.preventDefault();
        if(!search.trim()){
            return
        }
        onSearch(search);
        setSearch("");
    }
    return(
        <>
            <div>
                <form onSubmit={handleSearch}>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}