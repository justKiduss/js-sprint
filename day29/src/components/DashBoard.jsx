import { useState } from "react"
import MovieCard from "./MovieCard"

export default function DashBoard(){
    const [category,setCategory]=useState("Browser")
    const [dash,setDash]=useState("Browser") 
    // css
    const categoryList={
        display:"flex",
        listStyle:"none",
        gap:"10px",
        marginLeft:"-20px"
    }
    const listStyle={
       textDecoration:dash?"underline":"none",
    }
    const bodyStyle={
        width:"90%",
        height:"100vh"
    }
    return(
        <div style={bodyStyle}>
            <ul style={categoryList}>
                <li onClick={()=>{setDash("Browser");setCategory("Browser")}} style={{textDecoration:dash==="Browser"?"underline":"none"}} value={category}>Browser</li>
                <li onClick={()=>{setDash("Movies");setCategory("Movies")}} style={{textDecoration:dash==="Movies"?"underline":"none"}}>Movies</li>
                <li onClick={()=>{setDash("Series");setCategory("Series")}} style={{textDecoration:dash==="Series"?"underline":"none"}} >Series</li>
                <li onClick={()=>{setDash("Forum");setCategory("Forum")}} style={{textDecoration:dash==="Forum"?"underline":"none"}}>Forum</li>
            </ul>
            <MovieCard/>
        </div>
    )
}