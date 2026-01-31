export default function CRUDreducer(state,action){
    switch(action.type){
        case "REVIEWS_HYDRATED":
            return action.payload;
        case "REVIEW_CREATED":{
            const {id,review}=action.payload;
            return {
                ...state,byIds:{
                    ...state.byIds,[id]:{
                        review:review
                    }
                },
                allIds:state.allIds.includes(id)
                ?state.allIds
                : [...state.allIds,id]
                };
            }
        case "REVIEW_UPDATED":{
            const {id,review}=action.payload;
            return {
                ...state,byIds:{
                    ...state.byIds,[id]:{
                        review:review
                    }
                }
                }
        }
        case "REVIEW_DELETED":{
            const {id}=action.payload;
            const {[id]:removed ,...restOfIds}=state.byIds;
            return {
                byIds:restOfIds,
                allIds:state.allIds.filter((ids)=>(ids!==id))
            }
        }
        default:
            return state
    }
}