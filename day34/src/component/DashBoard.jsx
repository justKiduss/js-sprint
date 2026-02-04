import { useReducer } from "react";
import useMovie from "../hook/useMovie";
import MovieList from "./MovieList";
import CRUDreducer from "../reducers/CRUDreducer";

export default function DashBoard({mode,query}){
    const datas=useMovie(mode,query)
    const [state,dispatch]=useReducer(CRUDreducer,{byIds:{},allIds:[]})
    console.log(state)
    return(<MovieList datas={datas.data} loading={datas.loading} error={datas.error} state={state} dispatch={dispatch}/>)
}