import { useState } from "react"
export default function Header({onSearch}){
    const header={
        gap:"60px",
        display:"flex",
        alignItems:"center",
        padding:"10px",
        backgroundColor:"rgb(0, 122, 204)",
        height:"35px"
    }
    const formStyle={
        display:"flex",
        gap:"8px"
    }
    const [searchMov,setSearchMov]=useState("");
    function HandleSearch(e){
        e.preventDefault();
        if(!searchMov.trim()){
            return []
        }
        onSearch(searchMov);
        setSearchMov("");
    }
    return(
        <div style={header}>
            <h1>MovieParadise</h1>
            <form style={formStyle} onSubmit={HandleSearch}>
                <input type="text" onChange={(e)=>setSearchMov(e.target.value)} value={searchMov}/>
                <button type="submit">search</button>
            </form>
        </div>
    )
}