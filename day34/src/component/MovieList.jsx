import { useState } from "react"

export default function MovieList({datas,loading,error,state,dispatch}){
    const [review,setReview]=useState("");
    const [reviewId,setReviewId]=useState(null);
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState("");

    function handleEdit(e){
        e.preventDefault();
        if(!review.trim()) return

        dispatch({
            type:'EDITED_REVIEW',
            payload:{
                id:editId,
                text:editText
            }
        })
    }
    function handleReview(e){
        e.preventDefault();
        if(!review.trim()) return

        dispatch({
            type:'CREATED_REVIEW',
            payload:{
                id:reviewId,
                review:review
            }
        })
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
                        <p>{state.byIds[data.id]}</p>
                        <div>
                            {editId?
                            <>
                                <form onSubmit={handleEdit}>
                                    <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
                                    <button type="submit">Save</button>
                                </form>
                                <button onClick={()=>setEditId("")}>Cancel</button>

                            </>:
                            <>
                                <button onClick={()=>setEditId(data.id)}>Edit</button>
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
                            <button onClick={()=>
                                dispatch({
                                    type:"DELETED_REVIEW",
                                    payload:{
                                        id:data.id
                                    }
                                })}>DELETE</button>
                        </div>    
                    </div>
                ))}
            </div>
        </>
    )
} 