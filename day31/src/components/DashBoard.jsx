import { useEffect,useReducer } from "react";
import useMovie from "../hook/useMovie";
import MovieList from "./MovieList";
import { loadMovie, saveMovie } from "../persistence/persistence";
import CRUDreducer from "../reducer/CRUDreducer"
export default function DashBoard({mode,query}){
    const api=useMovie(mode,query)
    // const {status,data,error} =state;
    const [localState,localDispatch]=useReducer(CRUDreducer,{},loadMovie);
    useEffect(()=>{
        if(api.data.length > 0) saveMovie(localState)
        },[localState])
    
    if(api.status==="loading") {
        return(
                <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>LOADING ...</p>
            )}
    if(api.status==="error") {
        return (
        <p>Error while fetching</p>
    )}
    return  <MovieList data={api.data} localState={localState} localDispatch={localDispatch}/> 
}