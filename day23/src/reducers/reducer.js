export default function reducer(state,action){
switch(action.type){
    case "addTask":{
        const {id,text,priority,dueDate,done,parentId}=action.payload;
        return [
            ...state,{
                id,text,priority,dueDate,done,parentId
            }
        ]
    }
   case "deleteTask":{
        const id=action.id;
        function deleteTask(state,id){
         const childId=state.filter((tas)=>tas.parentId===id);
         let newState=state.filter(task=>task.id!==id);
         childId.forEach((children)=>{
            newState=deleteTask(newState,children.id)
         })
            return newState; 
        }
        return deleteTask(state,id);
    }
    case "checkTask":{
        const {id}=action.payload;
        console.log(id);
        function editTask(state,id,targetdone){
          const childId=state.filter((tas)=>tas.parentId===id)
          let newState=state.map((sta)=>(
            sta.id===id?
                {...sta,done:!targetdone}:sta
          ))
          console.log("newState 1",newState);
          childId.forEach((children)=>{
            newState=editTask(newState,children.id,targetdone);
          })
            console.log("newState",newState);
             return newState; 
        }
        const currentTask=state.find(t=>t.id===id);
        const targetdone=currentTask.done
        return editTask(state,id,targetdone);
    }
    case "editTask":{
        const {editedId,editedText}=action.payload;
        return [
            state.map((sta)=>(
               sta.id===editedId?{...sta,text:editedText}:sta
            ))
        ]
    }
}
}