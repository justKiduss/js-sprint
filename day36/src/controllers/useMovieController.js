import { useEffect, useReducer } from "react";
import { Movies, SearchMovie } from "../service/MovieService";
import MovieReducer from "../reducers/MoiveReducer"
export default function useMovieController(query){
    const [state,dispatch]=useReducer(MovieReducer,{status:'idel',data:[],error:null});

    useEffect(()=>{
        let ignore=false; 
        const fetchedMovies= async()=>{
            try{
                const res=query?await SearchMovie(query):await Movies();
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
        fetchedMovies();
        return ()=>{
            ignore=true
        }
    },[query])
    console.log(state);
    return state;
}