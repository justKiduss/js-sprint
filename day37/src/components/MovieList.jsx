import {useState } from "react";
import Warning from "./Warning";

export default function MovieList({movies,reviews,reviewState}){
const [reviewId,setReviewId]=useState(null);
const [reviewText,setReviewText]=useState("");
const [editId,setEditId]=useState(null);
const [editText,setEditText]=useState("");
const [removeId,setRemoveId]=useState(null);
const isAnyActionActive=removeId!==null||editId!==null||reviewId!==null;
const handleEdit=(e)=>{
    e.preventDefault();
    if(!editText.trim()){
        return
    }
    reviews.update(editId,editText);
    setEditId(null);
    setEditText(null);
}
const handleReview=(e)=>{
    e.preventDefault();
    if(!reviewText.trim()){
        return 
    }
    reviews.create(reviewId,reviewText);
    setReviewId(null);
    setReviewText(null);
}

const atBegining=(movie)=>{
    setEditId(movie.id);
    setEditText(reviewState.byIds[movie.id]?.reviews);
}

    return(
        <>
            <div>
                {movies.data.map((movie)=>(
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title}/>
                        <p>{movie.original_title}</p>
                        {reviewState.loading&&<p>LOADING...</p>}
                        {reviewState.error&&<p>Error while feching</p>}
                        <p>{reviewState.byIds[movie.id]?.reviews??""}</p>
                        <div style={{display:"flex"}}>
                            
                            <>
                                {reviewId===movie.id?
                                <>
                                    <form onSubmit={handleReview}>
                                        <input type="text" onChange={(e)=>setReviewText(e.target.value)} value={reviewText}/>
                                        <button type="submit">send</button>
                                    </form>
                                </>:<>
                                    {!isAnyActionActive&&<button onClick={()=>setReviewId(movie.id)}>Review</button>}
                                </>
                                }
                                </>
                                {editId===movie.id?<>
                                        <form onSubmit={handleEdit}>
                                            <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
                                            <button type="submit">save</button>
                                        </form>
                                        <button onClick={()=>setEditId(null)}>cancel</button>
                                    </>:<>
                                    {!isAnyActionActive&&<button onClick={()=>{atBegining(movie)}}>Edit</button>}
                                    </>
                                }
                            {!isAnyActionActive&&<button onClick={()=>setRemoveId(movie.id)}>Delete</button>}
                            {removeId===movie.id &&(
                                <Warning
                                    onConfirm={()=>{
                                        reviews.remove(removeId);
                                        setRemoveId(null);
                                    }}
                                    onCancel={()=>setRemoveId(null)}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}