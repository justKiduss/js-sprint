export default function ReviewReducers(state,action){
    switch(action.type){
        case "REVIEW_HYDRATED":{
            return {...state,...action.payload,hydrate:true,loading:false,error:null}
        }
        case "REVIEW_CREATED":{
            const {reviewId,review}=action.payload;
            return {
                ...state,byIds:{
                    ...state.byIds,[reviewId]:{
                        review
                    }
                },
                allIds:{
                    ...state.allIds.includes(reviewId)?
                    state.allIds:
                    [...state.allIds,reviewId]
                }
            }
        }
        case "REVIEW_UPDATED":{
            const {reviewId,review}=action.payload;
            return{
                ...state,byIds:{
                    ...state.byIds,[reviewId]:{
                        review
                    }
                }
            }
        }
        case "REVIEW_REMOVED":{
            const reviewId=action.payload;
            const {[reviewId]: _,rest}=state.byIds;
            return {
                ...state,byIds:{
                    rest
                },
                allIds:[state.filter((ids)=>ids!==reviewId)]
            }
        }
        case "REVIEW_FAILED":{
            return {...state,loading:false,error:"review operation has failed"}
        }
        default:{
            return state;
        }
    }
}