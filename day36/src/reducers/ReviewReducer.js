export default function ReviewReducer(state,action){
    switch(action.type){
        case 'REVIEW_HYDRATED':{
            return {...state,...action.payload,hydrated:true,loading:false,error:null}
        }
        case 'REVIEW_CREATE_REQUEST':{
            return {...state,loading:true,error:null}
        }
        case 'REVIEW_CREATED':{
            const {reviewId,review }=action.payload;
            return {
                ...state,byIds:{
                    ...state.byIds,[reviewId]:{review}
                },
                allIds:
                    state.allIds.includes(reviewId)?
                    state.allIds:
                    [...state.allIds,reviewId], loading:false
            }
        }
        case 'REVIEW_CREATE_FAILURE':{
            return {...state,loading:false,error:action.payload}
        }
        case 'REVIEW_UPDATE_REQUEST':{
            return {...state,loading:true,error:null}
        }
        case 'REVIEW_UPDATED':{
            const {editId,editText}=action.payload;
            return {
                ...state,byIds:{
                    ...state.byIds,[editId]:{review:editText}
                },loading:false,error:null
            }
        }
        case 'REVIEW_UPDATE_FAILURE':{
            return {...state,loading:false,error:action.payload}
        }

        case 'REVIEW_REMOVE_REQUEST':{
            return {...state,loading:true,error:null}
        }
        case 'REVIEW_REMOVED':{
            const {deleteId}=action.payload;
            const {[deleteId]: _,...rest}=state.byIds;
            return {
                ...state,byIds:rest,
                allIds:state.allIds.filter(id=>id!==deleteId),loading:false,error:null
            }
        }
        case 'REVIEW_REMOVE_FAILURE':{
            return {...state,loading:false,error:action.payload}
        }
        case "REVIEW_FAILED":{
            return {...state,loading:false,error:"review operation has failed"}
        }
        case "REVIEW_LOADING":{
            return {...state,loading:true,error:null}
        }

        default:
            return state
    }
}