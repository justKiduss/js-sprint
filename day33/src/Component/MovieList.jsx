import { useState } from "react"

export default function MovieList({datas,status,loading,state,dispatch}){
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState("");
    const [reviewId,setReviewId]=useState(null);
    const [reviewText,setReviewText]=useState("");

    function handleReview(e){
        e.preventDefault();
        if(!reviewText.trim()) return
        dispatch({
            type:"REVIEW_CREATED",
            payload:{
                id:reviewId,
                review:reviewText
            }
        })
        setReviewId("");
        setEditText("");
    }
    function handleEdit(e){
        e.preventDefault();
        if(!editText.trim()) return
        dispatch({
            type:"REVIEW_UPDATED",
            payload:{
                id:editId,
                review:editText
            }
        })
        setEditId("");
        setEditText("");
    }
    console.log(state)
    return(
        <>
            <div>
                {loading&&<p>Loading...</p>}
                {error&&<p>Error while fetching data</p>}
                {datas.map((data)=>(
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                        <p>{data.original_title}</p>
                        <p>{state.byIds[data.id]?.review}</p>
                        <div>
                            {editId===data.id?
                                <>
                                    <form onSubmit={handleEdit}>
                                        <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
                                        <button type="submit">save</button>
                                    </form>
                                    <button onClick={()=>setEditId("")}>Cancel</button>
                                </>:
                                <>
                                    <button onClick={()=>setEditId(data.id)}>Edit</button>
                                </>
                            }
                            {reviewId===data.id?
                                <>
                                    <form onSubmit={handleReview}>
                                        <input type="text" onChange={(e)=>setReviewText(e.target.value)} value={reviewText}/>
                                        <button type="submit">send</button>
                                    </form>
                                </>:
                                <>
                                    <button onClick={()=>setReviewId(data.id)}>Review</button>
                                </>
                            }
                            <button onClick={()=>dispatch({
                                type:"REVIEW_DELETED",
                                payload:{
                                    id:data.id
                                }
                            })}>Delete</button>
                        </div>   
                    </div>
                ))}
            </div>
        </>
    )
}