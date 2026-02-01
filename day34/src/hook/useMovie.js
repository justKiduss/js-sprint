import { useEffect, useReducer } from "react";
import MovieReducer from "../reducers/MovieReducer";
import { Movies, searchMovie } from "../service/MovieService";

export default function useMovie(mode,query){

    const [state,dispatch]=useReducer(MovieReducer,{status:"idle",data:[],error:null});
    useEffect(()=>{
        let ignore=false;
        dispatch({type:"LOADING"})
        const fetchData=async ()=>{
        try{
            const res=query?await searchMovie(query):await Movies()
            if(!ignore){
                dispatch({
                type:"SUCCESS",
                payload:res.results
        })
        }}catch(err){
             if(!ignore){
                dispatch({
                    type:"FAILURE",
                    payload:err.message
                })}
            }}
            fetchData();
            
            return ()=>{
                ignore=true;
            }
    },[mode,query])
    console.log(state);
    return state
}