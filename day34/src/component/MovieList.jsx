export default function MovieList({datas,loading,error}){

    return(
        <>
            <div>
                {loading&&<p>LOADING</p>}
                {error&&<p>{error}</p>}
                {datas.map((data)=>(
                    <div key={data.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                        <p>{data.original_title}</p>
                    </div>
                ))}
            </div>
        </>
    )
} 