import { useState } from "react"

export default function Header({onsearch}){
    const [search,setSearch]=useState("");
    const handleSearch=(e)=>{
        e.preventDefault();
        if(!search.trim()) return 
        onsearch(search);
        console.log()
        setSearch("");
    }
    return(
        <>
            <div>
                <form onSubmit={handleSearch}>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </>
    )
}