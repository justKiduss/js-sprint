import { useEffect,useState } from "react";
import {fetchMovies} from "../hooks/MovieService" 
export default function useMovies(){
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
       fetchMovies()
       .then((res)=>setData(res.results))
       .catch(()=>setError(false))
       .finally(()=>setLoading(false))
    },[])
     return {data,loading,error}
}