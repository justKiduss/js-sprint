import useMovie from "../hook/useMovie"
import MovieList from "./MovieList";

export default function DashBoard({query}){
    let fecthed=useMovie(query);
    return( <MovieList datas={fecthed} />)
}