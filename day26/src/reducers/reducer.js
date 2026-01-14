export default function reducer(state,action){
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
        case "deleteTask":{
            const {id}=action.payload; 
            function deleteTask(state,id){
                let children=state.filter((child)=>child.parentId===id)
                let newState=state.filter((task)=>task.id!==id);
                    children.forEach((task)=>(
                      newState=deleteTask(newState,task.id)
                    ))
                    return newState
            }
            return deleteTask(state,id);
        }
        case "checkTask":{
            const {id}=action.payload;
            const info=state.find((task)=>(task.id===id))
            function checkTask(state,id){
                const children=state.filter((child)=>child.parentId===id)
                let newState=state.map((task)=>(
                    task.id===id?{...task,done:!info.done}:task
                ))
                children.forEach((child)=>(
                    newState=checkTask(newState,child.id)
                ))
                return newState
            }
            return checkTask(state,id)
        }
        default:{
            return state;
        }
    }
}