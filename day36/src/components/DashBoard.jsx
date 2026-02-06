import {useEffect, useReducer } from "react";
import useMovieController from "../controllers/useMovieController";
import MovieList from "./MovieList";
// import ReviewReducers from "../reducers/ReviewReducers";
// import useReviewController from "../controllers/useReviewController";

export default function DashBoard({query}){
    const datas=useMovieController(query);
    const initialState={byIds:{},allIds:[],hydrated:false,loading:false,error:null}
    // const [state,dispatch]=useReducer(ReviewReducers,initialState)

    // console.log(state)


    return(
        <MovieList 
            datas={datas.data} 
            loading={datas.loading} 
            error={datas.error} 
        />
    )
}