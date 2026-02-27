import {createSelector} from "reselect"

export const selectAllIds=(state)=>state.allIds??[];

export const selectByIds=(state)=>state.byIds??{};

export const selectReviewById=(state, id)=>{
    return state.byIds[id]?.review??"";
}

export const selectAllReviews=(state)=>{
    return state.byIds??{};
} 

export const selectIsReviewLoading=(state, id)=>{
    return state.byIds[id]?.loading;
}

export const selectReviewError=(state, id)=>{
    return state.byIds[id]?.error;
}

export const selectReviewCount=createSelector(
    [selectAllReviews],
    (reviews)=>
        Object.keys(reviews).length
)

export const selectReviewedMovieIds=createSelector([selectAllIds,selectByIds],(allIds,byIds)=>
        allIds.filter((id)=>!!byIds[id]?.review)
)

export const selectMoviesWithoutReviews=createSelector([selectAllIds,selectByIds],(allIds,byIds)=>
        allIds.filter((id)=>!byIds[id]?.review)
)



