export default function reducer(state,action){
    switch(action.type){
        
        case "addTask":{
        const {id,text,priority,dueDate,parentId,done}=action.payload;
        return [
        ...state,{
            id:id,
            text:text,
            priority:priority,
            dueDate:dueDate,
            parentId:parentId,
            done:done
        }
        ]
        }
        case "deleteTask":{
            const {id}=action.payload;
            function deleteTask(state,id){
                const children=state.filter((child)=>child.parentId===id);
                let newState=state.filter((task)=>task.id!==id);
                children.forEach((task)=>{
                    newState=deleteTask(newState,task.id)
                })
                return newState;
            }
            return deleteTask(state,id)
        }
        default :{
            return state
        }
        case "checkTask":{
            const {id}=action.payload;
            function checkTask(state,id){
               const info=state.find((task)=>task.id===id)
               // add feature it need them
               const children=state.filter((child)=>(child.parentId===id));

               let newState=state.map((task)=>(
                task.id===id?
                {...task,done:!info.done}:task
               ))

               children.forEach((child)=>{
                newState=checkTask(newState,child.id)
               })
               return newState;
            }
            return checkTask(state,id)
        }
    }
}

