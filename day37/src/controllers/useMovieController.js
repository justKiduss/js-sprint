import { useEffect, useReducer } from "react";
import MoiveReducer from "../reducers/MoiveReducer";
import {SearchMovie,Movie} from "../service/MovieService"
export function useMovieController(query){
    const [state,dispatch]=useReducer(MoiveReducer,[{status:'idle',data:[],error:null}]);
    useEffect(()=>{
        let ignore=false;
        dispatch({type:"LOADING"})
        const fechedMovies=async ()=>{ 
            const movies=query?await SearchMovie():await Movie();
            try{
                if(!ignore){
                    dispatch({
                    type:'SUCCESS',
                    payload:await movies.results
                })
            }
            }catch(err){
                if(!ignore){
                dispatch({
                    type:'FAILURE',
                    payload: await err.message
                })
            }
            }
        }
        fechedMovies();

        return ()=>{
            ignore=true;
        }
    },[query])
    console.log(state)
    return state;
} 