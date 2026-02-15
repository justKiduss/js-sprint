import { useState } from "react";
import Warning from "./Warning";

export default function MovieList({movies,reviews}){
const [reviewId,setReviewId]=useState(null);
const [reviewText,setReviewText]=useState("");
const [editId,setEditId]=useState(null);
const [editText,setEditText]=useState("");
const [removeId,setRemoveId]=useState(null)
const handleEdit=(e)=>{
    e.preventDefault();
    if(!editText.trim()){
        return
    }
    reviews.update(editId,editText);
    setReviewId("");
    setReviewText("");
}
const handleReview=(e)=>{
    e.preventDefault();
    if(!reviewText.trim()){
        return 
    }
    reviews.create(reviewId,reviewText);
    setReviewId("");
    setReviewText("");
}
    return(
        <>
            <div>
                {movies.data.map((movie)=>(
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title}/>
                        <p>{movie.original_title}</p>

                        <div>
                            {reviewId===movie.id?
                            <>
                                <form onSubmit={handleReview}>
                                    <input type="text" onChange={(e)=>setReviewText(e.target.value)} value={reviewText}/>
                                    <button type="submit">send</button>
                                </form>
                            </>:<>
                                <button onClick={()=>setReviewId(movie.id)}>Review</button>
                            </>
                            }
                            {editId===movie.id?<>
                                    <form onSubmit={handleEdit}>
                                        <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
                                        <button type="submit">save</button>
                                    </form>
                                    <button onClick={()=>setEditId("")}>cancel</button>
                                </>:<>
                                <button onClick={()=>setEditId(movie.id)}>Edit</button>
                                </>
                            }
                            <button onClick={()=>setRemoveId(movie.id)}>Delete</button>

                            {removeId===movie.id &&(
                                <Warning
                                    onConfirm={()=>{
                                        reviewId.remove(removeId);
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