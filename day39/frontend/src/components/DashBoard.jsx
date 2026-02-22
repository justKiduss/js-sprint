import { useEffect, useReducer } from "react";
import MovieList from "./MovieList";
import ReviewReducer from "../reducers/ReviewReducer";
import useReviewController from "../controllers/useReviewController";
import useMovieController from "../controllers/useMovieController"
export default function DashBoard({query}){
    const [state,dispatch]=useReducer(ReviewReducer,{byIds:{},allIds:[]})
    const movies=useMovieController(query);
    const reviews=useReviewController(state,dispatch)

    useEffect(()=>{
        reviews.hydrate();
    },[])
    return(
        <>
            {movies.data.length >0&&
                <MovieList movies={movies} reviews={reviews} reviewState={state}/>
            }
        </>
    )
}