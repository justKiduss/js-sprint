export default function reducer(state,action){
switch(action.type){
    case "addTask":{
        const { id,text,category,priority,dueDate,done}=action.payload
        return [
             ...state,{
                id,text,category,priority,dueDate,done
             }
        ]
    }
    case "deleteTask":{
        const id=action.id;
        return  state.filter((sta)=>(
                id!==sta.id
            ))
        
    }
    case "editTask":{
        const id=action.id
        const editedText=action.editedText
        return( 
            state.map((sta)=>(
              sta.id===id? {...sta,text:editedText}:sta
            )))
    }
    case "checkTask":{
        const id=action.id;
        const done=action.done;
        return (
            state.map((sta)=>(
               sta.id===id? {...sta,done:done}:sta
            ))
        )
    }
    default:{
        return state
    }
}
}