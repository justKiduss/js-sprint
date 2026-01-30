export default function CRUDreducer(state,action){
    switch(action.type){

        case "editReview":{
            const {id,text}=action.payload;
            console.log(text)
            return {
              ...state,byId:{
                ...state.byId,
                [id]:{
                    ...(state.byId?.[id]),
                    review:text,
                },
              },
              allIds:state.allIds
            }
        }
        case "createReview":{
            const {id,text}=action.payload;

            return{
                ...state,byId:{
                    ...state.byId,
                    [id]:{
                        ...(state.byId?.[id]),
                        review:text,
                    },
                },
                allIds:{...state.allIds,id}
            }
        }
        default:
            return state
    }
}