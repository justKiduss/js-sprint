import {useMovies} from "../services/useMovies"
import Results from "./Results";
export default function MovieCard(){
    const {data,loading,error}=useMovies();
    console.log("data",data)
    const imgStyle={
        width:"180px",
        height:"220px"
    }
    const container={
        gap:"10px",
        marginLeft:"10px",
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr"
    }
    const caption={
        background:"rgba(0, 0, 0, 0.7)",
        color:"white",
        width:"175px",
        textAlign:"center",
        padding:"2.5px",
        marginTop:"-30px",
        position:"relative",
        zIndex: 1
    }
    return(
        <div style={container}>
          {data.map((movie)=>(
            <div key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={"movie poster"} style={imgStyle}/>
                <div style={caption}>
                    <span>{movie.original_title}</span>
                </div>
            </div>
          ))}
          {error && (
                    <>
                        <p>Server is having an issue</p>
                    </>
            )}
          <Results/>
        </div>
    )
}