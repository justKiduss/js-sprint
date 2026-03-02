import { useEffect} from "react";
import {SearchMovie,Movie} from "../service/MovieService"
import { useDispatch, useSelector } from "react-redux";
export default function useMovieController(query){
    // const [state,dispatch]=useReducer(MoiveReducer,{status:'idle',data:[],error:null});
    const state=useSelector(state =>state.movies);
    const dispatch=useDispatch();
    useEffect(()=>{
        let ignore=false;
        dispatch({type:"LOADING"})
        const fechedMovies=async ()=>{ 
            try{
                const movies=query?await SearchMovie(query):await Movie();
                if(!ignore){
                    dispatch({
                    type:'SUCCESS',
                    payload:movies.results
                })
            }
            }catch(err){
                if(!ignore){
                dispatch({
                    type:'FAILURE',
                    payload:err.message
                })
            }
            }
        }
        fechedMovies();
        return ()=>{
            ignore=true;
        }
    },[query,dispatch])
    return state;
} 