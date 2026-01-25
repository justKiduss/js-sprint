import { useEffect,useState } from "react";

 const APIKEY="9ba860f27b8af2a4d997f80a66b063b5"

 export function Movie(){
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    useEffect(()=>{
    let ignore=false;
        const movies=fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${search}`)
        movies.then((r)=>(
                r.json()
        ))
        .then((r)=>{
            if(!ignore){
                setData(r.results)
            }
        })
        .catch((err)=>{
            if(!ignore){
            return err
            }
        })
        return ()=>{
            ignore=true
    }
    },[search]) 
    
    return(
        <>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <form>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="Search"/>
                    <MovieList data={data} search={search}/>
                </form>
            </div>
        </>
    )
 }

export function MovieList({data,search}){
    return(
        <>
        {search && 
            <div>
                {data.map((data)=>(
                    <div key={data.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                        <p>{data.original_title}</p>
                    </div>
                ))}
            </div>
        }
        </>
    )
}