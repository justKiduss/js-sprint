import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { tvSeries, tvSeriesEpisodes } from "../service/movieService";
import StreamingTv from "../components/streamingTv";
export default function TvDetail(){
    const {movieId,type}=useParams();
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(true);
    const [seasons,setSeasons]=useState([]);
    const [episodes,setEpisodes]=useState([]);
    const [selectedSeason,setselectedSeason]=useState(null);
    const [selectedEpisode,setSelectedEpisode]=useState(null);
    const [tv,setTv]=useState(null);
    useEffect(()=>{
        async function load(){
            try{
                setLoading(true);
                setError(false);
                const data=await tvSeries(movieId);
                const normalized={
                    id:data.id,
                    title:data.title || data.name,
                    poster_path:data.poster_path,
                    backdrop_path: data.backdrop_path,
                    rating: data.vote_average,
                    overview: data.overview,
                }

                setTv(normalized);
                setSeasons(data.seasons);
            }catch(err){
                setError("failed to load tv series");
            }finally{
                setLoading(false);
            }
        }
        load();
    },[movieId])

    useEffect(()=>{
        if(!selectedSeason) return;
        async function episodeload(){
            try{
                setLoading(true);
                setError(false);
                const data=await tvSeriesEpisodes(movieId,selectedSeason);
                setEpisodes(data);
            }catch(err){
                setError("failed to load tv series episodes");
            }finally{
                setLoading(false);
            }
        }
        episodeload();
    },[movieId,selectedSeason])

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

    return(

        <>
            <div>
                <StreamingTv selectedEpisode={selectedEpisode} 
                    movieId={movieId} 
                    selectedNum={selectedSeason} 
                    movie={tv}
                />
                <div>
                    {seasons.map((season)=>(
                        <button key={season.id} className="bg-black text-white px-3 py-1 rounded"
                            onClick={()=>setselectedSeason(season.season_number)}>
                            {season.name}
                        </button>
                    ))}
                </div>
                <div>
                    {episodes.map((ep) => (
                        <button key={ep.id} className="p-2 border-b bg-black text-white flex-col" onClick={()=>setSelectedEpisode(ep.episode_number)}>
                            Episode {ep.episode_number}: {ep.name}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}