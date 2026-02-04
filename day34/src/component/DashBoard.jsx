import { useEffect, useReducer } from "react";
import useMovie from "../hook/useMovie";
import MovieList from "./MovieList";
import CRUDreducer from "../reducers/CRUDreducer";
import useReview from "../hook/useReview";

export default function DashBoard({mode,query}){
    const datas=useMovie(mode,query)
    const initialState = {byIds: {},allIds: [],hydrated: false,loading: false,error: null};

    const [state,dispatch]=useReducer(CRUDreducer,initialState)
    const reviews=useReview(state,dispatch);
    useEffect(()=>{
        reviews.hydrate();
    },[])
    console.log(state)
    return(
        <MovieList 
            datas={datas.data} 
            loading={datas.loading} 
            error={datas.error} 
            state={state} 
            reviews={reviews}
        />
    )
}