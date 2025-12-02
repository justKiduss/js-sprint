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
        case "deleted":{
          return todos.filter((todo)=>(
            todo.id!==action.id
          ))
        }
        case "edited":{
          return todos.map((todo)=>(
             todo.id===action.id?{...todo,text:action.text}:todo
          ))
        }
        case "checked":{
          return todos.map((todo)=>(
            todo.id===action.id?{...todo,done:!todo.done}:todo
          ))
        }
        default :{
            return todos
        }
    }
} 