export default function CRUDreducer(state,action){
    const safeState = {
        byId: state?.byId ?? {},
        allIds: Array.isArray(state?.allIds) ? state.allIds : [],
    };
    switch(action.type){

        case "editReview":{
            const {id,text}=action.payload;
            console.log(text)
            return {
              ...safeState,byId:{
                ...safeState.byId,
                [id]:{
                    ...(safeState.byId?.[id]),
                    review:text,
                },
              },
              allIds:safeState.allIds
            }
        }
        case "createReview":{
            const {id,text}=action.payload;

            return{
                ...safeState,byId:{
                    ...safeState.byId,
                    [id]:{review:text},
                },
                allIds:safeState.allIds.includes(id)?
                safeState.allIds:
                [...safeState.allIds,id]
            }
        }
        case "deleteReview": {
        const { id } = action.payload;
  // remove the key from byId using object rest destructuring
        const { [id]: removed, ...restById } = safeState.byId;
        return {
            ...safeState,
            byId: restById,
            allIds: safeState.allIds.filter(existingId => existingId !== id)
        };
        }
        default:
            return safeState
    }
}