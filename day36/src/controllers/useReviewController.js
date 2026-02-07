import { getReview, saveReview } from "../service/ReviewService"

export default function useReviewController(state,dispatch){
    async function hydrate(){
        dispatch({type:"REVIEW_LOADING"})
        const data=await getReview();
        dispatch({
            type:"REVIEW_HYDRATED",
            payload:data?? {byIds:{},allIds:[]}
        })
    }

    async function create(reviewId,review){
        dispatch({type:"REVIEW_CREATE_REQUEST",payload:{reviewId,review}})
        try{
            const nextState={
                ...state,byIds:{
                    ...state.byIds,[reviewId]:{review}
                },
                allIds:
                    state.allIds.includes(reviewId)?
                    state.allIds:
                    [...state.allIds,reviewId]
            }
            await saveReview(nextState);
            dispatch({
                type:"REVIEW_CREATED",
                payload:{ reviewId,review }
            })
        }catch(err){
            dispatch({
               type: "REVIEW_CREATE_FAILURE",
               payload: err.message 
            })
        }
     
    }

    async function update(editId,editText){
        dispatch({type:"REVIEW_UPDATE_REQUEST",payload:{editId,editText}});
        try{
            const updateState={
                ...state,byIds:{
                    ...state.byIds,[editId]:{review:editText}
                }
            }
            await saveReview(updateState);
            dispatch({
                type:"REVIEW_UPDATED",
                payload:{ editId,editText }
            })
        }catch(err){
            dispatch({
                type:"REVIEW_UPDATE_FAILURE",
                payload:err.message
            })
        }
     

    
    }

    async function remove(deleteId){
        dispatch({type:"REVIEW_REMOVE_REQUEST",payload:deleteId})
        try{
            const {[deleteId]: _,...rest}=state.byIds;
            const deleteState={
                    ...state,byIds:rest,
                    allIds:state.allIds.filter(id=>id!==deleteId)
            }
            await saveReview(deleteState)
            dispatch({
                type:'REVIEW_REMOVED',
                payload:{ deleteId }
            })
        }catch(err){
            dispatch({type:"REVIEW_REMOVE_FAILURE",payload:err.message})
        }
    }

    return {hydrate,create,update,remove}
}