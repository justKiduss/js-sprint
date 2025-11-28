export default function TaskReducers(tasks,action){
    switch (action.type){
        case "added":{
            return [
             ...tasks,
             {
                id:action.id,
                text:action.text,
                category:action.category,
                done:false
             },
            ];
        }
        case "deleted":{
            return tasks.filter((task)=>(
              task.id!==action.id
            ))
        }
        case "check":{
            return tasks.map((task)=>(
              task.id===action.id? {...task,done:!task.done}:task
            ))
        }
        case "edited":{
          return tasks.map((task)=>(
            task.id===action.id?{...task,text:action.text}:task
          ))
        }
            default:
              return tasks;
    }
}