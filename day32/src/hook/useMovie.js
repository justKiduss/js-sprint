import { useEffect, useReducer } from "react";
import {Movie, searchMovie} from "../service/MovieService";
import reducer from "../reducers/reducer";

export default function useMovie(query){
    const [state,dispatch]=useReducer(reducer,{
        status:"idle",
        data:[],
        error:null
    }) 
    useEffect(()=>{
        let ignore=false;
            dispatch({
                type:"LOADING"
            })
        query?searchMovie(query):Movie()
        .then((res)=>{
            if(!ignore){
                dispatch({
                    type:"SUCCESS",
                    payload:res.results
        })}
        })
        .catch((err)=>{
            if(!ignore){
                dispatch({
                    type:"FAILURE",
                    payload:err.message
                })
            }
        })
        return ()=>{
            ignore=true;
        }
    },[query])
    console.log("useMovie",state);
    return state;
}