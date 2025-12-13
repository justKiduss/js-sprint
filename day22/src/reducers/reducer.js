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
    default:{
        return state
    }
}
}