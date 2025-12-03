export default function TaskReducer(todos,action){
   switch(action.type){
    case "add":{
       return[
        ...todos,{
            id:action.id,
            text:action.text,
            category:action.category,
            done:action.done,
        }
       ]
       }
       default:{
        return todos
   }
   }
}