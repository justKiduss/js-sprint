import useMovie from "../hook/useMovie";
import MovieList from "./MovieList";

export default function DashBoard({mode,query}){
    const datas=useMovie(mode,query)
    return(<MovieList datas={datas.data} loading={datas.loading} error={datas.error}/>)
}