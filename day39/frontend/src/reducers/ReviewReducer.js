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
            return {...state,loading:true,error:null}
        }
        case "CREATE_REVIEW_SUCCESS":{
            return {
                ...state,
                ...action.payload,
                loading:false,
                error:null
            }
        }
        case "CREATE_REVIEW_FAILURE":{
            return {...state,loading:false,error:action.payload}
        }
        case "UPDATE_REVIEW_REQUEST":{
            return {...state,loading:true,error:null}
        }
        case "UPDATE_REVIEW_SUCCESS":{
            return {
                ...state,
                ...action.payload,
                loading:false,
                error:null
            } 
        }
        case "UPDATE_REVIEW_FAILURE":{
            return {...state,loading:false,error:action.payload}
        }
        case "DELETE_REVIEW_REQUEST":{
            return {...state,loading:true,error:null}
        }
        case "DELETE_REVIEW_SUCCESS":{
            return {
                ...state,
                ...action.payload,
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