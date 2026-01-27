import { useReducer, useState } from "react";
import { Movie, searchMovie } from "../service/movieService";

export default function useMovie({mode,query}){
    const [state,dispatch]=useReducer(useReducer,{
        status:"idle",
        data:[],
        error:null
    })
    useEffect(()=>{
        let ignore=false;
        if(mode ==="search" && !query) return;
        
        dispatch({
          type:"LOADING"
        })
        query?searchMovie():Movie()
        .then((res)=>{
            if(!ignore){
                dispatch({
                    type:"SUCCESS",
                    payload:res.results,
                })
            }
        }).catch((err)=>{
            if(!ignore){
                dispatch({
                    type:"ERROR",
                    payload:err.message
            }) 
           }
        })
        return ()=>{
            ignore=true;
        }
    },[mode,query])
    return state
}