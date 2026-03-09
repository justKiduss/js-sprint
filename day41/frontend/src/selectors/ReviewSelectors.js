import {createSelector} from "reselect"

// export const selectReviewById=(state, id)=>{
//     return state.byIds[id]?.review??"";
// }

// export const selectAllReviews=(state)=>{
//     return state.byIds??{};
// } 

// export const selectIsReviewLoading=(state, id)=>{
//     return state.byIds[id]?.loading;
// }

// export const selectReviewError=(state, id)=>{
//     return state.byIds[id]?.error;
// }



// export const selectReviewCount=createSelector(
//     [selectAllReviews],
//     (reviews)=>
//         Object.keys(reviews).length
// )

export const selectAllIds=(state)=>state.reviews.allIds??[];
export const selectByIds=(state)=>state.reviews.byIds??{};

export const selectReviewedMovieIds=createSelector([selectAllIds,selectByIds],(allIds,byIds)=>
        allIds.filter((id)=>!!byIds[id]?.review)
)

// export const selectMoviesWithoutReviews=createSelector([selectAllIds,selectByIds],(allIds,byIds)=>
//         allIds.filter((id)=>!byIds[id]?.review)
// )



export const selectReviewMetaById=()=>
    createSelector(
        [selectByIds,(_,id)=>id], // - (_, id) => id is another input selector. It receives (state, id) but explicitly ignores the first parameter 
        (byIds,id)=>({
            review:byIds[id]?.review??"",
            loading:byIds[id]?.loading??false,
            error:byIds[id]?.error??null
        })
) 

export const visibleMovies=()=>
    createSelector(
        [(state)=>state.movies.data,selectReviewedMovieIds],
        (movies,ids)=>movies.filter(m => ids.includes(m.id))
    )








