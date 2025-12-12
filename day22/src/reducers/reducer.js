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
}
}