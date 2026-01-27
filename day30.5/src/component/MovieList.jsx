export default function MovieList({data}){
    return(
        <>   
            <div>
                    {data.map((data)=>(
                        <div key={data.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                            <p>{data.original_title}</p>  
                        </div>
                    ))}
            </div>
        </>
    )
}