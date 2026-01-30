export default function reducer(state,action){
    switch(action.type){
        case "LOADING":{
            return {status:"loading",data:[],error:null }
        }
        case "SUCCESS":{
            return {status:"success",data:action.payload,error:null}
        }
        case "FAILURE":{
            return {status:"error",data:[],error:action.payload}
        }
        default:{
            return state
        }
    }
} 