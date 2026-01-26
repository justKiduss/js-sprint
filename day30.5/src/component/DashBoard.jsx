import useMovie from "../hook/useMovie";
import MovieList from "./MovieList";

export default function DashBoard({mode,query}){
    const {data,loading,error}=useMovie(mode,query);
    return(
        <>  
        {error?"faild to fetch":""}
        {!query?
         loading?<p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>" Loading..."</p>:
            <div>
               {data.map((data)=>(
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                    <p>{data.original_title}</p>
                </div>
               ))}
            </div>
        :
        <MovieList mode={mode} query={query}/>
        }
        </>
    )
}