import { useState,useEffect } from "react";
import {Movies,searchMovie} from "../service/MovieService"
export default function useMovie(mode,query){
    const [state,setState]=useState({
        status:"idle",
        data:[],
        error:null,
    });
    useEffect(()=>{
        let ignore=false;
        setState({status:"loading",data:[],error:null})

        const request=query? searchMovie(query):Movies();
        request
        .then((res)=>{
            if(!ignore){
                setState({
                    status:"success",
                    data:res.results,
                    error:null
            })
        }})
        .catch((err)=>{
            if(!ignore){
                setState({
                    status:"error",
                    data:[],
                    error:err.message
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