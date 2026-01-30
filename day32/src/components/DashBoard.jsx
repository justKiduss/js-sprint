import { useEffect, useReducer } from "react";
import useMovie from "../hook/useMovie"
import MovieList from "./MovieList";
import CRUDreducer from "../reducers/CRUDreducer";
import { loadMovie, saveMovie } from "../persistence/Persistence";

export default function DashBoard({query}){
    let fecthed=useMovie(query);
    const initialState={byId:{},allIds:[]};
    const [crudState,cruddispatch]=useReducer(CRUDreducer,
        initialState,()=>loadMovie()||initialState)

    useEffect(()=>{
        saveMovie(crudState)
},[crudState])
    return( <MovieList datas={fecthed} dispatch={cruddispatch} state={crudState}/>)
}