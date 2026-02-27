import {useState } from "react";
import Warning from "./Warning";
import { selectAllIds, selectByIds, selectIsReviewLoading, selectReviewById, selectReviewError,selectReviewedMovieIds } from "../selectors/ReviewSelectors";
export default function MovieList({movies,reviews,reviewState}){
const [reviewId,setReviewId]=useState(null);
const [reviewText,setReviewText]=useState("");
const [editId,setEditId]=useState(null);
const [editText,setEditText]=useState("");
const [removeId,setRemoveId]=useState(null);
const [filterReviewed,setFilterReviewed]=useState(false)
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
 const reviewedIds=selectReviewedMovieIds(reviewState);
    return(
        <>
            <div>
                <button onClick={()=>setFilterReviewed(prev=>!prev)}>filter reviewed movies</button>
                {filterReviewed &&(
                        reviewedIds.map((id)=>(
                            <p>{id}</p>
                        ))
                )}
                    {movies.data.map((movie)=>(
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title}/>
                        <p>{movie.original_title}</p>
                        <p>{selectIsReviewLoading(reviewState,movie.id)?"LOADING":""}</p>

                        <p>{selectReviewError(reviewState,movie.id)}</p>
                        {/* {reviewState.byIds[movie.id]?.loading&&<p>LOADING...</p>}
                        {reviewState.byIds[movie.id]?.error&&<p>Error while feching</p>} */}
                        {/*<p>{reviewState.byIds[movie.id]?.review??""}</p>*/}
                        <p>{selectReviewById(reviewState,movie.id)}</p>
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