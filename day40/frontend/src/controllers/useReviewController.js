import {saveReviews,loadReviews, deleteReview,EditReviews} from "../service/ReviewService"
export default function useReviewController(state,dispatch){

    async function hydrate(){
        dispatch({
            type:"HYDRATE_REVIEW_REQUEST",
        })
        try{
            const data=await loadReviews();
            dispatch({
                type:"HYDRATE_REVIEW_SUCCESS",
                payload:data??{byIds:{},allIds:[]},
            })
        }catch(err){
            dispatch({
                type:"HYDRATE_REVIEW_FAILURE",
                payload:err.message
            })
        }
    }
    async function create(reviewId,review){
        dispatch({
            type:"CREATE_REVIEW_REQUEST",
            payload:{id:reviewId}
        })
        try{
            const payload=await saveReviews(reviewId,review)
            dispatch({
                type:"CREATE_REVIEW_SUCCESS",
                payload
            })
        }catch(err){
            dispatch({
                type:"CREATE_REVIEW_FAILURE",
                payload:{id:reviewId,error:err.message}
            })
        }
    }

    async function update(editId,editText){
        dispatch({
            type:"UPDATE_REVIEW_REQUEST",
            payload:{id:editId}
        })
        try{
        const payload=await EditReviews(editId,editText)
            dispatch({
                type:"UPDATE_REVIEW_SUCCESS",
                payload
            })
        }catch(err){
            dispatch({
                type:"UPDATE_REVIEW_FAILURE",
                payload:{id:editId,error:err.message}
            })
        }
    }

    async function remove(deleteId){
           dispatch({
            type:"DELETE_REVIEW_REQUEST",
            payload:{id:deleteId}
            })
        try{
            const payload=await deleteReview(deleteId);
            dispatch({
                type:"DELETE_REVIEW_SUCCESS",
                payload
            })
        }catch(err){
            dispatch({
                type:"DELETE_REVIEW_FAILURE",
                payload:{deleteId,error:err.message}
            })
        }
    }
    return {create,update,remove,hydrate}
}
