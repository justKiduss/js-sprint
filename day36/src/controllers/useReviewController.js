import { useEffect } from "react";
import { getReview, saveReview } from "../service/ReviewService"

export default function useReviewController(state,dispatch){
    async function hydrate(){
        const data=await getReview();
        dispatch({
            type:"REVIEW_HYDRATED",
            payload:data?? {byIds:{},allIds:[]}
        })
    }

    function create(reviewId,review){
        dispatch({
            type:"REVIEW_CREATED",
            payload:{ reviewId,review }
        })
    }

    function update(editId,editText){
        dispatch({
            type:"REVIEW_UPDATED",
            payload:{ editId,editText }
        })
    }

    function remove(deleteId){
        dispatch({
            type:'REVIEW_REMOVED',
            payload:{ deleteId }
        })
    }

    useEffect(()=>{
        if(!state.hydrated) return
        saveReview(state);
    },[state])
    return {hydrate,create,update,remove}
}