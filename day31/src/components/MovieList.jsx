import { useState } from "react"

export default function MovieList({data,dispatch}){
    const [review,setReview]=useState("");
    const [reviewId,setReviewId]=useState(null);
    const [editText,setEditText]=useState("");
    const [editId,setEditId]=useState(null);
    const handleReview=(e,movieId)=>{
        e.preventDefault();
        if(!review.trim()){
            return
        }
        dispatch({
            type:"createReview",
            payload:{
                movieid:movieId,
                review:review
            }
        })
        setReviewId(null);
        setReview("");
    }

    const handleEdit=(e)=>{
        e.preventDefault();
        if(!editText.trim()) return
        dispatch({
            type:"editReview",
            payload:{
                editId:editId,
                editText:editText
            }
        })
        setEditId("");
        setEditText("");
    }
    const startEdit=(data)=>{
        setEditId(data.id)
        setEditText(data.review)
    }
    return(
        <>
            <div>
                {data.map((data)=>(
                    <div key={data.id} style={{margin:"20px"}}>
                        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.original_title}/>
                        <p>{data.original_title}</p> 
                        <div style={{display:"flex",gap:"10px"}}>
                            {editId===data.id ?
                                <>
                                  <form onSubmit={(e)=>handleEdit(e)}>  
                                    <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
                                    <button type='submit'>save</button>
                                    <button onClick={()=>setEditId(null)}>cancel</button>
                                  </form>
                                </>
                                :<>  
                                    <p>{data.review}</p>
                                    <button onClick={()=>{startEdit(data)}}>Edit</button>
                                    <button onClick={()=>
                                        dispatch({
                                            type:"deleteReview",
                                            payload:{
                                                id:data.id
                                            }
                                        })
                                    }>Delete</button>
                            {reviewId===data.id?
                                <>
                                    <form onSubmit={(e)=>handleReview(e,data.id)}>
                                        <input type="text" onChange={(e)=>setReview(e.target.value)} value={review}/>
                                        <button type="submit">Submit</button>
                                    </form>
                                    <button onClick={()=>setReviewId(null)}>Cancel</button>
                                 </>
                                :<>
                                    <button onClick={()=>{setReviewId(data.id)}}>Review</button>
                                </>
                        }
                                </>
                            }
                        </div>
                       
                    </div>  
                ))}
            </div>
        </>
    )
}