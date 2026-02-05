import { useEffect } from "react";
import { getReviews, saveReviews } from "../service/ReviewService";

export default function useReviewController(state,dispatch){
    async function hydrate(){
        const data=await getReviews();
            dispatch({type:"REVIEW_HYDRATED",payload:data??{byIds:{},allIds:[]}})
    }

    function create (reviewId,review){
        dispatch({
            type:"REVIEW_CREATED",
            payload:{reviewId,review}
        })
    }

    function update (reviewId,review){
        dispatch({
            type:"REVIEW_UPDATED",
            payload:{review,reviewId}
        })
    }

    function remove(reviewId){
        dispatch({
            type:"REVIEW_REMOVED",
            payload:reviewId
        })
    }

    useEffect(()=>{
        if(!state.hydrate) return;
        saveReviews(state);
    },[state])

    return {hydrate,create,remove,update}
}