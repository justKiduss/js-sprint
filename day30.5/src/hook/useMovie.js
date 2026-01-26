import { useState } from "react";
import {Movies,searchMovie} from "../service/MovieService"
export default function useMovie(mode,query){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false)
    try{
        query? searchMovie(mode,query):Movies()
        .then((res)=>res.json())
        .then((res)=>setData(res.results))
        .catch(()=>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })
        console.log("data",data)
        return {data,loading,error}
    }catch(error){
        console.log(error)   
    }
}