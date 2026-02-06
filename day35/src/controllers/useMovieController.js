import { useEffect, useReducer } from "react";
import MovieReducer from "../reducers/MovieReducer";
import { Movies, SearchMovies } from "../service/MovieService";

export default function useMovieController(query){
    const [state,dispatch]=useReducer(MovieReducer,{status:"Idle",data:[],error:null})

    useEffect(()=>{
        let ignore=false;
        dispatch({type:"LOADING"})

        const fetchedData= async()=>{
        try{
        const res=query?await SearchMovies(query): await Movies();
                if(!ignore){
                    dispatch({
                        type:"SUCCESS",
                        payload:res.results
                    })
                }
        }catch(err){
                if(!ignore){
                    dispatch({
                        type:"FAILURE",
                        payload:err.message
                    })
                }
        }
    }

        fetchedData();
        return ()=>{
            ignore=true;
        }
    },[query])
    console.log(state)
return state;
}