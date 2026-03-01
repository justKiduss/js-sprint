import {useState } from "react";
import Warning from "./Warning";
import {selectReviewedMovieIds,selectReviewMetaById} from "../selectors/ReviewSelectors";
import MovieItem from "./MovieItem";
export default function MovieList({movies,reviews,reviewState}){
const [filterReviewed,setFilterReviewed]=useState(false)
const handleEdit=(id,text)=>reviews.update(id,text);
const handleReview=(id,text)=>reviews.create(id,text);
const handleRemove=(id)=>reviews.remove(id);
// const reviewedIds=selectReviewedMovieIds(reviewState);
// const visibleMovies = filterReviewed
//   ? movies.data.filter(m => reviewedIds.includes(m.id))
//   : movies.data;
//     return(
//             <div>
//                 <button onClick={()=>setFilterReviewed(prev=>!prev)}>filter reviewed movies</button>
//             {movies.data.map((movie)=>{
                
//             {visibleMovies.map(movie => {
//             const reviewMeta = selectReviewMetaById(reviewState, movie.id);
//                 return (
//                     <MovieItem 
//                         key={movie.id}
//                         movie={movie}
//                         onEdit={handleEdit}
//                         onReview={handleReview}
//                         reviewMeta={reviewMeta}
//                         onDelete={handleRemove}
//                     />
//                 )
//              })}
            
//             </div>
//     )
 

    const reviewedIds = selectReviewedMovieIds(reviewState);

const visibleMovies = filterReviewed
  ? movies.data.filter(m => reviewedIds.includes(m.id))
  : movies.data;

return (
  <div>
    <button onClick={() => setFilterReviewed(p => !p)}>
      filter reviewed movies
    </button>

    {visibleMovies.map(movie => {
      const reviewMeta = selectReviewMetaById(reviewState, movie.id);

      return (
        <MovieItem
          key={movie.id}
          movie={movie}
          reviewMeta={reviewMeta}
          onEdit={handleEdit}
          onReview={handleReview}
          onDelete={handleRemove}
        />
      );
    })}
  </div>
);
}