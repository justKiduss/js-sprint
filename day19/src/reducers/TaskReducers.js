export default function TaskReducers(tasks,action){
    switch (action.type){
        case "added":{
            return [
             ...tasks,
             {
                id:action.id,
                text:action.text,
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
            default:
              return tasks;
    }
}