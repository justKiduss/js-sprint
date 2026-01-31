export default function reducer(state,action){
    switch(action.type){
        case "LOADING":{
            return {state:"loading",data:[],error:null}
        }
        case "SUCCESS":{
            return {state:"success",data:action.payload,error:null}
        }
        case "FAILURE":{
            return {status:"failure",data:[],error:action.payload}
        }
        default:
            return state
    }
}