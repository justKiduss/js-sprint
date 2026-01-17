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
        case "checkTask":{
            const {id}=action.payload;
            const info=state.find((task)=>task.id===id);
            function checkTask(state,id){
                const children=state.filter((task)=>task.parentId===id);
                let newState=state.map((task)=>(
                task.id===id?{...task,done:!info.done}:task
            ))
            children.map((child)=>(
                newState=checkTask(newState,child.id)
            ))
            return newState;
            }
            return checkTask(state,id)
        }
        case "deleteTask":{
            const {id}=action.payload;
            function deleteTask(state,id){
                let newState=state.filter((task)=>task.id!==id);
                const children=state.filter((task)=>task.parentId===id);
                children.map((child)=>(
                    newState=deleteTask(newState,child.id)
                ))
                return newState;
            }
            return deleteTask(state,id);
        }
        case "editTask":{
            const {id,text,dueDate,priority}=action.payload;
            return state.map((task)=>(
                task.id===id?{...task,
                    text:text,
                    dueDate:dueDate,
                    priority:priority
                }:task
            ))
        }
        default:
            return state;
    }
}