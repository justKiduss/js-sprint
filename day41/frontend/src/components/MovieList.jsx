import {useState,useMemo } from "react";
import { useSelector } from "react-redux";
import {visibleMovies} from "../selectors/ReviewSelectors";
import MovieItem from "./MovieItem";

export default function MovieList({movies,reviews}){
const [filterReviewed,setFilterReviewed]=useState(false)
const handleEdit=(id,text)=>reviews.update(id,text);
const handleReview=(id,text)=>reviews.create(id,text);
const handleRemove=(id)=>reviews.remove(id);
const visibleMoviesSlection=useMemo(visibleMovies);
const filtered=useSelector(visibleMoviesSlection);
console.log(filtered)
const displayedMovies=filterReviewed?filtered:movies.data;
return (
  <div>
    <button onClick={() => setFilterReviewed(p => !p)}>
      filter reviewed movies
    </button>
      
    {displayedMovies.map(movie => {

      return (
        <MovieItem
          key={movie.id}
          movie={movie}
          onEdit={handleEdit}
          onReview={handleReview}
          onDelete={handleRemove}
        />
      );
    })}
  </div>
);
}