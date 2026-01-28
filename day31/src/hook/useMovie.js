import { useReducer, useEffect } from "react";
import { Movie, searchMovie } from "../service/MovieService";
import reducer from "../reducer/reducer";

export default function useMovie(mode,query){
    const [state,dispatch]=useReducer(reducer,{
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
        query?searchMovie(query):Movie()
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
    console.log(state)
    return state
}