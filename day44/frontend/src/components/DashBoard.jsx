import ReviewReducer from "../reducer/reviewReducer"
import useMovies from "../hooks/useMovies"
import MovieList from "./movieList";
import useReview from "../hooks/useReview";
import { useEffect,useReducer } from "react";
import { useOutletContext } from "react-router-dom";
import TrendingMovies from "./trendingMovies";
import PopularMovies from "./popularMovies";

export default function DashBoard(){
    const {query}=useOutletContext();
    console.log("Current search term:", query);
    const movies=useMovies(query);
    // console.log(reviews.hydrate);
   
    return(
        <>  
            <TrendingMovies/>
            <PopularMovies/>
            {/* {movies.data.length > 0 &&
                <MovieList movies={movies} query={query}/>
            } */}
        </>
    )
}