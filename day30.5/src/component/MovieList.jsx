import useMovie from "../hook/useMovie"

export default function MovieList({mode,query}){
    const {data,loading,error}=useMovie(mode,query)
    return(
        <>   
            <div>
                {error&& console.log("error while fetching")}
                {loading?"Loading ...":
                    data.map((data)=>(
                        <div key={data.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                            <p>{data.original_title}</p>  
                        </div>
                    ))
                }
            </div>
        </>
    )
}