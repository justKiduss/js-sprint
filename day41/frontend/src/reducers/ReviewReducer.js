export default function ReviewReducer(state,action){
    switch(action.type){
        case 'HYDRATE_REVIEW_REQUEST':{
            return {...state,loading:true,error:null}
        }
        case 'HYDRATE_REVIEW_SUCCESS':{
            return {...state,...action.payload,loading:false,error:null}
        }
        case 'HYDRATE_REVIEW_FAILURE':{
            return {...state,loading:false,error:action.payload}
        }
        case "CREATE_REVIEW_REQUEST":{
            return {...state,byIds:{
                ...state.byIds,
                [action.payload.id]:{...state.byIds[action.payload.id],loading:true,error:null}
            }}
        }
        case "CREATE_REVIEW_SUCCESS":{
            const {id,review}=action.payload;
            return {
                ...state,
                byIds:{
                    ...state.byIds,[id]:{
                        review,
                        loading:false,
                        error:null
                    }
                },
                allIds:state.allIds.includes(id)?
                state.allIds:[...state.allIds,id]
            }
        }
      case "CREATE_REVIEW_FAILURE": {
        const { id, error } = action.payload;
        return {
            ...state,
            byIds: {
                ...state.byIds,
                [id]: {
                    ...state.byIds[id],
                    loading: false,
                    error
                }
            }
        };
    }
        case "UPDATE_REVIEW_REQUEST":{
            return {...state,byIds:{
                ...state.byIds,[action.payload.id]:{
                    ...state.byIds[action.payload.id],
                    loading:true,
                    error:null
                }
            }}
        }
        case "UPDATE_REVIEW_SUCCESS":{
            const {id,review}=action.payload;
            return {
                ...state,
                byIds:{
                    ...state.byIds,[id]:{
                        review,
                        loading:false,
                        error:false
                    }
                }
            } 
        }
        case "UPDATE_REVIEW_FAILURE":{
            const {id,error}=action.payload;
                return {
                    ...state,
                    byIds: {
                        ...state.byIds,
                        [id]: {
                        ...state.byIds[id],
                        loading: false,
                        error
            }
        }
    }
}
        case "DELETE_REVIEW_REQUEST":{
           const {id} = action.payload
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        loading: true,
                        error: null
                    }
                }
            }
        }
      case "DELETE_REVIEW_SUCCESS": {
        const { id } = action.payload
        const { [id]: _, ...rest } = state.byIds
        return {
            ...state,
            byIds: rest,
            allIds: state.allIds.filter(movieId => movieId !== id)
        }
    }
        case "DELETE_REVIEW_FAILURE":{
            const {id,error}=action.payload;
                return {
                    ...state,
                    byIds: {
                        ...state.byIds,
                        [id]: {
                        ...state.byIds[id],
                        loading: false,
                        error
            }
        }
    }
        }
        default:
            return state
    }
}