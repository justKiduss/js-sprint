import useMovie from "../hook/useMovie";
// import MovieList from "./MovieList";

export default function DashBoard({mode,query}){
        const {status,data,error}=useMovie(mode,query)
        if(status === "idle") return null;
        if(status === "loading") return <p>Loading ...</p>;
        if(status === "error") return <p>{error}</p>
    return(
        <>  
        {/* {!query?
         loading?<p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>" Loading..."</p>: */}
            <div>
               {data.map((data)=>(
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                    <p>{data.original_title}</p>
                </div>
               ))}
            </div>
        {/* // :
        // <MovieList mode={mode} query={query}/>
        // } */}
        </>
    )
}