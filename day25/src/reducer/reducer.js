export function reducer(state,action){

    switch(action.type){
        case "addTask":{
            const {id,text,priority,dueDate,done,parentId}=action.payload;
            return [
              ...state,{
                id:id,
                text:text,
                priority:priority,
                dueDate:dueDate,
                done:done,
                parentId:parentId
              }
            ]
        }
        case "addSubTask":{
          const {id,text,priority,dueDate,done,parentId}=action.payload;
          return [
            ...state,{
               id:id,
                text:text,
                priority:priority,
                dueDate:dueDate,
                done:done,
                parentId:parentId
            }
          ]
        }
        case "deleteTask":{
          const {id}=action.payload;
          return state.filter((task)=>(
            task.id!==id
          ))
        }
        default:{
          return state;
        }
    }
}