export default function MovieList({datas}){
    return(
        <>
            <div>
                {datas.status?<p style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Loading</p>:""}
                {datas.data.map((data)=>(
                    <div key={data.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                        <p>{data.original_title}</p> 
                    </div>
                ))}
            </div>
        </>
    )
}