import { useEffect,useState } from "react";
import {fetchMovies,searchMovies} from "../hooks/MovieService" 
export function useMovies({mode,query}){
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
      let ignore=false;
      setLoading(true);
      setError(null);

      const promise=mode==="search" && query?
      searchMovies(query):
       fetchMovies();
       promise
       .then((res)=>{
         if (!ignore) setData(res.results || [])
      })
       .catch(()=>{
         if (!ignore) setError(false)
      })
       .finally(()=>{
         if (!ignore) setLoading(false)
      })

      return()=>{
         ignore=true
      }
    },[mode,query])
     return {data,loading,error}
}
export function useMovie(){
   // const [searchData,setSearchData]=useState([]);
   // const [error,setError]=useState(null);
   // const [loading,setLoading]=useState(true)

   // useEffect(()=>{
   //    searchMovies()
   //    .then((res)=>setSearchData(res.results))
   //    .catch(()=>setError(false))
   //    .finally(()=>setLoading(false))
   // },[])
   // console.log("search",searchData)
   // return {searchData,loading,error}
}