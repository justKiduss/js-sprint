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
    }
}

