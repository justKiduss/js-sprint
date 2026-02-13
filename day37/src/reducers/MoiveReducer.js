export default function MovieReducer(state,action){
    switch(action.type){
        case "LOADING":{
            return {status:"loading",data:[],error:null}
        }
        case 'SUCCESS':{
            return {status:"success",data:[action.payload],error:null}
        }
        case 'FAILURE':{
            return {status:"failure",data:[],error:action.payload}
        }
        default:
            return state;
    }
}