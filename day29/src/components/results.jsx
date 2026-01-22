export default function Results(){
    const {data,error,loading}=useMovie();
    return (
        <>
            <div>
                {data.map((datas)=>{
                    <p>{datas.original_title}</p>
                })}
            </div>
        </>
    )
}