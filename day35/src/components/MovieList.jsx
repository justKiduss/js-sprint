import { useState } from "react"

export default function MovieList({datas,loading,error,reviews}){
    const [review,setReview]=useState("");
    const [reviewId,setReviewId]=useState(null);
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState("");
    function handleEdit(e){
        e.preventDefault();
        if(!editText.trim()) return
        reviews.update(editId,editText);
        setEditId("");
        setEditText('');
    }
    function handleReview(e){
        e.preventDefault();
        if(!review.trim()) return
        reviews.create(reviewId,review)
        setReview('');
        setReviewId("");
    }
    const atBegining=(data)=>{
        setEditId(data.id);
        setEditText(reviews.byIds[data.id]?.review);
    }
    return(
        <>
            <div>
                {loading&&<p>LOADING</p>}
                {error&&<p>{error}</p>}
                {datas.map((data)=>(
                    <div key={data.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                        <p>{data.original_title}</p>
                        <p>{reviews.byIds[data.id]?.review}</p>
                        <div>
                            {editId===data.id?
                            <>
                                <form onSubmit={handleEdit}>
                                    <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
                                    <button type="submit">Save</button>
                                </form>
                                <button onClick={()=>setEditId("")}>Cancel</button>

                            </>:
                            <>
                                <button onClick={()=>atBegining(data)}>Edit</button>
                            </>
                            }
                            {reviewId?
                            <>
                                <form onSubmit={handleReview}>
                                    <input type="text" onChange={(e)=>setReview(e.target.value)}/>
                                    <button type="submit">send</button>
                                </form>
                            </>
                            :<>
                              <button onClick={()=>setReviewId(data.id)}>Review</button>
                            </>}
                            <button onClick={()=>reviews.remove(data.id)}>DELETE</button>
                        </div>    
                    </div>
                ))}
            </div>
        </>
    )
} 