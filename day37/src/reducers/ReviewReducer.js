export default function ReviewReducer(state,action){
    switch(action.type){
        case "CREATE_REVIEW_REQUEST":{
            return {...state,loading:true,error:null}
        }
        case "CREATE_REVIEW_SUCCESS":{
            const {reviewId,review}=action.payload;
            return {
                ...state,byIds:{
                    ...state.byIds,[reviewId]:review
                },
                allIds:
                state.allIds.includes(reviewId)?
                state.allIds:
                [...state.allIds,reviewId],
                loading:false,
                error:null
            }
        }
        case "CREATE_REVIEW_FAILURE":{
            return {...state,loading:false,error:action.payload}
        }
        case "UPDATE_REVIEW_REQUEGST":{
            return {...state,loading:true,error:null}
        }
        case "UPDATE_REVIEW_SUCCESS":{
            const {editId,editText}=action.payload;
            return {
                ...state,byIds:{
                ...state.byIds,[editId]:{
                    review:editText
                    },
                },
                loading:false,
                error:null
            } 
        }
        case "UPDATE_REVIEW_FAILURE":{
            return {...state,loading:false,error:action.payload}
        }
        case "DELETE_REVIEW_REQUEGST":{
            return {...state,loading:true,error:null}
        }
        case "DELETE_REVIEW_SUCCESS":{
            const deleteId=action.payload;
            const {[deleteId]:_,...rest}=state.byIds;
            return {
                ...state,byIds:rest,
                allIds:state.allIds.filter(id=>id!==deleteId),
                loading:false,
                error:null
            }
        } 
        case "DELETE_REVIEW_FAILURE":{
            return {...state,loading:false,error:action.payload}
        }
        default:
            return state
    }
}