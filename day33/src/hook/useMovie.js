import { useEffect, useReducer} from "react";
import { Movies, searchMovies } from "../service/MovieService";
import reducer from "../reducers/reducer";

export default function useMovie(mode,query){
    const [state,dispatch]=useReducer(reducer,{status:"idle",data:[],loading:false})
    useEffect(()=>{
        let ignore=false;
        dispatch({status:"LOADING"});
        query?searchMovies(query):Movies()
        .then((res)=>{
            if(!ignore){
               dispatch({
                type:"SUCCESS",
                payload:res.results
               }) 
            }
        }).catch((err)=>{
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
    },[query,mode])
    return state;
}