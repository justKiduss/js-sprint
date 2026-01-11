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
        default:{
            return state;
        }
    }
}