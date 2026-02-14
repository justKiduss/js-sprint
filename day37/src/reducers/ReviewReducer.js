export default function ReviewReducer(state,action){
    switch(action.type){
        case "CREATE_REVIEW_REQUEGST":{
            const {reviewId,review}=action.payload;
            return {
                status:"loading",data:[],error:null
            }
        }
        case "CREATE_REVIEW_SUCCESS":{
            const {reviewId,review}=action.payload;
            return {
                status:"success",
                ...state,byIds:{
                    ...state.byIds,[reviewId]:review
                },
                allIds:
                state.allIds.includes(reviewId)?
                state.allIds:
                [...state.allIds,reviewId],
                error:null
            }
        }
        case "CREATE_REVIEW_FAILURE":{
            return {status:"failure",data:[],error:action.payload}
        }
        case "UPDATE_REVIEW_REQUEGST":{
            return {status:"loading",data:[],error:null}
        }
        case "UPDATE_REVIEW_SUCCESS":{
            const {editId,editText}=action.payload;
            return {
                status:"success",
                ...state,byIds:{
                ...state.byIds,[editId]:{
                    review:editText
                    },
                },
                error:null
            } 
        }
        case "UPDATE_REVIEW_FAILURE":{
            return {status:"failure",data:[],error:action.payload}
        }
        case "DELETE_REVIEW_REQUEGST":{
            return {status:"loading",data:[],error:null}
        }
        case "DELETE_REVIEW_SUCCESS":{
            const deleteId=action.payload;
            const {[deleteId]:_,...rest}=state.byIds;
            return {
                status:"success",
                ...state,byIds:rest,
                allIds:state.allIds.filter(id=>id!==deleteId),
                error:null
            }
        } 
        case "DELETE_REVIEW_FAILURE":{
            return {status:"failure",data:[],error:action.payload}
        }
    }
}