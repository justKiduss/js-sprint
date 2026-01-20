import useMovies from "../services/useMovies"
export default function MovieCard(){
    const {data,loading,error}=useMovies();
    console.log("data",data)
    const imgStyle={
        width:"180px",
        height:"220px"
    }
    const container={
        display:"flex"
    }
    return(
        <div style={container}>
          {data.map((movie)=>(
            <div key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={"movie poster"} style={imgStyle}/>
                <span>{movie.original_title}</span>
            </div>
          ))}
        </div>
    )
}