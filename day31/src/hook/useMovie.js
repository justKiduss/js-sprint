import { useState } from "react";
import {Movies,searchMovie} from "../service/MovieService"
export default function useMovie(){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false)

    try{
        Movies()
        .then((res)=>res.json())
        .then((res)=>setData(res.results))
        .catch(()=>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })
        return {data,loading,error}
    }catch(error){
        console.log(error)   
    }
}