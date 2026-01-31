import { useEffect, useReducer } from "react"
import useMovie from "../hook/useMovie"
import MovieList from "./MovieList"
import CRUDreducer from "../reducers/CRUDreducer"
import { getReviews, persistReviews } from "../service/ReviewService";

export default function DashBoard({query,mode}){
    const datas=useMovie(mode,query);
    const initialState={byIds:{},allIds:[]}
    const [state,dispatch]=useReducer(CRUDreducer,initialState)
    
    useEffect(()=>{
        const data=getReviews();
        dispatch({type:"REVIEWS_HYDRATED",payload:data})
    },[])

    useEffect(()=>{
        if (state.allIds.length === 0) return;
        persistReviews(state);
    },[state])
    return(<MovieList datas={datas.data} status={datas.status} loading={datas.loading} state={state} dispatch={dispatch}/>)
}