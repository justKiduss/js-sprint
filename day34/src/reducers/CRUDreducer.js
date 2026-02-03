export default function CRUDreducer(state,action){
    switch(action.type){
        case "DELETED_REVIEW":{
            const {id}=action.payload;
            const {[id]:removed ,...restOfIds}=state.byIds;
            return {
                byIds:restOfIds,
                allIds:state.allIds.filter((ids)=>(ids!==id))
            }
        }
        case "CREATED_REVIEW":{
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
        case "EDITED_REVIEW":{
            const {id,text}=action.payload;
            return {
                ...state,byIds:{
                    ...state.byIds,[id]:{
                        review:text
                    }
                }
                }
        }
        default:
            return state;
    }
}