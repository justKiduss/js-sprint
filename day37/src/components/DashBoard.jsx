import { useMovieController } from "../controllers/useMovieController"
import MovieList from "./MovieList";

export default function DashBoard({query}){
    const movies=useMovieController(query);
    console.log(movies)
    return(
        <>
            {movies.data.length >0&&
                <MovieList movies={movies} query={query}/>
            }
        </>
    )
}