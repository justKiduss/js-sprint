export default function reducer(state,action){
    switch(action.type){
       case "idle":{
        return [{status:"idle",data:[],error:null}]
       }
       case "LOADING":{
        return [{status:"LOADING",data:[],error:null}]
       }
       case "SUCCESS":{
        return [{status:"SUCCESS",data:action.payload,error:null}]
       }
       case "ERROR":{
        return [{status:"ERROR",data:[],error:action.payload}]
       }
       default:{
        return state
       }
    }
}