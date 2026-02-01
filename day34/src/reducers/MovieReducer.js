export default function MovieReducer(state,action){
    switch(action.type){
        case 'SUCCESS':{
            return {status:"success",data:action.payload,error:null}
        }
        case 'FAILURE':{
            return {status:"failure",data:[],error:action.payload}
        }
        case 'LOADING':{
            return {status:"loading",data:[],error:null}
        }
        default:
            return state
    }
}