import { useState } from "react"
import MovieCard from "./MovieCard"

export default function DashBoard({mode,query}){
    const [dash,setDash]=useState("Browser") 
    // css
    const categoryList={
        display:"flex",
        listStyle:"none",
        gap:"10px",
        marginLeft:"-20px"
    }
    const bodyStyle={
        width:"90%",
        height:"100vh"
    }
    return(
        <div style={bodyStyle}>
            <ul style={categoryList}>
                <li onClick={()=>{setDash("Browser")}} style={{textDecoration:dash==="Browser"?"underline":"none"}}>Browser</li>
                <li onClick={()=>{setDash("Movies")}} style={{textDecoration:dash==="Movies"?"underline":"none"}}>Movies</li>
                <li onClick={()=>{setDash("Series")}} style={{textDecoration:dash==="Series"?"underline":"none"}} >Series</li>
                <li onClick={()=>{setDash("Forum")}} style={{textDecoration:dash==="Forum"?"underline":"none"}}>Forum</li>
            </ul>
            <MovieCard mode={mode} query={query}/>
        </div>
    )
}