import useMovie from "../hook/useMovie";
import MovieList from "./MovieList";

export default function DashBoard({mode,query}){
    const {state,dispatch}=useMovie(mode,query)
    const {status,data,error} =state;

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