import {useEffect, useReducer } from "react";
import useMovieController from "../controllers/useMovieController";
import MovieList from "./MovieList";
import useReviewController from "../controllers/useReviewController";
import ReviewReducer from "../reducers/ReviewReducer";

export default function DashBoard({query}){
    const datas=useMovieController(query);
    const initialState={byIds:{},allIds:[],hydrated:false,loading:false,error:null}
    const [state,dispatch]=useReducer(ReviewReducer,initialState)
    const reviews=useReviewController(state,dispatch)
    // console.log(state)

    useEffect(()=>{
        reviews.hydrate();   
    },[])
    return(
        <MovieList 
            datas={datas.data} 
            loading={datas.loading} 
            error={datas.error} 
            reviews={reviews}
            reviewState={state}
        />
    )
}