import { useEffect, useState } from "react";
import { Movies, searchMovies } from "../service/MovieService";

export default function useMovie(){
    const [data,setData]=useState([]);
    const [error,setError]=useState("null")
    useEffect(()=>{
        const ignore=false;
        query?searchMovies(query):Movies()
        .then((res)=>{
            if(!ignore){
                setData(res.results);
            }
        }).catch((err)=>{
            if(!ignore){
                setError(err.message)
            }
        })

        return ()=>{
            ignore=true;
        }
    },[query,mode])
}