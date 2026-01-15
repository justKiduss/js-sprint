export default function reducer(state,action){
   switch(action.type){
    case "addTask":{
        const {id,text,done,priority,dueDate,parentId}=action.payload
        return [...state,{
        id:id,
        text:text,
        done:done,
        priority:priority,
        dueDate:dueDate,
        parentId:parentId
        }]
    }
    case "deleteTask":{
        const {id}=action.payload;
        function deleteTask(state,id){
            const children=state.filter((child)=>child.parentId===id)
            console.log("children",children);
            let newState=state.filter((task)=>task.id!==id);
            console.log("newState",newState);
            children.forEach((child)=>(
            newState=deleteTask(newState,child.id)
           ))
           return newState;
        }
        return deleteTask(state,id)
    }
    case "checkTask":{
        const {id}=action.payload;
        const info=state.find((task)=>task.id===id);
        function checkTask(state,id){
          let newState=state.map((task)=>task.id===id?{...task,done:!info.done}:task);
          let children=state.filter((child)=>child.parentId===id);
          
          children.map((child)=>(
            newState=checkTask(newState,child.id)
          ))
          return newState;
        }  
        return checkTask(state,id)
    }
    case "editTask":{
        const {id,text,dueDate,priority}=action.payload;
        return state.map((task)=>(
                task.id===id?
               {...task,text:text,priority:priority,dueDate:dueDate} :task
               ))
    }
   default:{
    return state;
   }
   }  
}