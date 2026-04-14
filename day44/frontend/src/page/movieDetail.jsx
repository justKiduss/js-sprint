import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailService from "../service/movieDetail";
export default function MovieDetail(){
    const {movieId}=useParams();
    const [movie,setMovie]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        async function load(){
            try{
                setLoading(true);
                setError(null);

                const data=await MovieDetailService(movieId);
                setMovie(data);
            }catch(err){
                setError("failed to load movie")
            }finally{
                setLoading(false);
            }
        }

        load();
    },[movieId]);

    if(loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
    if (error) {
        return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-red-500">{error}</p>
        </div>
        );
    }
    if (!movie) return null;
    return (
        <div className="max-w-5xl mx-auto p-4 space-y-6">

      {/* Video Section */}
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow">
        <iframe
          src={`https://vsembed.ru/embed/movie/${movieId}`}
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      {/* Movie Info */}
      <div className="flex flex-col md:flex-row gap-6">

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-64 rounded-lg shadow"
        />

        <div className="space-y-3">
          <h1 className="text-2xl font-bold">{movie.title}</h1>

          <p className="text-gray-600 leading-relaxed">
            {movie.overview}
          </p>

          <div className="text-sm text-gray-500">
            Rating: <span className="font-medium">{movie.vote_average}</span>
          </div>
        </div>
      </div>
    </div>
    )
}