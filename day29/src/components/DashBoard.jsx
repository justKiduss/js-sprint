import { useState } from "react"
import MovieCard from "./MovieCard"

export default function DashBoard(){
    const [category,setCategory]=useState("All")
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
    return(
        <div>
            <ul style={categoryList}>
                <li onClick={(e)=>{setDash("Browser");setCategory("Browser")}} style={listStyle}>Browser</li>
                <li onClick={(e)=>{setDash("Movies");setCategory("Movies")}} style={listStyle}>Movies</li>
                <li onClick={(e)=>{setDash("Series");setCategory("Series")}} style={listStyle}>Series</li>
                <li onClick={(e)=>{setDash("Forum");setCategory("Forum")}} style={listStyle}>Forum</li>
            </ul>
            <MovieCard/>
        </div>
    )
}