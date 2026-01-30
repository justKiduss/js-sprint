import { useState } from "react";
export default function MovieList({datas,state,dispatch}){
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState("")
    const [reviewId,setReviewId]=useState(null);
    const [reviewText,setReviewText]=useState("");
    function handleEdit(e,id){
        e.preventDefault();
        if(!editText.trim()) return
        dispatch({
            type:"editReview",
            payload:{
                id:editId,
                text:editText
            }
        })
        setEditId("");
        setEditText("");
    }
    function handleReview(e){
        e.preventDefault();
        if(!reviewText.trim()) return
        dispatch({
            type:"createReview",
            payload:{
                id:reviewId,
                text:reviewText
            }
        })
        setReviewId("");
        setReviewText("");
    }
    const startEdit=(id,review)=>{
        setEditId(id)
        setEditText(review)
    }
    console.log(state)
    return(
        <>
            <div>
                {datas.data.map((data)=>(
                    <div key={data.id}>
                    {datas.status?<p style={{display:"flex",alignItems:"center",justifyContent:"center"}}></p>:""}

                        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                        <p>{data.original_title}</p> 
                        <p>{state.byId[data.id]?.review}</p>
                        <button onClick={()=>setReviewId(data.id)}>Review</button>
                        <div style={{display:"flex",gap:"10px"}}>
                            {editId===data.id?(
                                <>
                                    <form onSubmit={(e)=>handleEdit(e,data.id)}>
                                        <input type="text" onChange={(e)=>{
                                            setEditText(e.target.value)
                                            }} value={editText}/>
                                        <button type="submit">save</button>
                                    </form>
                                    <button onClick={()=>setEditId("")}>Cancel</button>
                                </>
                            ):(
                                <button onClick={(e)=>{setEditId(data.id);startEdit(data.id,state.byId[data.id].review||"")}}>Edit</button> 
                            )}    
                            <button onClick={()=>
                                dispatch({
                                    type:"deleteReview",
                                    payload:{
                                        id:data.id
                                    }
                                })
                            }>Delete</button>
                        </div>
                        <div>
                            {reviewId===data.id &&
                                <>
                                    <form onSubmit={(e)=>handleReview(e)}>
                                        <input type="text" onChange={(e)=>setReviewText(e.target.value)} value={reviewText}/>
                                        <button type="submit" onClick={()=>setReviewId(reviewId)}>save</button>
                                    </form>
                                </>
                            }
                        </div>    
                    </div>
                ))}
            </div>
        </>
    )
}