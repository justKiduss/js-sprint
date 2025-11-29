export default function TodoReducers(todos,action){
    switch(action.type){
        case "added":{
           return[
            ...todos,{
                id:action.id,
                text:action.text,
                category:action.category,
                done:false
            }
           ];
        }
        default :{
            return todos
        }
    }
} 