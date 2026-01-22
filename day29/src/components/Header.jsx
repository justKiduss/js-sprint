import { useEffect, useState } from "react"
import { searchMovies } from "../hooks/MovieService";
export default function Header(){
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
    useEffect(()=>{
        searchMovies(searchMov);
    },[])
    setSearchMov("");
    return(
        <div style={header}>
            <h1>MovieParadise</h1>
            <form style={formStyle}>
                <input type="text" onChange={(e)=>setSearchMov(e.target.value)} value={searchMov}/>
                <input type="submit"/>
            </form>
        </div>
    )
}