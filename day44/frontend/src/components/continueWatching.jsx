 import { useEffect, useState } from "react";
 import { Link } from "react-router-dom";
 export default function ContinueWatching(){
    const [data,setData]=useState([]);
    useEffect(()=>{
    const watching=localStorage.getItem('continue_watching');
        setData(JSON.parse(watching) || []);
    },[])
     return(
            <>
                <h1 className="text-2xl m-10">Continue Watching</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {data.map((movie) => (
                        <div key={movie.movieId} className="flex flex-col">
                            <Link to={`/${movie.type || 'movie'}/${movie.movieId}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                                    alt={movie.title || movie.name}
                                    className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
                                />
                            </Link>
                            <p className="mt-2 text-sm font-semibold truncate">
                                {movie.title}
                            </p>
                        </div>
                    ))}
                </div>
            </>
        )
 }