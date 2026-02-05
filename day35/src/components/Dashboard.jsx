// import { useEffect, useReducer } from "react";
import useMovieController from "../controllers/useMovieController";
import MovieList from "./MovieList";
// import CRUDreducer from "../reducers/CRUDreducer";

export default function DashBoard({query}){
    const datas=useMovieController(query);
    // const [state,dispatch]=useReducer(CRUDreducer,initialState)

    // console.log(state)
    return(
        <MovieList 
            datas={datas.data} 
            loading={datas.loading} 
            error={datas.error} 
        />
    )
}