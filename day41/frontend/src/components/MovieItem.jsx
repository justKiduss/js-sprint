import { useState } from "react";
import Warning from "./Warning";
export default function MovieItem({onEdit,onReview,reviewMeta,movie,onDelete}){
    const [reviewId,setReviewId]=useState(null);
    const [reviewText,setReviewText]=useState("");
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState("");
    const [removeId,setRemoveId]=useState(null);
    const isAnyActionActive=removeId!==null||editId!==null||reviewId!==null;
console.log(reviewMeta.review);
    const handleEdit=(e)=>{
        e.preventDefault();
        if(!editText.trim()){
            return
        }
        onEdit(movie.id,editText)
        setEditId(null);
        setEditText("");
    }
    const handleReview=(e)=>{
        e.preventDefault();
        if(!reviewText.trim()){
            return 
        }
        onReview(movie.id,reviewText)
        setReviewId(null);
        setReviewText("");
    }

    const handleRemove=(id)=>{
        onDelete(id);
        setRemoveId(null);
    }
    const atBegining=(movie)=>{
        setEditId(movie.id);
        setEditText(reviewMeta.review);
    }
        return(
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title}/>
                        <p>{movie.original_title}</p>
                        <p>{reviewMeta.loading?"LOADING":""}</p>
                        <p>{reviewMeta.error}</p>
                        <p>{reviewMeta.review}</p>
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
                                        handleRemove(movie.id);
                                    }}
                                    onCancel={()=>setRemoveId(null)}
                                />
                            )}
                        </div>
                    </div>
)
}