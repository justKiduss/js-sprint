import useMovie from "../hook/useMovie";
import MovieList from "./MovieList";
export default function DashBoard({mode,query}){
        const {status,data,error}=useMovie(mode,query)
        if(status === "idle") return null;
        if(status === "loading") return <p>Loading ...</p>;
        if(status === "error") return <p>{error}</p>
    return <MovieList data={data}/>
}