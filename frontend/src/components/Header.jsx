import { useState } from "react";

export default function Header({onSearch}){
    const [search,setSearch]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(!search.trim()) return
        onSearch(search);
        setSearch("");
    }
    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    <button type="submit">submit</button>
                </form>
            </div>
        </>
    )
}