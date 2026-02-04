export default function CRUDreducer(state,action){
    switch(action.type){
        case "DELETED_REVIEW":{
            const {reviewId}=action.payload;
            const {[reviewId]: _,...rest}=state.byIds;
            return {
                ...state,
                byIds:rest,
                allIds:state.allIds.filter(id=>(id!==reviewId))
                }
        }
        case "CREATED_REVIEW":{
            const {reviewId,review}=action.payload;
            return {
                ...state,byIds:{
                    ...state.byIds,[reviewId]:{
                        review
                    }
                },
                allIds:state.allIds.includes(reviewId)
                ?state.allIds
                : [...state.allIds,reviewId]
                };
        }
        case "EDITED_REVIEW":{
            const {reviewId, review}=action.payload;
            return {
                ...state,byIds:{
                    ...state.byIds,[reviewId]:{
                        ...state.byIds[reviewId],review
                    },
                },
                };
        }
        case "REVIEWS_REQUESTED":
            return { ...state, loading:true, error:null };
        case "REVIEWS_HYDRATED":
                 return {
                    ...state,
                    ...action.payload,
                    hydrated:true,
                    loading: false,
                    error: null,
                };
        case "REVIEWS_FAILED":{
            return {...state,loading:false,error:"Review operation failed"};
        }
        default:
            return state;
    }
}