import { createReview, deleteReviews, getAllReviews, updateReviews } from "../service/reviewService"

export default function useReview(state,dispatch){
    
    async function hydrate() {
        dispatch({
            type:"HYDRATE_REVIEW_REQUEST"
        })
        try{
            const data=await getAllReviews();
            console.log(data);
            dispatch({
                type:"HYDRATE_REVIEW_SUCCESS",
                payload:data??{byIds:{},allIds:[]}
            })
        }catch(err){
            dispatch({
                type:"HYDRATE_REVIEW_FAILURE",
                payload:err.message
            })
        }
    }

    async function create(movie_id,movie_title,rating,review){
        dispatch({
            type:"CREATE_REVIEW_REQUEST"
        })
        console.log(movie_id,movie_title,rating,review);
        try{
            const payload=await createReview(movie_id,movie_title,rating,review);
            dispatch({
                type:"CREATE_REVIEW_SUCCESS",
                payload
            })
        }catch(err){
            dispatch({
                type:'CREATE_REVIEW_FAILURE',
                payload:err.message
            })
        }
    }
    async function update(id,movie_id,movie_title,rating,review){
            dispatch({
                type:"UPDATE_REVIEW_REQUEST"
            })
        try{
            const payload=await updateReviews(id,movie_id,movie_title,rating,review)
            dispatch({
                type:"UPDATE_REVIEW_SUCCESS",
                payload
            })
        }catch(err){
            dispatch({
                type:"UPDATE_REVIEW_FAILURE",
                payload:err.message
            })
        }
    }
    async function remove(id){
        dispatch({
            type:"DELETE_REVIEW_REQUEST",
            payload:{id}
        })
        try{
            const payload=await deleteReviews(id);
                dispatch({
                    type:"DELETE_REVIEW_SUCCESS",
                    payload
                })
        }catch(err){
            dispatch({
                type:"DELETE_REVIEW_FAILURE",
                payload:err.message
            })
        }
    }
    return {create,update,remove,hydrate}
}
