import { useEffect,useState } from "react";
import {fetchMovies,searchMovies} from "../hooks/MovieService" 
export function useMovies(){
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
export function useMovie(){
   const [data,setData]=useState([]);
   const [error,setError]=useState(null);
   const [loading,setLoading]=useState(true)

   useEffect(()=>{
      searchMovies()
      .then((res)=>setData(res.results))
      .catch(()=>setError(false))
      .finally(()=>setLoading(false))
   },[])
   console.log("search",data)
   return {data,loading,error}
}