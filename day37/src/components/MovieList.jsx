export default function MovieList({movies}){
    return(
        <>
            <div>
                {movies.data.map((movie)=>(
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title}/>
                        <p>{movie.original_title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}