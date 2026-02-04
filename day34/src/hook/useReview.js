import { useEffect } from "react";
import {getReviews,saveReviews} from "../service/ReviewService";
export default function useReview(state,dispatch){

    async function hydrate(){
        // dispatch({type:"REVIEWS_REQUEGSTED"});
            const data=await getReviews();
            dispatch({type:"REVIEWS_HYDRATED",payload:data??{byIds:{},allIds:[]}
            });
            // dispatch({type:"REVIEWS_FAILED"});
    } 

function create (reviewId,review){
    dispatch({
        type:"CREATED_REVIEW",
        payload:{reviewId,review}
    })
}
function update (reviewId, review) {
    dispatch({
      type: "EDITED_REVIEW",
      payload: {reviewId, review }
    });
  }
function remove (reviewId) {
    dispatch({
      type: "DELETED_REVIEW",
      payload: {reviewId}
    });
}
    useEffect(()=>{
        if(!state.hydrated) return;
        saveReviews(state);
    },[state])
return {hydrate,create,remove,update};
}