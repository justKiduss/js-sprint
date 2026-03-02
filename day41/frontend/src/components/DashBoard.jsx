import { useEffect} from "react";
import { useDispatch } from "react-redux";
import MovieList from "./MovieList";
import useReviewController from "../controllers/useReviewController";
import useMovieController from "../controllers/useMovieController"
export default function DashBoard({query}){
    // const [state,dispatch]=useReducer(ReviewReducer,{byIds:{},allIds:[]})
    const dispatch=useDispatch();
    const movies=useMovieController(query);
    console.log(movies);
    const reviews=useReviewController(dispatch)
    useEffect(()=>{
        reviews.hydrate();
    },[])
    return(
        <>
            {movies.data.length >0&&
                <MovieList movies={movies} reviews={reviews}/>
            }
        </>
    )
}