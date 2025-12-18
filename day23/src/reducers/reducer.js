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
        return state.filter((sta)=>(
            sta.id!==id
        ))
    }
}
}