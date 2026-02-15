import {saveReviews,loadReviews} from "../service/ReviewService"
export default function useReviewController(state,dispatch){
    async function create(reviewId,review){
        dispatch({
            type:"CREATE_REVIEW_REQUEST"
        })
        try{
            const saveToStorage={
                ...state,byIds:{
                    ...state.byIds,[reviewId]:review
                },
                allIds:
                state.allIds.includes(reviewId)?
                state.allIds:
                [...state.allIds,reviewId]
            }
            await saveReviews(saveToStorage);
            dispatch({
                type:"CREATE_REVIEW_SUCCESS",
                payload:{reviewId,review}
            })
        }catch(err){
            dispatch({
                type:"CREATE_REVIEW_FAILURE",
                payload:err.message
            })
        }
    }

    async function update(editId,editText){
        dispatch({
            type:"UPDATE_REVIEW_REQUEGST"
        })
        try{
            const saveToStorage={
                ...state,byIds:{
                    ...state.byIds,[editId]:{
                        review:editText
                    }
                }
            }
            await saveReviews(saveToStorage);
            dispatch({
                type:"UPDATE_REVIEW_SUCCESS",
                payload:{editId,editText}
            })
        }catch(err){
            dispatch({
                type:"UPDATE_REVIEW_FAILURE",
                payload:err.message
            })
        }
    }

    async function remove(deleteId){
           dispatch({
            type:"DELETE_REVIEW_REQUEGST",
            payload:{deleteId}
            })
        try{
            const {[deleteId]:_,...rest}=state.byIds;
            const deleteReviews={
                ...state,byIds:rest,
                allIds:state.allIds.filter(id=>id!==deleteId)
            }
            await saveReviews(deleteReviews);
            dispatch({
                type:"DELETE_REVIEW_SUCCESS",
                payload:deleteId
            })
        }catch(err){
            dispatch({
                type:"DELETE_REVIEW_FAILURE",
                payload:err.message
            })
        }
    }
    return {create,update,remove}
}
