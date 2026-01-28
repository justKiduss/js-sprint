import { useEffect } from "react";
import useMovie from "../hook/useMovie";
import MovieList from "./MovieList";
import { saveMovie } from "../persistence/persistence";

export default function DashBoard({mode,query}){
    const {state,dispatch}=useMovie(mode,query)
    const {status,data,error} =state;

    useEffect(()=>(
        saveMovie(data)
    ),[data])
    
    if(status==="loading") {
        return(
                <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>LOADING ...</p>
            )}
    if(status==="error") {
        return (
        <p>Error while fetching</p>
    )}
    return  <MovieList data={data} dispatch={dispatch}/> 
}