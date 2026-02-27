import {useState } from "react";
import Warning from "./Warning";
import {selectReviewedMovieIds,selectReviewMetaById} from "../selectors/ReviewSelectors";
import MovieItem from "./MovieItem";
export default function MovieList({movies,reviews,reviewState}){
const [filterReviewed,setFilterReviewed]=useState(false)
const handleEdit=(id,text)=>reviews.update(id,text);
const handleReview=(id,text)=>reviews.create(id,text);
 const reviewedIds=selectReviewedMovieIds(reviewState);
    return(
        <>
            <div>
                <button onClick={()=>setFilterReviewed(prev=>!prev)}>filter reviewed movies</button>
            {movies.data.map((movie)=>{
                {filterReviewed &&(
                        reviewedIds.map((id)=>(
                            <p>{id}</p>
                        ))
                )}
                const reviewMeta=selectReviewMetaById(reviewState,movie.id);
                return (
                    <MovieItem 
                        movie={movie}
                        onEdit={handleEdit}
                        onReview={handleReview}
                        reviewMeta={reviewMeta}
                        reviews={reviews}
                    />
                )
             })}
            
            </div>
            </>
    )
}