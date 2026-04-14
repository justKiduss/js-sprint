import ReviewReducer from "../reducer/reviewReducer"
import useMovies from "../hooks/useMovies"
import MovieList from "./movieList";
import useReview from "../hooks/useReview";
import { useEffect,useReducer } from "react";

export default function DashBoard({query}){
    const [state,dispatch]=useReducer(ReviewReducer,{byIds:{},allIds:[]})
    const movies=useMovies(query);
    const reviews=useReview(state,dispatch);
    // console.log(reviews.hydrate);
    useEffect(()=>{
        reviews.hydrate();
    },[])
    return(
        <>
            {movies.data.length > 0 &&
                <MovieList movies={movies} reviews={reviews} reviewState={state} />
            }
        </>
    )
}